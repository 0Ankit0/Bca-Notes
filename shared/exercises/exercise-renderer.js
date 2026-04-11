(function (global) {
  function normalize(text) {
    return String(text || "").trim().toLowerCase();
  }

  function renderExerciseSet(root, set) {
    root.innerHTML = "";

    const header = document.createElement("section");
    header.className = "panel";
    header.innerHTML = `
      <h2>${set.title}</h2>
      <p>${set.description || "Practice exercises aligned to syllabus outcomes."}</p>
      <h3>Syllabus outcomes</h3>
      <ul>${set.outcomes.map((o) => `<li>${o}</li>`).join("")}</ul>
    `;
    root.appendChild(header);

    const form = document.createElement("form");
    form.className = "exercise-form panel";

    set.questions.forEach((q, idx) => {
      const wrap = document.createElement("fieldset");
      wrap.className = "exercise-item";
      wrap.dataset.type = q.type;
      wrap.dataset.index = String(idx);

      const legend = document.createElement("legend");
      legend.textContent = `${idx + 1}. ${q.prompt}`;
      wrap.appendChild(legend);

      if (q.hint) {
        const hint = document.createElement("p");
        hint.className = "exercise-hint";
        hint.textContent = `Hint: ${q.hint}`;
        wrap.appendChild(hint);
      }

      if (q.type === "mcq") {
        q.options.forEach((opt, optIdx) => {
          const id = `q${idx}_opt${optIdx}`;
          const label = document.createElement("label");
          label.className = "exercise-option";
          label.setAttribute("for", id);
          label.innerHTML = `<input type=\"radio\" name=\"q${idx}\" id=\"${id}\" value=\"${optIdx}\" /> ${opt}`;
          wrap.appendChild(label);
        });
      } else {
        const input = document.createElement(q.type === "short-answer" ? "textarea" : "input");
        input.name = `q${idx}`;
        if (q.type !== "short-answer") input.type = "text";
        input.rows = 3;
        input.className = "exercise-text-input";
        wrap.appendChild(input);
      }

      const feedback = document.createElement("p");
      feedback.className = "exercise-feedback";
      wrap.appendChild(feedback);

      const explanation = document.createElement("p");
      explanation.className = "exercise-explanation";
      explanation.textContent = `Explanation: ${q.explanation}`;
      wrap.appendChild(explanation);

      form.appendChild(wrap);
    });

    const actions = document.createElement("div");
    actions.className = "exercise-actions";
    actions.innerHTML = `
      <button type="submit">Check Answers</button>
      <button type="button" id="show-all-explanations">Show Explanations</button>
    `;

    const summary = document.createElement("p");
    summary.id = "exercise-summary";
    actions.appendChild(summary);

    form.appendChild(actions);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let correctCount = 0;

      set.questions.forEach((q, idx) => {
        const item = form.querySelector(`[data-index=\"${idx}\"]`);
        const feedback = item.querySelector(".exercise-feedback");
        let isCorrect = false;

        if (q.type === "mcq") {
          const selected = form.querySelector(`input[name=\"q${idx}\"]:checked`);
          isCorrect = selected && Number(selected.value) === q.answerIndex;
        } else if (q.type === "fill-in") {
          const value = normalize(form.elements[`q${idx}`].value);
          isCorrect = q.answers.some((a) => normalize(a) === value);
        } else {
          const value = normalize(form.elements[`q${idx}`].value);
          isCorrect = value.length >= 15;
        }

        if (isCorrect) {
          correctCount += 1;
          feedback.textContent = "✅ Correct";
        } else {
          feedback.textContent = q.type === "short-answer" ? `✍️ Review sample: ${q.sampleAnswer}` : "❌ Try again after reviewing the hint.";
        }
      });

      summary.textContent = `Score: ${correctCount} / ${set.questions.length}`;
    });

    form.querySelector("#show-all-explanations").addEventListener("click", function () {
      form.classList.toggle("show-explanations");
    });

    root.appendChild(form);
  }

  function boot() {
    const app = document.getElementById("exercise-app");
    if (!app) return;

    const setId = app.dataset.exerciseSet;
    const library = global.EXERCISE_LIBRARY || {};
    const set = library[setId];

    if (!set) {
      app.innerHTML = `<section class=\"panel\"><h2>Exercise set not found</h2><p>No data for id: <code>${setId}</code></p></section>`;
      return;
    }

    if (!global.ExerciseSchema) {
      app.innerHTML = '<section class="panel"><h2>Schema missing</h2><p>Load exercise-schema.js first.</p></section>';
      return;
    }

    const validation = global.ExerciseSchema.validateExerciseSet(set, { minQuestions: 3 });
    if (!validation.valid) {
      app.innerHTML = `<section class=\"panel\"><h2>Exercise data validation failed</h2><ul>${validation.errors.map((err) => `<li>${err}</li>`).join("")}</ul></section>`;
      return;
    }

    renderExerciseSet(app, set);
  }

  document.addEventListener("DOMContentLoaded", boot);
})(window);
