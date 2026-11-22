import { modules, lessons, getLesson, getModule } from './curriculum.js';
import { getLessonDetail, moduleSources } from './lessonDetails.js';
import { articleSections } from './articles.js';

const root = document.querySelector('#app');
const STORE = 'grammar-log-progress-v1';
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
    const value = JSON.parse(localStorage.getItem(STORE) || '{}');
    return {
      read: Array.isArray(value.read) ? value.read.filter(id => getLesson(id)) : [],
      best: value.best && typeof value.best === 'object' ? value.best : {},
      attempts: value.attempts && typeof value.attempts === 'object' ? value.attempts : {},
      lastLesson: getLesson(value.lastLesson) ? Number(value.lastLesson) : 1,
      theme: themes.some(item => item[0] === value.theme) ? value.theme : 'jellybeans',
    };
  } catch { return { read: [], best: {}, attempts: {}, lastLesson: 1, theme: 'jellybeans' }; }
}
const saved = loadProgress();
const state = {
  ...saved,
  page: 'overview', lesson: saved.lastLesson, expandedModule: Math.ceil(saved.lastLesson / 5),
  mobileMenu: window.innerWidth <= 700 && !location.hash, answers: {}, result: null,
  warning: '', search: '', resetArmed: false, mobileIndex: false,
};

const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const pad = id => String(id).padStart(2, '0');
const mastered = id => Number(state.best[id] || 0) === 100;
const readCount = () => state.read.length;
const masteredCount = () => lessons.filter(lesson => mastered(lesson.id)).length;
const percent = count => Math.round(count / lessons.length * 100);

function persist() {
  try { localStorage.setItem(STORE, JSON.stringify({ read: state.read, best: state.best, attempts: state.attempts, lastLesson: state.lastLesson, theme: state.theme })); }
  catch { /* The site still works when storage is unavailable. */ }
}
function applyTheme() { document.documentElement.dataset.theme = state.theme; }
function routeFromHash() {
  const [raw, rawId] = location.hash.slice(1).split('/');
  const page = raw === 'lesson' ? 'lessons' : tabs.some(tab => tab[0] === raw) ? raw : 'overview';
  state.page = page;
  if (getLesson(rawId)) state.lesson = Number(rawId);
  state.expandedModule = Math.ceil(state.lesson / 5);
  state.answers = {}; state.result = null; state.warning = '';
  state.mobileMenu = false; state.mobileIndex = false;
  render();
}
function navigate(page, id) {
  const next = page === 'lessons' ? `#lesson/${id || state.lesson}` : page === 'practice' ? `#practice/${id || state.lesson}` : `#${page}`;
  state.mobileMenu = false;
  if (location.hash === next) { routeFromHash(); window.scrollTo(0, 0); }
  else location.hash = next;
}
function lessonStatus(id) {
  return mastered(id) ? '<span class="badge success">MASTERED</span>' : state.read.includes(id) ? '<span class="badge info">READ</span>' : '<span class="badge muted">NEW</span>';
}
function progressBar(value, label) {
  return `<div class="meter" role="progressbar" aria-label="${esc(label)}" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"><span style="width:${value}%"></span></div>`;
}
function panel(title, body, extra = '') { return `<section class="panel ${extra}"><div class="panel-head"><h2>${title}</h2></div>${body}</section>`; }

