const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const inline = value => escapeHtml(value)
  .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');

export function renderLessonMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const html = [];
  let paragraph = [], list = [], quote = [], table = [];
  const flushParagraph = () => { if (paragraph.length) html.push(`<p>${inline(paragraph.join(' '))}</p>`); paragraph = []; };
  const flushList = () => { if (list.length) html.push(`<ul class="article-points">${list.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`); list = []; };
  const flushQuote = () => {
    if (quote.length) {
      const content = quote.map(item => inline(item)).join('<br>');
      html.push(`<div class="${quote[0].startsWith('**Inti aturan:**') ? 'article-rule' : 'article-example'}">${content}</div>`);
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
  const flush = () => { flushParagraph(); flushList(); flushQuote(); flushTable(); };
  for (const line of lines) {
    if (!line.trim()) { flush(); continue; }
    if (line.startsWith('# ')) { flush(); html.push(`<h1 class="article-title">${inline(line.slice(2))}</h1>`); continue; }
    if (line.startsWith('## ')) { flush(); html.push(`<h2 class="article-heading">${inline(line.slice(3))}</h2>`); continue; }
    if (line.startsWith('### ')) { flush(); html.push(`<h3 class="article-subheading">${inline(line.slice(4))}</h3>`); continue; }
    if (line.startsWith('> ')) { flushParagraph(); flushList(); flushTable(); quote.push(line.slice(2)); continue; }
    if (line.startsWith('- ')) { flushParagraph(); flushQuote(); flushTable(); list.push(line.slice(2)); continue; }
    if (line.startsWith('|')) { flushParagraph(); flushList(); flushQuote(); table.push(line); continue; }
    flushList(); flushQuote(); flushTable(); paragraph.push(line.trim());
  }
  flush();
  return html.join('');
}
