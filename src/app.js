import { modules, lessons, getLesson, getModule, lessonFileName } from './curriculum.js';
import { questionsFor } from './quiz.js';
import { practiceQuestions, finalPracticeQuestions } from './practice.js';
import { renderLessonMarkdown } from './markdown.js';

const root = document.querySelector('#app');
const STORE = 'grammar-log-progress-v2';
const themes = [
  ['jellybeans', 'Jellybeans', '#151515', '#597bc5', '#d8ad4c'],
  ['horizon', 'Horizon', '#1c1e26', '#e95678', '#fab795'],
  ['everforest', 'Everforest', '#272e33', '#a7c080', '#dbbc7f'],
  ['ayu', 'Ayu Dark', '#0b0e14', '#e6b450', '#ff8f40'],
  ['dracula', 'Dracula', '#282a36', '#bd93f9', '#f1fa8c'],
  ['nord', 'Nord', '#2e3440', '#88c0d0', '#ebcb8b'],
  ['gruvbox', 'Gruvbox Dark', '#282828', '#83a598', '#fabd2f'],
  ['solarized', 'Solarized Dark', '#002b36', '#268bd2', '#b58900'],
  ['tokyo', 'Tokyo Night', '#1a1b26', '#7aa2f7', '#e0af68'],
  ['catppuccin', 'Catppuccin Mocha', '#1e1e2e', '#89b4fa', '#f9e2af'],
];
const tabs = [
  ['overview', '00 / README.md'],
  ['lessons', '01 / Lessons'],
  ['practice', '02 / Practice'],
  ['progress', '03 / Progress'],
  ['settings', '99 / Configuration'],
];

function loadProgress() {
  try {
    const current = localStorage.getItem(STORE);
    const value = JSON.parse(current || localStorage.getItem('grammar-log-progress-v1') || '{}');
    return {
      read: Array.isArray(value.read) ? value.read.filter(id => getLesson(id)) : [],
      best: current && value.best && typeof value.best === 'object' ? value.best : {},
      attempts: value.attempts && typeof value.attempts === 'object' ? value.attempts : {},
      practiceBest: current && value.practiceBest && typeof value.practiceBest === 'object' ? value.practiceBest : {},
      lastLesson: getLesson(value.lastLesson) ? Number(value.lastLesson) : 1,
      theme: themes.some(item => item[0] === value.theme) ? value.theme : 'jellybeans',
    };
  } catch { return { read: [], best: {}, attempts: {}, practiceBest: {}, lastLesson: 1, theme: 'jellybeans' }; }
}
const saved = loadProgress();
const state = {
  ...saved,
  page: 'overview', lesson: saved.lastLesson, expandedModule: Math.ceil(saved.lastLesson / 5),
  mobileMenu: window.innerWidth <= 700 && !location.hash, answers: {}, result: null,
  warning: '', search: '', resetArmed: false, mobileIndex: false, practiceModule: 1, showTop: false,
  chatByLesson: {}, chatDrafts: {}, chatPending: {}, chatPendingMessage: {}, chatErrors: {}, chatConfigured: null, chatStatusError: '',
};

const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const pad = id => String(id).padStart(2, '0');
const mastered = id => Number(state.best[id] || 0) === 100;

function persist() {
  try { localStorage.setItem(STORE, JSON.stringify({ read: state.read, best: state.best, attempts: state.attempts, practiceBest: state.practiceBest, lastLesson: state.lastLesson, theme: state.theme })); }
  catch { /* The site still works when storage is unavailable. */ }
}
function applyTheme() { document.documentElement.dataset.theme = state.theme; }
function routeFromHash() {
  const [raw, rawId] = location.hash.slice(1).split('/');
  const page = raw === 'lesson' ? 'lessons' : tabs.some(tab => tab[0] === raw) ? raw : 'overview';
  state.page = page;
  if (getLesson(rawId)) state.lesson = Number(rawId);
  if (page === 'practice') state.practiceModule = rawId === 'final' ? 'final' : Number(rawId) >= 1 && Number(rawId) <= 8 ? Number(rawId) : 1;
  state.expandedModule = Math.ceil(state.lesson / 5);
  state.answers = {}; state.result = null; state.warning = '';
  state.mobileMenu = false; state.mobileIndex = false;
  render();
}
function navigate(page, id) {
  const next = page === 'lessons' ? `#lesson/${id || state.lesson}` : page === 'practice' ? `#practice/${id || state.practiceModule}` : `#${page}`;
  state.mobileMenu = false;
  if (location.hash === next) { routeFromHash(); window.scrollTo(0, 0); }
  else location.hash = next;
}
function lessonStatus(id) {
  return mastered(id) ? '<span class="badge success">MASTERED</span>' : state.read.includes(id) ? '<span class="badge info">READ</span>' : '—';
}
function progressBar(value, label) {
  return `<div class="meter" role="progressbar" aria-label="${esc(label)}" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"><span style="width:${value}%"></span></div>`;
}
function panel(title, body, extra = '') { return `<section class="panel ${extra}"><div class="panel-head"><h2>${title}</h2></div>${body}</section>`; }

