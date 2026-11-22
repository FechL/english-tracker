import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons, modules, getLesson, getModule } from '../src/curriculum.js';
import { lessonDetails, moduleSources, getLessonDetail } from '../src/lessonDetails.js';
import { articleSections } from '../src/articles.js';

test('curriculum has 8 ordered modules with 5 lessons each', () => {
  assert.equal(modules.length, 8);
  assert.equal(lessons.length, 40);
  assert.deepEqual(lessons.map(lesson => lesson.id), Array.from({ length: 40 }, (_, index) => index + 1));
  for (const module of modules) {
    assert.equal(lessons.filter(lesson => lesson.module === module.id).length, 5);
    assert.equal(getModule(module.id), module);
  }
});

test('every lesson has reading material and an evaluable quiz', () => {
  for (const lesson of lessons) {
    assert.equal(getLesson(lesson.id), lesson);
    for (const key of ['title', 'objective', 'rule', 'good', 'second', 'bad', 'note', 'question', 'explanation']) {
      assert.ok(lesson[key]?.trim(), `Lesson ${lesson.id} missing ${key}`);
    }
    assert.notEqual(lesson.good, lesson.bad);
    assert.equal(lesson.options.length, 3);
    assert.ok(Number.isInteger(lesson.answer) && lesson.answer >= 0 && lesson.answer < lesson.options.length);
  }
});

test('every lesson has an Indonesian explanation, worked examples, and a correction', () => {
  assert.equal(lessonDetails.length, 40);
  for (const lesson of lessons) {
    const detail = getLessonDetail(lesson.id);
    assert.ok(detail, `Lesson ${lesson.id} has no detailed material`);
    assert.ok(detail.intro.length > 250, `Lesson ${lesson.id} explanation is too short`);
    assert.ok(detail.forms.length >= 3, `Lesson ${lesson.id} needs several patterns`);
    assert.equal(detail.analysis.length, 2);
    assert.ok(detail.fix && detail.why && detail.decision);
    assert.notEqual(detail.fix, lesson.bad);
    assert.ok(moduleSources[lesson.module].length >= 2);
    for (const [, url] of moduleSources[lesson.module]) assert.match(url, /^https:\/\//);
  }
});

test('all 40 lessons have substantive article sections', () => {
  assert.equal(Object.keys(articleSections).length, 40);
  for (const lesson of lessons) {
    const sections = articleSections[lesson.id];
    assert.ok(sections?.length >= 3, `Lesson ${lesson.id} needs article sections`);
    for (const section of sections) {
      assert.ok(section.title && section.paragraphs.length >= 2);
      assert.ok(section.examples.length || section.points.length);
    }
    const words = sections.flatMap(section => [...section.paragraphs, ...section.examples.flat(), ...section.points]).join(' ').split(/\s+/).length;
    assert.ok(words >= 250, `Lesson ${lesson.id} article is too short (${words} words)`);
  }
  assert.ok(articleSections[2].length >= 8);
});
