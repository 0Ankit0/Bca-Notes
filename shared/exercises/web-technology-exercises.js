window.EXERCISE_LIBRARY = {
  "web-tech-unit1": {
    id: "web-tech-unit1",
    title: "Unit 1 Practice: Foundations of Web Technology",
    description: "Covers web evolution, architecture, and protocol basics.",
    outcomes: [
      "Explain web architecture and browser/server roles.",
      "Describe key milestones in web evolution."
    ],
    questions: [
      { type: "mcq", prompt: "Who is credited with inventing the World Wide Web?", options: ["Tim Berners-Lee", "Vint Cerf", "Bill Gates"], answerIndex: 0, hint: "He worked at CERN.", explanation: "Tim Berners-Lee proposed the WWW at CERN in 1989." },
      { type: "fill-in", prompt: "HTTP stands for ______ Transfer Protocol.", answers: ["Hypertext"], hint: "Starts with Hyper...", explanation: "HTTP means Hypertext Transfer Protocol." },
      { type: "short-answer", prompt: "Differentiate a web browser from a web server.", sampleAnswer: "A browser is a client application that requests and renders resources, while a web server hosts resources and responds to HTTP requests.", hint: "Client vs host role.", explanation: "Browser consumes content; server provides content over protocols." }
    ]
  },
  "web-tech-unit2": {
    id: "web-tech-unit2",
    title: "Unit 2 Practice: HTML Fundamentals",
    outcomes: ["Use semantic HTML tags.", "Build basic page structure using forms, tables, and media."],
    questions: [
      { type: "mcq", prompt: "Which element is semantic for main page navigation?", options: ["<div>", "<nav>", "<span>"], answerIndex: 1, hint: "Introduced for meaningful structure.", explanation: "<nav> defines major navigation links." },
      { type: "fill-in", prompt: "The HTML tag for the largest heading is ______.", answers: ["<h1>", "h1"], hint: "Numbered heading tags.", explanation: "<h1> is the highest level heading." },
      { type: "short-answer", prompt: "Why are semantic tags preferred over generic div-only layouts?", sampleAnswer: "Semantic tags improve accessibility, SEO, and maintainability by conveying structural meaning to browsers and assistive technologies.", hint: "Think accessibility and SEO.", explanation: "Semantic markup communicates document roles clearly." }
    ]
  },
  "web-tech-unit3": {
    id: "web-tech-unit3",
    title: "Unit 3 Practice: CSS and Responsive Design",
    outcomes: ["Apply CSS selectors and box model.", "Design responsive layouts using modern techniques."],
    questions: [
      { type: "mcq", prompt: "Which CSS layout module is one-dimensional?", options: ["Grid", "Flexbox", "Float"], answerIndex: 1, hint: "Row or column axis.", explanation: "Flexbox is one-dimensional; Grid is two-dimensional." },
      { type: "fill-in", prompt: "In the box model, space outside the border is called ______.", answers: ["margin"], hint: "Not padding.", explanation: "Margin is outside the border." },
      { type: "short-answer", prompt: "State one strategy for responsive web design.", sampleAnswer: "Use media queries with fluid units (%, rem, vw) to adapt layout and typography across devices.", hint: "Media queries can help.", explanation: "Responsive design uses adaptive CSS rules and flexible sizing." }
    ]
  },
  "web-tech-unit4": {
    id: "web-tech-unit4",
    title: "Unit 4 Practice: JavaScript Core Concepts",
    outcomes: ["Use JavaScript syntax and control structures.", "Manipulate page content through DOM APIs."],
    questions: [
      { type: "mcq", prompt: "Which keyword declares a block-scoped variable?", options: ["var", "let", "function"], answerIndex: 1, hint: "Introduced in ES6.", explanation: "let is block-scoped." },
      { type: "fill-in", prompt: "The DOM method used to select by id is document.______.", answers: ["getElementById", "getelementbyid"], hint: "Starts with get.", explanation: "document.getElementById selects a single element by id." },
      { type: "short-answer", prompt: "How does event handling make a page interactive?", sampleAnswer: "Event listeners react to user actions (click, input, submit) and trigger JavaScript logic that updates the interface dynamically.", hint: "Think user actions.", explanation: "Events connect user actions to script behavior." }
    ]
  },
  "web-tech-unit5": {
    id: "web-tech-unit5",
    title: "Unit 5 Practice: Advanced JavaScript and Async",
    outcomes: ["Explain asynchronous JavaScript.", "Use JSON and API communication basics."],
    questions: [
      { type: "mcq", prompt: "Which construct simplifies promise chaining for async code?", options: ["switch", "async/await", "forEach"], answerIndex: 1, hint: "Two keywords used together.", explanation: "async/await provides synchronous-like syntax for async operations." },
      { type: "fill-in", prompt: "JSON stands for JavaScript Object ______.", answers: ["Notation"], hint: "Begins with N.", explanation: "JSON means JavaScript Object Notation." },
      { type: "short-answer", prompt: "Why is error handling important in API calls?", sampleAnswer: "Network requests can fail, so error handling prevents broken UX and allows fallback messages or retries.", hint: "Think resilience.", explanation: "Graceful failure keeps apps robust." }
    ]
  },
  "web-tech-unit6": {
    id: "web-tech-unit6",
    title: "Unit 6 Practice: jQuery and Framework Basics",
    outcomes: ["Use jQuery selectors/events.", "Compare framework choices for web projects."],
    questions: [
      { type: "mcq", prompt: "What does jQuery primarily help with?", options: ["Server deployment", "DOM manipulation and event handling", "Database backups"], answerIndex: 1, hint: "Client-side library.", explanation: "jQuery simplifies DOM operations and cross-browser scripting." },
      { type: "fill-in", prompt: "The jQuery symbol used for selecting elements is ______.", answers: ["$"], hint: "Single character.", explanation: "The $ function is the jQuery selector/utility entry point." },
      { type: "short-answer", prompt: "Name one factor in choosing a frontend framework.", sampleAnswer: "Evaluate performance, ecosystem maturity, team familiarity, and long-term maintainability before choosing a framework.", hint: "Think project constraints.", explanation: "Framework selection should match technical and team goals." }
    ]
  },
  "web-tech-unit7": {
    id: "web-tech-unit7",
    title: "Unit 7 Practice: Web UX, Accessibility, and SEO",
    outcomes: ["Apply accessibility basics.", "Use foundational SEO and UX practices."],
    questions: [
      { type: "mcq", prompt: "Which attribute is most important for accessible informative images?", options: ["style", "alt", "class"], answerIndex: 1, hint: "Text alternative.", explanation: "alt text provides meaning for non-visual users and fallback contexts." },
      { type: "fill-in", prompt: "SEO stands for Search Engine ______.", answers: ["Optimization"], hint: "Improving discoverability.", explanation: "SEO means Search Engine Optimization." },
      { type: "short-answer", prompt: "How does clear navigation improve UX?", sampleAnswer: "Clear navigation reduces cognitive load and helps users quickly locate content, improving task completion and satisfaction.", hint: "Think usability and findability.", explanation: "Good information architecture improves user success." }
    ]
  }
};
