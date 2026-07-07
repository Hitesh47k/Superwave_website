const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

css = css.replace(
  /@layer base \{\s*body \{\s*@apply antialiased[^;]+;\s*\}\s*\}/g,
  `@layer base {
  body {
    @apply antialiased text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300 font-sans;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight font-bold;
  }
}`
);

fs.writeFileSync('src/index.css', css);
