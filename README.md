# GRAMMAR.LOG

A browser-based English grammar tracker with 40 lessons in 8 modules. Lessons are presented as Indonesian learning articles with subheadings, step-by-step explanations, worked English examples, common mistakes, and grammar references. Lesson 2 follows the detailed sentence-elements example supplied by the learner. A two-question quiz follows each article. Reading and best quiz scores are saved in browser local storage.

## Run locally

Requires Node.js 20 or newer. No dependencies or build step are needed.

```bash
npm run dev
```

Open <http://127.0.0.1:4173>. Run `npm test` to validate the curriculum data. `npm run build` produces a deployable static site in `dist/`.

## Progress

- **Read:** marked manually on a lesson or automatically after a perfect quiz.
- **Mastered:** both quiz answers correct in one attempt.
- **Best quiz:** highest score out of 0%, 50%, or 100%.

Progress is stored only in the current browser. Use **Configuration → Reset progress** to clear it.
