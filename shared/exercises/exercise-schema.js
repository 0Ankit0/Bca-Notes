(function (global) {
  const ALLOWED_TYPES = ["mcq", "fill-in", "short-answer"];

  function validateExerciseSet(set, options = {}) {
    const minQuestions = Number.isInteger(options.minQuestions) ? options.minQuestions : 3;
    const errors = [];

    if (!set || typeof set !== "object") {
      return { valid: false, errors: ["Exercise set must be an object."] };
    }

    if (!set.id) errors.push("Missing set.id.");
    if (!set.title) errors.push("Missing set.title.");
    if (!Array.isArray(set.outcomes) || set.outcomes.length === 0) {
      errors.push("outcomes must contain at least one syllabus outcome.");
    }

    if (!Array.isArray(set.questions)) {
      errors.push("questions must be an array.");
    } else {
      if (set.questions.length < minQuestions) {
        errors.push(`At least ${minQuestions} questions are required.`);
      }

      set.questions.forEach((q, index) => {
        const pointer = `Question ${index + 1}`;
        if (!ALLOWED_TYPES.includes(q.type)) {
          errors.push(`${pointer}: unsupported type \"${q.type}\".`);
          return;
        }
        if (!q.prompt) errors.push(`${pointer}: prompt is required.`);
        if (!q.explanation) errors.push(`${pointer}: explanation is required.`);

        if (q.type === "mcq") {
          if (!Array.isArray(q.options) || q.options.length < 2) {
            errors.push(`${pointer}: MCQ requires at least 2 options.`);
          }
          if (typeof q.answerIndex !== "number" || q.answerIndex < 0 || q.answerIndex >= (q.options || []).length) {
            errors.push(`${pointer}: MCQ answerIndex is invalid.`);
          }
        }

        if (q.type === "fill-in") {
          if (!Array.isArray(q.answers) || q.answers.length === 0) {
            errors.push(`${pointer}: fill-in requires at least one accepted answer.`);
          }
        }

        if (q.type === "short-answer") {
          if (typeof q.sampleAnswer !== "string" || q.sampleAnswer.trim() === "") {
            errors.push(`${pointer}: short-answer requires sampleAnswer.`);
          }
        }
      });
    }

    return { valid: errors.length === 0, errors };
  }

  global.ExerciseSchema = {
    ALLOWED_TYPES,
    validateExerciseSet
  };
})(window);
