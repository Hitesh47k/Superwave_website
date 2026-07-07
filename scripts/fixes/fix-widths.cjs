const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// Remove media queries for container-custom
css = css.replace(/@media \(min-width: \d+px\) \{\s*\.container-custom \{\s*max-width: \d+%;\s*\}\s*\}/g, '');

// Update container-custom
css = css.replace(/@layer utilities \{\s*\.container-custom \{\s*@apply w-full mx-auto px-3 sm:px-4 md:px-5 lg:px-6;\s*\}\s*\}/g, `@layer utilities {
  .container-custom {
    @apply w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10;
  }
}`);

fs.writeFileSync('src/index.css', css);
