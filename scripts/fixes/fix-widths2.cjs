const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

css = css.replace(/@layer utilities \{\s*\.container-custom \{\s*@apply w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10;\s*\}\s*\}/g, `@layer utilities {
  .container-custom {
    @apply w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16;
  }
}`);

fs.writeFileSync('src/index.css', css);
