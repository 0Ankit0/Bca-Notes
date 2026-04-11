# Content Naming Convention (Syllabus Mapping)

Use this structure for every subject folder under `semester-*/*/`:

```
subject/
├── index.html
├── course_contents.md
├── units/
│   ├── unit1.html
│   ├── unit2.html
│   └── ...
└── topics/
    ├── <topic-slug>.html
    └── ...
```

## Rules

1. **Unit pages** must use `units/unit<number>.html` (no spaces, lowercase).
2. **Topic pages** must use lowercase kebab-case slugs, e.g. `topics/unit3-core-concepts.html`.
3. Every unit listed in the syllabus must map to at least:
   - one `units/unitN.html` file, and
   - one linked topic file in `topics/`.
4. `course_contents.md` must contain a table mapping syllabus units to files.
5. `index.html` must link all unit pages and their topic pages directly.
6. Keep relative links portable (no absolute URLs for local course files).
