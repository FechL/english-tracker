import { lessons } from './curriculum.js';

// Each lesson contributes four fresh transfer questions to its module's 20-question practice.
// They deliberately use different prompts and examples from the five-question lesson quiz.
export function practiceQuestions(moduleId) {
  return lessons.filter(lesson => lesson.module === Number(moduleId)).flatMap(lesson => [
    {
      lessonId: lesson.id,
      prompt: `Kalimat mana yang tepat dalam konteks “${lesson.objective}”?`,
      options: lesson.id % 2 ? [lesson.second, lesson.bad] : [lesson.bad, lesson.second],
      answer: lesson.id % 2 ? 0 : 1,
      explanation: `Bentuk yang tepat adalah “${lesson.second}” ${lesson.rule}`,
    },
    {
      lessonId: lesson.id,
      prompt: `Apa masalah utama pada kalimat “${lesson.bad}”?`,
      options: [lesson.note, 'Kalimat ini sudah tepat dan tidak perlu diperbaiki.', 'Masalahnya hanya penggunaan huruf kapital.'],
      answer: 0,
      explanation: `${lesson.note} Bandingkan dengan “${lesson.good}”`,
    },
    {
      lessonId: lesson.id,
      prompt: `Prinsip mana yang perlu dipakai saat menyunting topik ${lesson.title}?`,
      options: ['Pilih bentuk hanya berdasarkan panjang kata.', lesson.rule, 'Selalu pindahkan verb ke akhir kalimat.'],
      answer: 1,
      explanation: lesson.rule,
    },
    {
      lessonId: lesson.id,
      prompt: `Pasangan revisi mana yang memperbaiki kesalahan pada Lesson ${String(lesson.id).padStart(2, '0')}?`,
      options: [
        `${lesson.bad} → ${lesson.good}`,
        `${lesson.good} → ${lesson.bad}`,
        `${lesson.bad} → ${lesson.bad}`,
      ],
      answer: 0,
      explanation: `Perbaikan yang tepat: “${lesson.good}” ${lesson.note}`,
    },
  ]);
}

// Five questions from each module create a broad, 40-question final review.
export function finalPracticeQuestions() {
  return Array.from({ length: 8 }, (_, index) => {
    const questions = practiceQuestions(index + 1);
    return [questions[0], questions[4], questions[8], questions[12], questions[16]];
  }).flat();
}
