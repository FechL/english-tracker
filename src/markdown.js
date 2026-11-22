const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const inline = value => escapeHtml(value)
  .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*([^*\s][^*]*?)\*/g, '<em>$1</em>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');

const CALLOUT_LABELS = /^\*\*(Inti aturan|Kunci|Ingat|Tips|Catatan):\*\*/;

// Short role codes used in `::: breakdown` blocks. Each maps to a readable
// label and a colour group so the same role always looks the same.
const ROLES = {
  S: ['Subject', 's'], V: ['Verb', 'v'], O: ['Object', 'o'], DO: ['Direct Object', 'o'], IO: ['Indirect Object', 'io'],
  C: ['Complement', 'c'], SC: ['Subject Complement', 'c'], OC: ['Object Complement', 'c'], A: ['Adverbial', 'a'],
  AUX: ['Auxiliary', 'v'],
  NOUN: ['Noun', 's'], PRONOUN: ['Pronoun', 's'], VERB: ['Verb', 'v'], ADJECTIVE: ['Adjective', 'c'], ADVERB: ['Adverb', 'a'],
  DETERMINER: ['Determiner', 'io'], MANNER: ['Manner', 'a'], PLACE: ['Place', 'a'], TIME: ['Time', 'a'],
};
// "O (baru disebut)" keeps the Object colour and appends the note to the label.
const roleFor = label => {
  const [, code = '', rest = ''] = label.trim().match(/^([A-Za-z]+)\s*(.*)$/) || [];
  const known = ROLES[code.toUpperCase()];
  return known ? { text: [known[0], rest].filter(Boolean).join(' '), tone: known[1] } : { text: label.trim(), tone: 'x' };
};

function renderBlock(kind, lines) {
  if (kind === 'breakdown') {
    const parts = [], notes = [];
    for (const line of lines) {
      if (line.startsWith('= ')) { notes.push(line.slice(2)); continue; }
      const [text, label = ''] = line.split('|');
      const role = roleFor(label);
      parts.push(`<span class="bd-part tone-${role.tone}"><span class="bd-text">${inline(text.trim())}</span>${label.trim() ? `<span class="bd-label">${inline(role.text)}</span>` : ''}</span>`);
    }
    return `<figure class="breakdown"><figcaption>SENTENCE BREAKDOWN</figcaption><div class="bd-parts">${parts.join('')}</div>${notes.map(note => `<p class="bd-note">${inline(note)}</p>`).join('')}</figure>`;
  }
  if (kind === 'patterns') {
    const cards = lines.map((line, index) => {
      const [formula, example = '', note = ''] = line.split('|').map(cell => cell.trim());
      return `<li class="pattern-card"><span class="pc-num">${index + 1}</span><div><strong class="pc-formula">${inline(formula)}</strong>${example ? `<p class="pc-example">${inline(example)}</p>` : ''}${note ? `<p class="pc-note">${inline(note)}</p>` : ''}</div></li>`;
    });
    return `<ol class="pattern-cards">${cards.join('')}</ol>`;
  }
  return `<div class="article-example">${lines.map(inline).join('<br>')}</div>`;
}

export function renderLessonMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const html = [];
  let paragraph = [], list = [], quote = [], table = [], fixes = [], block = null;
  const flushParagraph = () => { if (paragraph.length) html.push(`<p>${inline(paragraph.join(' '))}</p>`); paragraph = []; };
  const flushList = () => { if (list.length) html.push(`<ul class="article-points">${list.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`); list = []; };
  const flushQuote = () => {
    if (quote.length) {
      const content = quote.map(item => inline(item)).join('<br>');
      html.push(`<div class="${CALLOUT_LABELS.test(quote[0]) ? 'article-rule' : 'article-example'}">${content}</div>`);
    }
    quote = [];
  };
  const flushTable = () => {
    if (table.length) {
      const rows = table.map(row => row.split('|').slice(1, -1).map(cell => cell.trim()));
      const head = rows[0] || [];
      const body = rows.slice(2);
      html.push(`<div class="table-wrap"><table class="pattern-table"><thead><tr>${head.map(cell => `<th>${inline(cell)}</th>`).join('')}</tr></thead><tbody>${body.map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
    }
    table = [];
  };
  const flushFixes = () => {
    if (fixes.length) html.push(`<div class="fix-lines">${fixes.map(({ ok, text }) => `<p class="${ok ? 'fix-right' : 'fix-wrong'}"><span aria-hidden="true">${ok ? '✓' : '✗'}</span><span class="sr-only">${ok ? 'Benar: ' : 'Salah: '}</span>${inline(text)}</p>`).join('')}</div>`);
    fixes = [];
  };
  const flush = () => { flushParagraph(); flushList(); flushQuote(); flushTable(); flushFixes(); };
  for (const line of lines) {
    if (block) {
      if (line.trim() === ':::') { html.push(renderBlock(block.kind, block.lines)); block = null; }
      else if (line.trim()) block.lines.push(line.trim());
      continue;
    }
    if (line.startsWith(':::')) { flush(); block = { kind: line.slice(3).trim(), lines: [] }; continue; }
    if (!line.trim()) { flush(); continue; }
    if (line.startsWith('# ')) { flush(); html.push(`<h1 class="article-title">${inline(line.slice(2))}</h1>`); continue; }
    if (line.startsWith('## ')) { flush(); html.push(`<h2 class="article-heading">${inline(line.slice(3))}</h2>`); continue; }
    if (line.startsWith('### ')) { flush(); html.push(`<h3 class="article-subheading">${inline(line.slice(4))}</h3>`); continue; }
    if (line.startsWith('❌ ') || line.startsWith('✅ ')) { flushParagraph(); flushList(); flushQuote(); flushTable(); fixes.push({ ok: line.startsWith('✅'), text: line.slice(2).trim() }); continue; }
    if (line.startsWith('> ')) { flushParagraph(); flushList(); flushTable(); flushFixes(); quote.push(line.slice(2)); continue; }
    if (line.startsWith('- ')) { flushParagraph(); flushQuote(); flushTable(); flushFixes(); list.push(line.slice(2)); continue; }
    if (line.startsWith('|')) { flushParagraph(); flushList(); flushQuote(); flushFixes(); table.push(line); continue; }
    flushList(); flushQuote(); flushTable(); flushFixes(); paragraph.push(line.trim());
  }
  if (block) html.push(renderBlock(block.kind, block.lines));
  flush();
  return html.join('');
}
