import test from 'node:test';
import assert from 'node:assert/strict';
import { askGemini, createGeminiPayload, validateChatInput, ChatInputError } from '../scripts/chat.mjs';

test('chat accepts lesson questions and rejects invalid input', () => {
  const input = validateChatInput({ lessonId: 2, message: ' Apa itu object? ', history: [] });
  assert.equal(input.lesson.id, 2);
  assert.equal(input.message, 'Apa itu object?');
  assert.throws(() => validateChatInput({ lessonId: 41, message: 'Hello' }), ChatInputError);
  assert.throws(() => validateChatInput({ lessonId: 2, message: '' }), ChatInputError);
});

test('Gemini receives the active lesson and English-only instructions', async () => {
  const payload = await createGeminiPayload({ lessonId: 2, message: 'Apa itu complement?', history: [{ role: 'user', text: 'Halo' }, { role: 'assistant', text: 'Halo!' }] });
  const instruction = payload.systemInstruction.parts[0].text;
  assert.match(instruction, /LESSON 02 \/ 40: Sentence Elements/);
  assert.match(instruction, /ARTIKEL LESSON:/);
  assert.match(instruction, /KUNCI DAN PENJELASAN KUIS LESSON:/);
  assert.match(instruction, /Bantu HANYA pertanyaan tentang bahasa Inggris/);
  assert.deepEqual(payload.contents.map(item => item.role), ['user', 'model', 'user']);
});

test('Gemini request keeps the key in a server header and parses its answer', async () => {
  let request;
  const result = await askGemini({ lessonId: 1, message: 'Apa itu noun?' }, {
    apiKey: 'test-key', model: 'gemini-test',
    fetchImpl: async (url, options) => {
      request = { url, options };
      return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: 'Noun adalah kata benda.' }] } }] }) };
    },
  });
  assert.equal(result.answer, 'Noun adalah kata benda.');
  assert.match(request.url, /gemini-test:generateContent$/);
  assert.equal(request.options.headers['x-goog-api-key'], 'test-key');
  assert.doesNotMatch(request.options.body, /test-key/);
  assert.equal((await askGemini({ lessonId: 1, message: 'Hi' })).status, 503);
});