function header() {
  const label = tabs.find(tab => tab[0] === state.page)?.[1] || 'README.md';
  return `<header class="site-head"><div class="brand-row"><div class="brand"><span class="brand-mark">[ G ]</span> GRAMMAR<span class="brand-dot">.</span>LOG</div><a class="github-profile" href="https://github.com/FechL" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile FechL">FechL</a></div><nav class="desktop-tabs" aria-label="Main navigation" role="tablist">${tabs.map(([id, name]) => `<button type="button" role="tab" aria-selected="${state.page === id}" class="tab ${state.page === id ? 'active' : ''} ${id === 'settings' ? 'end-tab' : ''}" data-nav="${id}">${name}</button>`).join('')}</nav><div class="mobile-current">${state.mobileMenu ? '<span>PAGE MENU</span>' : `<button type="button" class="text-button" data-action="menu">← Menu</button><span>${label}</span>`}</div></header>`;
}
function mobileMenu() {
  return `<main class="content"><section class="panel mobile-menu-panel"><div class="panel-head"><h2>OPEN PAGE</h2><span class="small-muted">SELECT A WORKSPACE</span></div><div class="mobile-menu-list">${tabs.map(([id, name]) => `<button type="button" data-nav="${id}" class="mobile-menu-item"><span>${name}</span><span class="menu-indicator">${id === state.page ? 'CURRENT' : 'OPEN'}</span></button>`).join('')}</div></section></main>`;
}
function overview() {
  const moduleCards = modules.map(module => {
    const group = lessons.filter(lesson => lesson.module === module.id);
    const done = group.filter(lesson => mastered(lesson.id)).length;
    return `<button type="button" class="module-card" data-open-module="${module.id}"><span class="module-top"><span class="module-index">MODULE ${pad(module.id)}</span><span class="module-count">${done}/5 MASTERED</span></span><strong>${esc(module.name)}</strong><span class="module-summary">${esc(module.summary)}</span>${progressBar(done * 20, `${module.name} mastery`)}<span class="module-foot">LESSONS ${pad(group[0].id)}—${pad(group[4].id)}</span></button>`;
  }).join('');
  return `${panel('README.md', `<div class="article-inner readme-content" data-readme>${readmeCache || '<p>Memuat README…</p>'}</div>`, 'readme-panel')}${panel('CURRICULUM / 8 MODULES', `<div class="module-grid">${moduleCards}</div>`, 'curriculum-panel')}`;
}
let readmeCache = '';
async function loadReadme() {
  if (!document.querySelector('[data-readme]') || readmeCache) return;
  try {
    const response = await fetch('./README.md');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderLessonMarkdown(await response.text());
    for (const heading of wrapper.querySelectorAll('h3.article-subheading')) {
      const details = document.createElement('details');
      details.className = 'readme-module';
      const summary = document.createElement('summary');
      summary.textContent = heading.textContent;
      const body = document.createElement('div');
      details.append(summary, body);
      heading.before(details);
      let next = heading.nextElementSibling;
      while (next && !next.matches('h2.article-heading, h3.article-subheading')) {
        const current = next;
        next = next.nextElementSibling;
        body.append(current);
      }
      heading.remove();
    }
    readmeCache = wrapper.innerHTML;
    const target = document.querySelector('[data-readme]');
    if (target) target.innerHTML = readmeCache;
  } catch {
    const target = document.querySelector('[data-readme]');
    if (target) target.innerHTML = '<p role="alert">README belum dapat dimuat. Muat ulang halaman untuk mencoba lagi.</p>';
  }
}
function lessonSidebar() {
  const term = state.search.trim().toLowerCase();
  return `<div class="lesson-left"><section class="panel lesson-actions-card"><div class="panel-head"><h2>LESSON ACTIONS</h2></div><div class="lesson-actions-body"><button type="button" class="${state.read.includes(state.lesson) ? 'secondary' : 'primary'}" data-action="mark-read">${state.read.includes(state.lesson) ? 'Sudah dibaca ✓' : 'Tandai sudah dibaca'}</button><button type="button" class="secondary" data-action="scroll-quiz">Lesson quiz ↓</button></div></section><aside class="panel lesson-sidebar ${state.mobileIndex ? 'index-open' : ''}"><div class="panel-head"><h2>LESSON INDEX</h2><span class="small-muted">40 ENTRIES</span><button type="button" class="mobile-index-toggle" data-action="toggle-index" aria-expanded="${state.mobileIndex}">${state.mobileIndex ? 'Tutup −' : 'Buka daftar +'}</button></div><div class="search-wrap"><label for="lesson-search">FIND LESSON</label><input id="lesson-search" type="search" placeholder="Search topic or number" value="${esc(state.search)}" autocomplete="off" /></div><div class="sidebar-scroll">${modules.map(module => {
    const list = lessons.filter(lesson => lesson.module === module.id && (!term || lesson.title.toLowerCase().includes(term) || pad(lesson.id).includes(term)));
    if (term && !list.length && !module.name.toLowerCase().includes(term)) return '';
    const visible = term || state.expandedModule === module.id;
    const entries = term && !list.length ? lessons.filter(lesson => lesson.module === module.id) : list;
    return `<div class="sidebar-module"><button type="button" class="module-toggle ${visible ? 'open' : ''}" data-expand="${module.id}" aria-expanded="${visible}"><span>${pad(module.id)} / ${esc(module.name)}</span><span>${visible ? '−' : '+'}</span></button>${visible ? `<div class="lesson-links">${entries.map(lesson => `<button type="button" data-open-lesson="${lesson.id}" class="lesson-link ${state.lesson === lesson.id ? 'selected' : ''}" aria-current="${state.lesson === lesson.id ? 'page' : 'false'}"><span>${pad(lesson.id)} <span class="lesson-link-title">${esc(lesson.title)}</span></span><span class="link-state ${mastered(lesson.id) ? 'done' : state.read.includes(lesson.id) ? 'read' : ''}">${mastered(lesson.id) ? '✓' : state.read.includes(lesson.id) ? '•' : ''}</span></button>`).join('')}</div>` : ''}</div>`;
  }).join('')}</div></aside>${lessonChatCard()}</div>`;
}
function lessonChatCard() {
  const lesson = getLesson(state.lesson);
  const messages = state.chatByLesson[lesson.id] || [];
  const pending = Boolean(state.chatPending[lesson.id]);
  const configured = state.chatConfigured === true;
  const status = state.chatConfigured === null ? 'Memeriksa koneksi chat…' : configured ? '' : state.chatStatusError || 'Chat belum aktif. Isi GEMINI_API_KEY di server lalu muat ulang halaman.';
  const bubbles = messages.map(entry => `<div class="chat-message ${entry.role === 'user' ? 'from-user' : 'from-assistant'}"><span>${entry.role === 'user' ? 'KAMU' : 'GEMINI'}</span><p>${esc(entry.text)}</p></div>`).join('');
  const pendingBubble = pending ? `<div class="chat-message from-user"><span>KAMU</span><p>${esc(state.chatPendingMessage[lesson.id])}</p></div><p class="chat-loading" role="status">Gemini sedang menjawab…</p>` : '';
  return `<section class="panel lesson-chat-card" aria-label="Tutor bahasa Inggris"><div class="panel-head"><h2>ASK GEMINI</h2><span class="small-muted">LESSON ${pad(lesson.id)}</span></div><div class="chat-context"><strong>${esc(lesson.title)}</strong><p>Hanya pertanyaan seputar bahasa Inggris. Jawaban memakai konteks lesson ini.</p></div><div class="chat-log" role="log" aria-label="Percakapan lesson ${pad(lesson.id)}" aria-live="polite">${bubbles || '<p class="chat-empty">Tanyakan bagian materi yang belum jelas.</p>'}${pendingBubble}</div>${status ? `<p class="chat-status" role="status">${esc(status)}</p>` : ''}${state.chatErrors[lesson.id] ? `<p class="chat-error" role="alert">${esc(state.chatErrors[lesson.id])}</p>` : ''}<form class="lesson-chat-form" data-chat-form data-lesson-id="${lesson.id}"><label for="lesson-chat-input">PERTANYAANMU</label><textarea id="lesson-chat-input" name="message" rows="3" maxlength="1500" placeholder="Contoh: Apa beda object dan complement?" ${configured && !pending ? '' : 'disabled'}>${esc(state.chatDrafts[lesson.id] || '')}</textarea><button type="submit" class="primary" ${configured && !pending ? '' : 'disabled'}>Kirim pertanyaan</button></form></section>`;
}
const articleCache = new Map();
async function loadArticle(lesson) {
  const target = document.querySelector(`[data-article-id="${lesson.id}"]`);
  if (!target || articleCache.has(lesson.id)) return;
  try {
    const response = await fetch(`./content/lessons/${lessonFileName(lesson)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = renderLessonMarkdown(await response.text());
    articleCache.set(lesson.id, html);
    if (target.isConnected) target.innerHTML = html;
  } catch {
    if (target.isConnected) target.innerHTML = '<p role="alert">Artikel belum dapat dimuat. Muat ulang halaman untuk mencoba lagi.</p>';
  }
}
function questionMarkup(q, qi, result, isLesson) {
  return `<fieldset class="${isLesson ? '' : 'panel '}question-panel"><legend class="sr-only">Question ${qi + 1}</legend><div class="question-top"><span>QUESTION ${pad(qi + 1)}</span></div><h2>${esc(q.prompt)}</h2><div class="options">${q.options.map((option, oi) => {
    const selected = Number(state.answers[qi]) === oi;
    const resultClass = result ? oi === q.answer ? 'right' : selected ? 'wrong' : '' : '';
    return `<label class="option ${selected ? 'selected' : ''} ${resultClass}"><input type="radio" name="q${qi}" value="${oi}" data-question="${qi}" ${selected ? 'checked' : ''} ${result ? 'disabled' : ''} /><span class="option-index">${String.fromCharCode(65 + oi)}</span><span>${esc(option)}</span>${result && oi === q.answer ? '<span class="option-mark">✓</span>' : ''}</label>`;
  }).join('')}</div>${result ? `<div class="explanation ${result.correct[qi] ? 'correct' : 'incorrect'}"><strong>${result.correct[qi] ? 'BENAR' : 'PELAJARI LAGI'}</strong><p>${esc(q.explanation)}</p></div>` : ''}</fieldset>`;
}
function quizMarkup(questions, scope, id) {
  const result = state.result?.scope === scope && state.result?.id === id ? state.result : null;
  const isLesson = scope === 'lesson';
  const heading = isLesson ? `QUIZ / LESSON ${pad(id)}` : id === 'final' ? 'PRACTICE / FINAL' : `PRACTICE / MODULE ${pad(id)}`;
  return `<section class="lesson-quiz ${isLesson ? 'panel' : ''}" id="lesson-quiz"><div class="${isLesson ? '' : 'panel practice-header'}"><div class="panel-head"><h2>${heading}</h2><span class="small-muted">${questions.length} SOAL</span></div></div><div class="quiz-questions">${questions.map((q, qi) => questionMarkup(q, qi, result, isLesson)).join('')}</div>${state.warning ? `<div class="inline-warning" role="alert">${esc(state.warning)}</div>` : ''}${result ? `<section class="${isLesson ? '' : 'panel '}result-panel" aria-live="polite"><div><span class="eyebrow">HASIL LATIHAN</span><h2>${result.score}/${questions.length} benar <span>· ${result.percent}%</span></h2><p>${result.percent === 100 ? 'Semua benar. Hasil tersimpan di perangkat ini.' : 'Baca penjelasan di atas, lalu coba lagi.'}</p></div><div class="result-actions"><button type="button" class="primary" data-action="retry">Ulangi</button>${isLesson ? `<button type="button" class="secondary" data-open-lesson="${Math.min(id + 1, 40)}">${id === 40 ? 'Lihat lesson' : 'Lesson berikutnya'}</button>` : ''}</div></section>` : `<div class="submit-row"><button type="button" class="primary" data-action="submit-${scope}">Nilai jawaban</button></div>`}</section>`;
}
function lessonsPage() {
  const l = getLesson(state.lesson);
  const prev = getLesson(l.id - 1), next = getLesson(l.id + 1);
  const article = articleCache.get(l.id) || '<p class="article-lead">Memuat artikel…</p>';
  return `<div class="lesson-layout">${lessonSidebar()}<div class="lesson-body">
    <article class="panel lesson-article" lang="id" style="--lesson-title-color:var(--${['cyan', 'yellow', 'green', 'violet', 'accent'][(l.id - 1) % 5]})"><div class="article-inner" data-article-id="${l.id}">${article}</div></article>
    ${quizMarkup(questionsFor(l), 'lesson', l.id)}
    <div class="lesson-footer"><button type="button" class="secondary" data-open-lesson="${prev?.id || l.id}" ${prev ? '' : 'disabled'}>Previous lesson</button><span>${pad(l.id)} / 40</span><button type="button" class="secondary" data-open-lesson="${next?.id || l.id}" ${next ? '' : 'disabled'}>Next lesson</button></div>
  </div></div>`;
}
function practicePage() {
  const selected = state.practiceModule;
  const questions = selected === 'final' ? finalPracticeQuestions() : practiceQuestions(selected);
  const moduleLinks = modules.map(module => `<button type="button" class="practice-link ${selected === module.id ? 'selected' : ''}" data-practice-module="${module.id}" aria-current="${selected === module.id ? 'page' : 'false'}"><span><span class="practice-link-number">${pad(module.id)}</span> ${esc(module.name)}</span><span class="practice-link-score">${state.practiceBest[module.id] === undefined ? '' : `${state.practiceBest[module.id]}%`}</span></button>`).join('');
  const finalLink = `<button type="button" class="practice-link final ${selected === 'final' ? 'selected' : ''}" data-practice-module="final" aria-current="${selected === 'final' ? 'page' : 'false'}"><span><span class="practice-link-number">09</span> All modules review</span><span class="practice-link-score">${state.practiceBest.final === undefined ? '' : `${state.practiceBest.final}%`}</span></button>`;
  return `<div class="practice-layout"><aside class="panel practice-sidebar ${state.mobileIndex ? 'index-open' : ''}"><div class="panel-head"><h2>PRACTICE INDEX</h2><button type="button" class="mobile-index-toggle" data-action="toggle-index" aria-expanded="${state.mobileIndex}">${state.mobileIndex ? 'Tutup −' : 'Buka daftar +'}</button></div><div class="practice-links">${moduleLinks}${finalLink}</div></aside><div class="practice-body">${quizMarkup(questions, 'practice', selected)}</div></div>`;
}
function progressPage() {
  const practiceRow = (id, name, count) => `<tr><td><button type="button" class="table-link" data-practice-module="${id}">${id === 'final' ? 'FINAL' : pad(id)} / ${esc(name)}</button></td><td>${count}</td><td>${state.practiceBest[id] === undefined ? '—' : `${state.practiceBest[id]}%`}</td></tr>`;
  const practiceRows = modules.map(module => practiceRow(module.id, module.name, 20)).join('') + practiceRow('final', 'All modules review', 40);
  const lessonRows = lessons.map(l => `<tr><td><button type="button" class="table-link" data-open-lesson="${l.id}">${pad(l.id)} / ${esc(l.title)}</button></td><td>${pad(l.module)} / ${esc(getModule(l.module).name)}</td><td>${lessonStatus(l.id)}</td><td>${state.best[l.id] === undefined ? '—' : `${state.best[l.id]}%`}</td><td>${Number(state.attempts[l.id] || 0)}</td></tr>`).join('');
  return `${panel('PRACTICE MODULE', `<div class="table-wrap"><table><thead><tr><th>MODULE</th><th>QUESTIONS</th><th>BEST SCORE</th></tr></thead><tbody>${practiceRows}</tbody></table></div>`)}${panel('LESSON LEDGER', `<div class="table-wrap"><table class="ledger"><thead><tr><th>LESSON</th><th>MODULE</th><th>STATUS</th><th>BEST QUIZ</th><th>ATTEMPTS</th></tr></thead><tbody>${lessonRows}</tbody></table></div>`)}`;
}
function settingsPage() {
  return `${panel('COLOR THEME / 10 PALETTES', `<div class="settings-intro"><span class="eyebrow">99 / CONFIGURATION</span><h1>Set your workspace.</h1><p>Choose a terminal palette. Your preference is saved with your progress on this device.</p></div><div class="theme-grid">${themes.map(([id, name, bg, accent, yellow]) => `<button type="button" class="theme-choice ${state.theme === id ? 'selected' : ''}" data-theme="${id}" aria-pressed="${state.theme === id}"><span class="swatches"><i style="background:${bg}"></i><i style="background:${accent}"></i><i style="background:${yellow}"></i></span><span>${esc(name)}</span><span class="theme-state">${state.theme === id ? 'SELECTED ✓' : 'SELECT'}</span></button>`).join('')}</div>`)}${panel('LOCAL DATA', `<div class="settings-data"><div><strong>PROGRESS STORAGE</strong><p>Reading status, best quiz scores, attempts, and theme live in this browser’s local storage. They are not synced across devices.</p></div><button type="button" class="danger" data-action="reset">${state.resetArmed ? 'Confirm reset progress' : 'Reset progress'}</button></div>${state.resetArmed ? '<p class="reset-warning" role="alert">This clears all lesson and quiz progress on this device. Click again to confirm.</p>' : ''}`)}`;
}
function render() {
  applyTheme();
  root.innerHTML = `<div class="terminal-app"><div class="workspace">${header()}${state.mobileMenu ? mobileMenu() : `<main class="content">${({ overview, lessons: lessonsPage, practice: practicePage, progress: progressPage, settings: settingsPage })[state.page]()}</main>`}</div></div><button type="button" class="back-to-top ${state.showTop ? 'visible' : ''}" data-action="back-to-top" aria-label="Kembali ke atas" title="Kembali ke atas">↑ <span>TOP</span></button>`;
  if (!state.mobileMenu && state.page === 'lessons') loadArticle(getLesson(state.lesson));
  if (!state.mobileMenu && state.page === 'overview') loadReadme();
}

root.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.nav) return navigate(button.dataset.nav);
  if (button.dataset.openLesson) { state.lesson = Number(button.dataset.openLesson); state.lastLesson = state.lesson; persist(); return navigate('lessons', state.lesson); }
  if (button.dataset.practiceModule) return navigate('practice', button.dataset.practiceModule);
  if (button.dataset.openModule) { state.lesson = (Number(button.dataset.openModule) - 1) * 5 + 1; state.lastLesson = state.lesson; persist(); return navigate('lessons', state.lesson); }
  if (button.dataset.expand) { state.expandedModule = state.expandedModule === Number(button.dataset.expand) ? 0 : Number(button.dataset.expand); return render(); }
  if (button.dataset.theme) { state.theme = button.dataset.theme; persist(); return render(); }
  switch (button.dataset.action) {
    case 'menu': state.mobileMenu = true; render(); break;
    case 'toggle-index': state.mobileIndex = !state.mobileIndex; render(); break;
    case 'mark-read': if (!state.read.includes(state.lesson)) state.read.push(state.lesson); persist(); render(); break;
    case 'scroll-quiz': loadArticle(getLesson(state.lesson)).then(() => document.querySelector('#lesson-quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' })); break;
    case 'back-to-top': window.scrollTo({ top: 0, behavior: 'smooth' }); break;
    case 'submit-lesson':
    case 'submit-practice': {
      const scope = button.dataset.action === 'submit-lesson' ? 'lesson' : 'practice';
      const id = scope === 'lesson' ? state.lesson : state.practiceModule;
      const qs = scope === 'lesson' ? questionsFor(getLesson(id)) : id === 'final' ? finalPracticeQuestions() : practiceQuestions(id);
      if (qs.some((_, index) => state.answers[index] === undefined)) { state.warning = `Jawab semua ${qs.length} soal sebelum menilai.`; render(); document.querySelector('#lesson-quiz')?.scrollIntoView({ behavior: 'smooth' }); return; }
      const correct = qs.map((q, index) => Number(state.answers[index]) === q.answer);
      const score = correct.filter(Boolean).length, value = Math.round(score / qs.length * 100);
      state.result = { scope, id, correct, score, percent: value };
      if (scope === 'lesson') {
        state.best[id] = Math.max(Number(state.best[id] || 0), value);
        state.attempts[id] = Number(state.attempts[id] || 0) + 1;
        if (value === 100 && !state.read.includes(id)) state.read.push(id);
      } else state.practiceBest[id] = Math.max(Number(state.practiceBest[id] || 0), value);
      state.warning = ''; persist(); render();
      document.querySelector('.result-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      break;
    }
    case 'retry': state.answers = {}; state.result = null; state.warning = ''; render(); document.querySelector('#lesson-quiz')?.scrollIntoView({ behavior: 'smooth' }); break;
    case 'reset':
      if (!state.resetArmed) { state.resetArmed = true; render(); }
      else { state.read = []; state.best = {}; state.attempts = {}; state.practiceBest = {}; state.lastLesson = 1; state.resetArmed = false; persist(); render(); }
      break;
  }
});
root.addEventListener('change', event => {
  if (event.target.matches('[data-question]')) { state.answers[Number(event.target.dataset.question)] = Number(event.target.value); state.warning = ''; render(); }
});
root.addEventListener('input', event => {
  if (event.target.id === 'lesson-chat-input') {
    state.chatDrafts[state.lesson] = event.target.value;
    return;
  }
  if (event.target.id === 'lesson-search') {
    const position = event.target.selectionStart;
    state.search = event.target.value;
    render();
    const input = document.querySelector('#lesson-search');
    input?.focus(); input?.setSelectionRange(position, position);
  }
});
root.addEventListener('submit', async event => {
  const form = event.target.closest('[data-chat-form]');
  if (!form) return;
  event.preventDefault();
  const id = Number(form.dataset.lessonId);
  const message = form.elements.message.value.trim();
  if (!message || !getLesson(id) || state.chatConfigured !== true || state.chatPending[id]) return;
  const history = (state.chatByLesson[id] || []).slice(-8);
  state.chatPending[id] = true;
  state.chatPendingMessage[id] = message;
  state.chatDrafts[id] = '';
  state.chatErrors[id] = '';
  render();
  try {
    const response = await fetch('./api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lessonId: id, message, history }) });
    const data = await response.json();
    if (!response.ok || !data.answer) throw new Error(data.error || 'Chat belum dapat menjawab. Coba lagi.');
    state.chatByLesson[id] = [...(state.chatByLesson[id] || []), { role: 'user', text: message }, { role: 'assistant', text: data.answer }].slice(-20);
  } catch (error) {
    state.chatDrafts[id] = message;
    state.chatErrors[id] = error.message || 'Chat belum dapat menjawab. Coba lagi.';
  } finally {
    state.chatPending[id] = false;
    state.chatPendingMessage[id] = '';
    if (state.page === 'lessons' && state.lesson === id) {
      render();
      const log = document.querySelector('.chat-log');
      if (log) log.scrollTop = log.scrollHeight;
    }
  }
});
async function loadChatStatus() {
  try {
    const response = await fetch('./api/chat/status', { cache: 'no-store' });
    if (!response.ok) throw new Error('Chat memerlukan server Node.');
    state.chatConfigured = Boolean((await response.json()).configured);
    state.chatStatusError = state.chatConfigured ? '' : 'Chat belum aktif. Isi GEMINI_API_KEY di .env lalu jalankan ulang server.';
  } catch {
    state.chatConfigured = false;
    state.chatStatusError = 'Chat memerlukan server Node dengan endpoint Gemini.';
  }
  if (state.page === 'lessons') render();
}
window.addEventListener('hashchange', () => { routeFromHash(); window.scrollTo(0, 0); });
window.addEventListener('scroll', () => {
  const visible = window.scrollY > 500;
  if (visible !== state.showTop) {
    state.showTop = visible;
    document.querySelector('.back-to-top')?.classList.toggle('visible', visible);
  }
}, { passive: true });
routeFromHash();
if (!location.hash && window.innerWidth <= 700) { state.mobileMenu = true; render(); }
loadChatStatus();