function header() {
  const label = tabs.find(tab => tab[0] === state.page)?.[1] || 'README.md';
  return `<header class="site-head"><div class="brand-row"><div><div class="brand"><span class="brand-mark">[ G ]</span> GRAMMAR<span class="brand-dot">.</span>LOG</div><div class="brand-caption">ENGLISH LEARNING TRACKER <span class="divider">/</span> 40 LESSONS <span class="divider">/</span> 8 MODULES</div></div><div class="head-status"><span class="status-pip"></span> LOCAL PROGRESS <span class="head-percent">${percent(masteredCount())}% COMPLETE</span></div></div><nav class="desktop-tabs" aria-label="Main navigation" role="tablist">${tabs.map(([id, name]) => `<button type="button" role="tab" aria-selected="${state.page === id}" class="tab ${state.page === id ? 'active' : ''} ${id === 'settings' ? 'end-tab' : ''}" data-nav="${id}">${name}</button>`).join('')}</nav><div class="mobile-current">${state.mobileMenu ? '<span>PAGE MENU</span>' : `<button type="button" class="text-button" data-action="menu">← Menu</button><span>${label}</span>`}</div></header>`;
}
function mobileMenu() {
  return `<main class="content"><section class="panel mobile-menu-panel"><div class="panel-head"><h2>OPEN PAGE</h2><span class="small-muted">SELECT A WORKSPACE</span></div><div class="mobile-menu-list">${tabs.map(([id, name]) => `<button type="button" data-nav="${id}" class="mobile-menu-item"><span>${name}</span><span class="menu-indicator">${id === state.page ? 'CURRENT' : 'OPEN'}</span></button>`).join('')}</div></section></main>`;
}
function overview() {
  const next = lessons.find(lesson => !mastered(lesson.id)) || lessons[39];
  const body = `<div class="intro-grid"><section class="panel intro"><div class="eyebrow">00 / FIELD GUIDE</div><h1>Build better English,<br><span>one pattern at a time.</span></h1><p>Forty focused lessons, eight modules, and a short quiz after every lesson. Read the rule, inspect real examples, test your understanding, and watch your progress accumulate on this device.</p><div class="intro-actions"><button type="button" class="primary" data-open-lesson="${next.id}">Continue lesson ${pad(next.id)}</button><button type="button" class="secondary" data-nav="progress">View progress</button></div></section><section class="panel telemetry"><div class="panel-head"><h2>LEARNING STATUS</h2><span class="small-muted">SAVED LOCALLY</span></div><div class="telemetry-body"><div class="stat-row"><div><span class="stat-number">${readCount()}<small>/40</small></span><span class="stat-label">LESSONS READ</span></div><div><span class="stat-number accent-number">${masteredCount()}<small>/40</small></span><span class="stat-label">QUIZZES MASTERED</span></div></div><div class="meter-label"><span>CURRICULUM PROGRESS</span><strong>${percent(masteredCount())}%</strong></div>${progressBar(percent(masteredCount()), 'Curriculum progress')}<div class="next-up"><span class="small-muted">NEXT IN QUEUE</span><button type="button" data-open-lesson="${next.id}"><strong>${pad(next.id)} / ${esc(next.title)}</strong><span>${esc(getModule(next.module).name)}</span></button></div></div></section></div>`;
  const moduleCards = modules.map(module => {
    const group = lessons.filter(lesson => lesson.module === module.id);
    const done = group.filter(lesson => mastered(lesson.id)).length;
    return `<button type="button" class="module-card" data-open-module="${module.id}"><span class="module-top"><span class="module-index">MODULE ${pad(module.id)}</span><span class="module-count">${done}/5 MASTERED</span></span><strong>${esc(module.name)}</strong><span class="module-summary">${esc(module.summary)}</span>${progressBar(done * 20, `${module.name} mastery`)}<span class="module-foot">LESSONS ${pad(group[0].id)}—${pad(group[4].id)}</span></button>`;
  }).join('');
  return `${body}${panel('CURRICULUM / 8 MODULES', `<div class="module-grid">${moduleCards}</div>`, 'curriculum-panel')}`;
}
function lessonSidebar() {
  const term = state.search.trim().toLowerCase();
  return `<aside class="panel lesson-sidebar ${state.mobileIndex ? 'index-open' : ''}"><div class="panel-head"><h2>LESSON INDEX</h2><span class="small-muted">40 ENTRIES</span><button type="button" class="mobile-index-toggle" data-action="toggle-index" aria-expanded="${state.mobileIndex}">${state.mobileIndex ? 'Tutup −' : 'Buka daftar +'}</button></div><div class="search-wrap"><label for="lesson-search">FIND LESSON</label><input id="lesson-search" type="search" placeholder="Search topic or number" value="${esc(state.search)}" autocomplete="off" /></div><div class="sidebar-scroll">${modules.map(module => {
    const list = lessons.filter(lesson => lesson.module === module.id && (!term || lesson.title.toLowerCase().includes(term) || pad(lesson.id).includes(term)));
    if (term && !list.length && !module.name.toLowerCase().includes(term)) return '';
    const visible = term || state.expandedModule === module.id;
    const entries = term && !list.length ? lessons.filter(lesson => lesson.module === module.id) : list;
    return `<div class="sidebar-module"><button type="button" class="module-toggle ${visible ? 'open' : ''}" data-expand="${module.id}" aria-expanded="${visible}"><span>${pad(module.id)} / ${esc(module.name)}</span><span>${visible ? '−' : '+'}</span></button>${visible ? `<div class="lesson-links">${entries.map(lesson => `<button type="button" data-open-lesson="${lesson.id}" class="lesson-link ${state.lesson === lesson.id ? 'selected' : ''}" aria-current="${state.lesson === lesson.id ? 'page' : 'false'}"><span>${pad(lesson.id)} <span class="lesson-link-title">${esc(lesson.title)}</span></span><span class="link-state ${mastered(lesson.id) ? 'done' : state.read.includes(lesson.id) ? 'read' : ''}">${mastered(lesson.id) ? '✓' : state.read.includes(lesson.id) ? '•' : ''}</span></button>`).join('')}</div>` : ''}</div>`;
  }).join('')}</div></aside>`;
}
function lessonsPage() {
  const l = getLesson(state.lesson);
  const detail = getLessonDetail(l.id);
  const prev = getLesson(l.id - 1), next = getLesson(l.id + 1);
  const forms = detail.forms.map(([name, pattern, use]) => `<tr><td><strong>${esc(name)}</strong></td><td><code>${esc(pattern)}</code></td><td>${esc(use)}</td></tr>`).join('');
  const examples = [[l.good, detail.analysis[0]], [l.second, detail.analysis[1]]]
    .map(([sentence, analysis]) => `<div class="article-example"><strong>${esc(sentence)}</strong><p>${esc(analysis)}</p></div>`).join('');
  const sources = moduleSources[l.module].map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a></li>`).join('');
  const sections = articleSections[l.id].map(section => `<section class="article-section"><h2>${esc(section.title)}</h2>${section.paragraphs.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}${section.examples.length ? `<div class="article-examples">${section.examples.map(([sentence, analysis]) => `<div class="article-example"><strong>${esc(sentence)}</strong><p>${esc(analysis)}</p></div>`).join('')}</div>` : ''}${section.points.length ? `<ul class="article-points">${section.points.map(point => `<li>${esc(point)}</li>`).join('')}</ul>` : ''}</section>`).join('');
  return `<div class="lesson-layout">${lessonSidebar()}<div class="lesson-body">
    <section class="panel lesson-hero"><div class="lesson-kicker"><span>MODULE ${pad(l.module)} / ${esc(getModule(l.module).name.toUpperCase())}</span>${lessonStatus(l.id)}</div><div class="lesson-title-row"><div><span class="lesson-number">LESSON ${pad(l.id)} / 40</span><h1>${esc(l.title)}</h1><p>${esc(l.objective)}</p></div></div><div class="hero-actions"><button type="button" class="${state.read.includes(l.id) ? 'secondary' : 'primary'}" data-action="mark-read">${state.read.includes(l.id) ? 'Marked as read ✓' : 'Mark as read'}</button><button type="button" class="secondary" data-open-practice="${l.id}">Take lesson quiz</button></div></section>
    <article class="panel lesson-article" lang="id"><div class="article-inner"><div class="article-overline">LESSON ARTICLE / PENJELASAN INDONESIA · CONTOH INGGRIS</div>${l.id === 2 ? '<div class="article-title"><h2>Subject, Verb, Object, Complement &amp; Adverbial</h2><p>Understanding English Sentence Structure</p></div>' : `<p class="article-lead">${esc(detail.intro)}</p><div class="article-rule"><strong>INTI ATURAN</strong><p>${esc(l.rule)}</p></div>`}${sections}${l.id === 2 ? '' : `<section class="article-section"><h2>Pola dan penggunaannya</h2><p>Tabel berikut merangkum bentuk yang paling sering dibutuhkan. Baca contoh di setiap baris bersama penjelasannya; pola adalah alat untuk memahami makna, bukan pengganti konteks.</p><div class="table-wrap"><table class="pattern-table"><thead><tr><th>FUNGSI</th><th>POLA / BENTUK</th><th>KAPAN DIPAKAI</th></tr></thead><tbody>${forms}</tbody></table></div></section><section class="article-section"><h2>Membedah dua contoh</h2><p>Perhatikan bagian yang menentukan pilihan bentuk pada dua kalimat berikut.</p><div class="article-examples">${examples}</div></section><section class="article-section"><h2>Kesalahan umum</h2><div class="correction-pair"><div><span class="badge error">PERBAIKI</span><p>${esc(l.bad)}</p></div><div><span class="badge success">GUNAKAN</span><p>${esc(detail.fix)}</p></div></div><p>${esc(detail.why)}</p></section>`}<section class="article-section article-end"><h2>Ringkasan dan langkah berikutnya</h2><p>${esc(detail.decision)}</p><p>Setelah memahami contoh, kerjakan kuis pelajaran ini. Jika jawaban keliru, baca penjelasannya lalu kembali ke bagian artikel yang membahas pola tersebut.</p><div class="sources"><strong>RUJUKAN MATERI</strong><ul>${sources}</ul></div></section></div></article>
    <div class="lesson-footer"><button type="button" class="secondary" data-open-lesson="${prev?.id || l.id}" ${prev ? '' : 'disabled'}>Previous lesson</button><span>${pad(l.id)} / 40</span><button type="button" class="secondary" data-open-lesson="${next?.id || l.id}" ${next ? '' : 'disabled'}>Next lesson</button></div>
  </div></div>`;
}
function questionsFor(l) {
  const detail = getLessonDetail(l.id);
  const applicationOptions = l.id % 2 ? [l.good, l.bad] : [l.bad, l.good];
  return [
    { prompt: l.question, options: l.options, answer: l.answer, explanation: `${l.explanation} ${detail.decision}` },
    { prompt: `Which sentence correctly uses the pattern from “${l.title}”?`, options: applicationOptions, answer: l.id % 2 ? 0 : 1, explanation: `Correct: “${l.good}” ${detail.analysis[0]} ${detail.why}` },
  ];
}
function practicePage() {
  const l = getLesson(state.lesson), questions = questionsFor(l);
  const result = state.result;
  return `<div class="practice-layout"><section class="panel practice-header"><div class="panel-head"><h2>QUIZ SESSION</h2><span class="small-muted">2 QUESTIONS / LESSON</span></div><div class="practice-intro"><div><span class="eyebrow">02 / PRACTICE</span><h1>Test the pattern.</h1><p>Select one answer for each question. Submit to see your score and a full explanation for every answer.</p></div><div class="practice-select"><label for="quiz-lesson">CHOOSE LESSON</label><select id="quiz-lesson">${modules.map(module => `<optgroup label="${esc(pad(module.id) + ' / ' + module.name)}">${lessons.filter(lesson => lesson.module === module.id).map(item => `<option value="${item.id}" ${item.id === l.id ? 'selected' : ''}>${pad(item.id)} / ${esc(item.title)}</option>`).join('')}</optgroup>`).join('')}</select></div></div><div class="quiz-context"><span>MODULE ${pad(l.module)}</span><strong>${pad(l.id)} / ${esc(l.title)}</strong><span>BEST ${state.best[l.id] === undefined ? '—' : `${state.best[l.id]}%`}</span></div></section><div class="quiz-questions">${questions.map((q, qi) => `<fieldset class="panel question-panel"><legend class="sr-only">Question ${qi + 1}</legend><div class="question-top"><span>QUESTION ${pad(qi + 1)}</span><span>${qi === 0 ? 'CONCEPT' : 'APPLICATION'}</span></div><h2>${esc(q.prompt)}</h2><div class="options">${q.options.map((option, oi) => {
    const selected = Number(state.answers[qi]) === oi;
    const resultClass = result ? oi === q.answer ? 'right' : selected ? 'wrong' : '' : '';
    return `<label class="option ${selected ? 'selected' : ''} ${resultClass}"><input type="radio" name="q${qi}" value="${oi}" data-question="${qi}" ${selected ? 'checked' : ''} ${result ? 'disabled' : ''} /><span class="option-index">${String.fromCharCode(65 + oi)}</span><span>${esc(option)}</span>${result && oi === q.answer ? '<span class="option-mark">✓</span>' : ''}</label>`;
  }).join('')}</div>${result ? `<div class="explanation ${result.correct[qi] ? 'correct' : 'incorrect'}"><strong>${result.correct[qi] ? 'CORRECT' : 'REVIEW THIS'}</strong><p>${esc(q.explanation)}</p></div>` : ''}</fieldset>`).join('')}</div>${state.warning ? `<div class="inline-warning" role="alert">${esc(state.warning)}</div>` : ''}${result ? `<section class="panel result-panel" aria-live="polite"><div><span class="eyebrow">SESSION RESULT</span><h2>${result.score}/2 correct <span>· ${result.percent}%</span></h2><p>${result.percent === 100 ? 'Pattern mastered. Your progress has been saved.' : 'Review the explanations above, then try again.'}</p></div><div class="result-actions"><button type="button" class="primary" data-action="retry">Retry quiz</button><button type="button" class="secondary" data-open-lesson="${Math.min(l.id + 1, 40)}">${l.id === 40 ? 'Review lesson' : 'Next lesson'}</button></div></section>` : `<div class="submit-row"><span>Answers are checked when you submit.</span><button type="button" class="primary" data-action="submit">Evaluate answers</button></div>`}</div>`;
}
function progressPage() {
  const rows = modules.map(module => {
    const group = lessons.filter(lesson => lesson.module === module.id);
    const read = group.filter(lesson => state.read.includes(lesson.id)).length;
    const done = group.filter(lesson => mastered(lesson.id)).length;
    return `<tr><td><button type="button" class="table-link" data-open-module="${module.id}">${pad(module.id)} / ${esc(module.name)}</button></td><td>${read}/5</td><td>${done}/5</td><td class="meter-cell">${progressBar(done * 20, `${module.name} progress`)}</td></tr>`;
  }).join('');
  const lessonRows = lessons.map(l => `<tr><td><button type="button" class="table-link" data-open-lesson="${l.id}">${pad(l.id)} / ${esc(l.title)}</button></td><td>${pad(l.module)} / ${esc(getModule(l.module).name)}</td><td>${lessonStatus(l.id)}</td><td>${state.best[l.id] === undefined ? '—' : `${state.best[l.id]}%`}</td><td>${Number(state.attempts[l.id] || 0)}</td></tr>`).join('');
  return `${panel('PROGRESS / LOCAL RECORD', `<div class="progress-overview"><div class="progress-headline"><span class="eyebrow">03 / PROGRESS</span><h1>${masteredCount()} of 40 lessons mastered.</h1><p>Your reading and quiz results are saved in this browser. A lesson is mastered when both quiz answers are correct.</p></div><div class="progress-summary"><div><strong>${readCount()}</strong><span>READ</span></div><div><strong>${masteredCount()}</strong><span>MASTERED</span></div><div><strong>${Object.values(state.attempts).reduce((a, b) => a + Number(b || 0), 0)}</strong><span>QUIZ ATTEMPTS</span></div></div></div>${progressBar(percent(masteredCount()), 'Overall mastery')}`,'progress-panel')}${panel('MODULE BREAKDOWN', `<div class="table-wrap"><table><thead><tr><th>MODULE</th><th>READ</th><th>MASTERED</th><th>PROGRESS</th></tr></thead><tbody>${rows}</tbody></table></div>`)}${panel('LESSON LEDGER', `<div class="table-wrap"><table class="ledger"><thead><tr><th>LESSON</th><th>MODULE</th><th>STATUS</th><th>BEST QUIZ</th><th>ATTEMPTS</th></tr></thead><tbody>${lessonRows}</tbody></table></div>`)}`;
}
function settingsPage() {
  return `${panel('COLOR THEME / 10 PALETTES', `<div class="settings-intro"><span class="eyebrow">99 / CONFIGURATION</span><h1>Set your workspace.</h1><p>Choose a terminal palette. Your preference is saved with your progress on this device.</p></div><div class="theme-grid">${themes.map(([id, name, bg, accent, yellow]) => `<button type="button" class="theme-choice ${state.theme === id ? 'selected' : ''}" data-theme="${id}" aria-pressed="${state.theme === id}"><span class="swatches"><i style="background:${bg}"></i><i style="background:${accent}"></i><i style="background:${yellow}"></i></span><span>${esc(name)}</span><span class="theme-state">${state.theme === id ? 'SELECTED ✓' : 'SELECT'}</span></button>`).join('')}</div>`)}${panel('LOCAL DATA', `<div class="settings-data"><div><strong>PROGRESS STORAGE</strong><p>Reading status, best quiz scores, attempts, and theme live in this browser’s local storage. They are not synced across devices.</p></div><button type="button" class="danger" data-action="reset">${state.resetArmed ? 'Confirm reset progress' : 'Reset progress'}</button></div>${state.resetArmed ? '<p class="reset-warning" role="alert">This clears all lesson and quiz progress on this device. Click again to confirm.</p>' : ''}`)}`;
}
function render() {
  applyTheme();
  root.innerHTML = `<div class="terminal-app"><div class="workspace">${header()}${state.mobileMenu ? mobileMenu() : `<main class="content">${({ overview, lessons: lessonsPage, practice: practicePage, progress: progressPage, settings: settingsPage })[state.page]()}</main>`}<footer class="site-footer"><span>GRAMMAR.LOG / v1.0</span><span>LEARN → PRACTICE → REVIEW</span></footer></div></div>`;
}

root.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.nav) return navigate(button.dataset.nav);
  if (button.dataset.openLesson) { state.lesson = Number(button.dataset.openLesson); state.lastLesson = state.lesson; persist(); return navigate('lessons', state.lesson); }
  if (button.dataset.openPractice) { state.lesson = Number(button.dataset.openPractice); state.lastLesson = state.lesson; persist(); return navigate('practice', state.lesson); }
  if (button.dataset.openModule) { state.lesson = (Number(button.dataset.openModule) - 1) * 5 + 1; state.lastLesson = state.lesson; persist(); return navigate('lessons', state.lesson); }
  if (button.dataset.expand) { state.expandedModule = state.expandedModule === Number(button.dataset.expand) ? 0 : Number(button.dataset.expand); return render(); }
  if (button.dataset.theme) { state.theme = button.dataset.theme; persist(); return render(); }
  switch (button.dataset.action) {
    case 'menu': state.mobileMenu = true; render(); break;
    case 'toggle-index': state.mobileIndex = !state.mobileIndex; render(); break;
    case 'mark-read': if (!state.read.includes(state.lesson)) state.read.push(state.lesson); persist(); render(); break;
    case 'submit': {
      if (state.answers[0] === undefined || state.answers[1] === undefined) { state.warning = 'Select an answer for both questions before evaluating.'; render(); return; }
      const qs = questionsFor(getLesson(state.lesson));
      const correct = qs.map((q, index) => Number(state.answers[index]) === q.answer);
      const score = correct.filter(Boolean).length, value = score * 50;
      state.result = { correct, score, percent: value };
      state.best[state.lesson] = Math.max(Number(state.best[state.lesson] || 0), value);
      state.attempts[state.lesson] = Number(state.attempts[state.lesson] || 0) + 1;
      if (value === 100 && !state.read.includes(state.lesson)) state.read.push(state.lesson);
      state.warning = ''; persist(); render();
      document.querySelector('.result-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      break;
    }
    case 'retry': state.answers = {}; state.result = null; state.warning = ''; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); break;
    case 'reset':
      if (!state.resetArmed) { state.resetArmed = true; render(); }
      else { state.read = []; state.best = {}; state.attempts = {}; state.lastLesson = 1; state.resetArmed = false; persist(); render(); }
      break;
  }
});
root.addEventListener('change', event => {
  if (event.target.matches('[data-question]')) { state.answers[Number(event.target.dataset.question)] = Number(event.target.value); state.warning = ''; render(); }
  if (event.target.id === 'quiz-lesson') { state.lesson = Number(event.target.value); state.lastLesson = state.lesson; persist(); navigate('practice', state.lesson); }
});
root.addEventListener('input', event => {
  if (event.target.id === 'lesson-search') {
    const position = event.target.selectionStart;
    state.search = event.target.value;
    render();
    const input = document.querySelector('#lesson-search');
    input?.focus(); input?.setSelectionRange(position, position);
  }
});
window.addEventListener('hashchange', () => { routeFromHash(); window.scrollTo(0, 0); });
routeFromHash();
if (!location.hash && window.innerWidth <= 700) { state.mobileMenu = true; render(); }
