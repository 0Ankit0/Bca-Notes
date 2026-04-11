# Shared Exercises Authoring Workflow

This folder provides reusable exercise infrastructure for subject pages.

## 1) Data format (schema)
Create subject exercise sets as plain JS objects and register them in `window.EXERCISE_LIBRARY`.

```js
window.EXERCISE_LIBRARY = {
  "subject-unit-id": {
    id: "subject-unit-id",
    title: "Exercise set title",
    description: "Optional summary",
    outcomes: ["Outcome 1", "Outcome 2"],
    questions: [
      {
        type: "mcq", // mcq | fill-in | short-answer
        prompt: "Question text",
        options: ["A", "B", "C"], // MCQ only
        answerIndex: 1,              // MCQ only
        answers: ["keyword"],       // fill-in only
        sampleAnswer: "Model answer", // short-answer only
        hint: "Optional hint",
        explanation: "Required explanation"
      }
    ]
  }
}
```

## 2) Validation rules
Validation runs automatically in `exercise-renderer.js` via `ExerciseSchema.validateExerciseSet`.

Rules:
- Minimum question count per set: **3**.
- Every question must have: `type`, `prompt`, and `explanation`.
- `mcq` requires `options` (>=2) and valid `answerIndex`.
- `fill-in` requires non-empty `answers` array.
- `short-answer` requires non-empty `sampleAnswer`.

If validation fails, the page renders a clear error list instead of a broken UI.

## 3) Add a new exercise set (no core JS edits)
1. Add or update a subject data file (example: `web-technology-exercises.js`) and append a new set in `window.EXERCISE_LIBRARY`.
2. Create a lesson practice page with:
   - `<div id="exercise-app" data-exercise-set="your-set-id"></div>`
   - script includes for:
     - `exercise-schema.js`
     - your data file
     - `exercise-renderer.js`
3. Link the practice page from the unit and notes pages under lesson navigation.

You should not need to modify `exercise-renderer.js` or `exercise-schema.js` for routine content updates.
