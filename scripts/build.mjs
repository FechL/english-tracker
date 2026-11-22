import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const output = join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'favicon.svg', 'README.md']) await cp(join(root, file), join(output, file));
await cp(join(root, 'src'), join(output, 'src'), { recursive: true });
await cp(join(root, 'content'), join(output, 'content'), { recursive: true });
console.log('Static site built in dist/');
