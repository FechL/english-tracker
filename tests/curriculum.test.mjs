import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lessons, modules, getLesson, getModule, lessonFileName } from '../src/curriculum.js';
import { questionsFor } from '../src/quiz.js';
import { practiceQuestions, finalPracticeQuestions } from '../src/practice.js';
import { renderLessonMarkdown } from '../src/markdown.js';

test('curriculum has eight ordered modules with five lessons each', () => {
  assert.equal(modules.length, 8);
  assert.equal(lessons.length, 40);
  assert.deepEqual(lessons.map(lesson => lesson.id), Array.from({ length: 40 }, (_, index) => index + 1));
  for (const module of modules) {
    assert.equal(lessons.filter(lesson => lesson.module === module.id).length, 5);
    assert.equal(getModule(module.id), module);
  }
});

test('every lesson has its own substantive Markdown article and five evaluable quiz questions', async () => {
  for (const lesson of lessons) {
    assert.equal(getLesson(lesson.id), lesson);
    const article = await readFile(new URL(`../content/lessons/${lessonFileName(lesson)}`, import.meta.url), 'utf8');
    assert.ok(article.startsWith(`# ${lesson.title}\n`));
    assert.ok(article.split(/\s+/).length >= 450, `Lesson ${lesson.id} article is too short`);
    assert.ok((article.match(/^## /gm) || []).length >= 5, `Lesson ${lesson.id} needs sections`);
    assert.doesNotMatch(article, /Rujukan Materi/i);
    assert.match(renderLessonMarkdown(article), /<h2 class="article-heading">/);
    const quiz = questionsFor(lesson);
    assert.equal(quiz.length, 5);
    for (const question of quiz) {
      assert.ok(question.prompt.trim());
      assert.ok(question.explanation.trim());
      assert.ok(question.options.length >= 2);
      assert.ok(question.answer >= 0 && question.answer < question.options.length);
    }
  }
});

test('practice contains 20 questions per module and 40 across all modules', () => {
  const quizPrompts = new Set(lessons.flatMap(questionsFor).map(question => question.prompt));
  for (const module of modules) {
    const questions = practiceQuestions(module.id);
    assert.equal(questions.length, 20);
    assert.equal(new Set(questions.map(question => question.prompt)).size, 20);
    for (const question of questions) {
      assert.equal(getLesson(question.lessonId).module, module.id);
      assert.ok(!quizPrompts.has(question.prompt), `Practice repeats a quiz question: ${question.prompt}`);
      assert.ok(question.answer >= 0 && question.answer < question.options.length);
      assert.ok(question.explanation.trim());
    }
  }
  const final = finalPracticeQuestions();
  assert.equal(final.length, 40);
  for (const module of modules) assert.equal(final.filter(question => getLesson(question.lessonId).module === module.id).length, 5);
});

test('README documents every module and lesson without the removed sections', async () => {
  const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
  for (const module of modules) assert.ok(readme.includes(module.name), `Missing module ${module.id}`);
  for (const lesson of lessons) assert.ok(readme.includes(lesson.title), `Missing lesson ${lesson.id}`);
  const html = renderLessonMarkdown(readme);
  assert.match(html, /<h3 class="article-subheading">Module 08/);
  assert.doesNotMatch(readme, /^## (Penilaian dan penyimpanan|Menjalankan proyek|Kredit|Rujukan belajar)$/m);
});

test('lesson Markdown renders breakdowns, pattern cards, fix lines, callouts, and italics', () => {
  const html = renderLessonMarkdown([
    '> **Kunci:** Verb first.',
    '',
    ':::breakdown',
    'She | S',
    'gave | V',
    'me | IO',
    'a gift | DO (benda)',
    'kindly | adverb',
    '= Dia memberi saya hadiah.',
    ':::',
    '',
    ':::patterns',
    'S + V | The baby sleeps. | sleeps = V',
    ':::',
    '',
    '❌ She is teacher.',
    '✅ She is *a* teacher.',
  ].join('\n'));
  assert.match(html, /<div class="article-rule"><strong>Kunci:<\/strong>/);
  assert.match(html, /tone-s"><span class="bd-text">She<\/span><span class="bd-label">Subject<\/span>/);
  assert.match(html, /tone-io">.*Indirect Object/);
  assert.match(html, /Direct Object \(benda\)/);
  assert.match(html, /tone-a">.*Adverb</);
  assert.match(html, /<p class="bd-note">Dia memberi saya hadiah\.<\/p>/);
  assert.match(html, /<li class="pattern-card"><span class="pc-num">1<\/span>.*S \+ V/);
  assert.match(html, /<p class="fix-wrong">.*She is teacher\./);
  assert.match(html, /<p class="fix-right">.*She is <em>a<\/em> teacher\./);
});
