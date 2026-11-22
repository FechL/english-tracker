import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { askGemini, ChatInputError } from './chat.mjs';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const envFile = await readFile(join(projectRoot, '.env'), 'utf8').catch(() => '');
for (const line of envFile.split(/\r?\n/)) {
  const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
  if (!match || process.env[match[1]] !== undefined) continue;
  let value = match[2].trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
  else value = value.replace(/\s+#.*$/, '').trim();
  process.env[match[1]] = value;
}

const production = process.argv.includes('--production');
const staticRoot = production ? join(projectRoot, 'dist') : projectRoot;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';
const apiKey = process.env.GEMINI_API_KEY?.trim();
const model = process.env.GEMINI_MODEL?.trim() || 'gemini-3.5-flash-lite';
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.md': 'text/markdown; charset=utf-8' };
const staticPath = pathname => pathname === '/' || ['/index.html', '/styles.css', '/favicon.svg', '/README.md'].includes(pathname)
  || /^\/src\/[a-zA-Z0-9_-]+\.js$/.test(pathname)
  || /^\/content\/lessons\/[a-z0-9-]+\.md$/.test(pathname);

function json(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 16000) throw Object.assign(new ChatInputError('Pertanyaan terlalu panjang.'), { status: 413 });
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw new ChatInputError('Format permintaan tidak valid.'); }
}

createServer(async (request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname); }
  catch { json(response, 400, { error: 'Alamat tidak valid.' }); return; }

  if (pathname === '/api/chat/status') {
    if (request.method !== 'GET') { json(response, 405, { error: 'Method tidak didukung.' }); return; }
    json(response, 200, { configured: Boolean(apiKey) });
    return;
  }
  if (pathname === '/api/chat') {
    if (request.method !== 'POST') { json(response, 405, { error: 'Method tidak didukung.' }); return; }
    if (!request.headers['content-type']?.startsWith('application/json')) { json(response, 415, { error: 'Gunakan JSON.' }); return; }
    if (request.headers.origin) {
      try {
        if (new URL(request.headers.origin).host !== request.headers.host) { json(response, 403, { error: 'Origin tidak diizinkan.' }); return; }
      } catch { json(response, 403, { error: 'Origin tidak diizinkan.' }); return; }
    }
    try {
      const result = await askGemini(await readJson(request), { apiKey, model });
      json(response, result.status, result.status === 200 ? { answer: result.answer } : { error: result.error });
    } catch (error) {
      json(response, error instanceof ChatInputError ? error.status : 500, { error: error instanceof ChatInputError ? error.message : 'Chat tidak dapat diproses.' });
    }
    return;
  }

  if (!['GET', 'HEAD'].includes(request.method) || !staticPath(pathname)) {
    response.writeHead(404).end();
    return;
  }
  const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = resolve(join(staticRoot, relativePath));
  try {
    if (!(await stat(file)).isFile()) throw new Error('Not a file');
    const extension = file.slice(file.lastIndexOf('.'));
    response.writeHead(200, { 'Content-Type': mime[extension] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : await readFile(file));
  } catch { response.writeHead(404).end(); }
}).listen(port, host, () => console.log(`GRAMMAR.LOG ready at http://${host}:${port}${production ? ' (production)' : ''}`));
