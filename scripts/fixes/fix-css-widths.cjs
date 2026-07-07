const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

css = css.replace(/@media \(min-width: 1200px\) \{\s*\.container-custom \{\s*max-width: 95%;\s*\}\s*\}/g, `@media (min-width: 1200px) {
  .container-custom {
    max-width: 96%;
  }
}`);

css = css.replace(/@media \(min-width: 1440px\) \{\s*\.container-custom \{\s*max-width: 96%;\s*\}\s*\}/g, `@media (min-width: 1440px) {
  .container-custom {
    max-width: 97%;
  }
}`);

css = css.replace(/@media \(min-width: 1600px\) \{\s*\.container-custom \{\s*max-width: 97%;\s*\}\s*\}/g, `@media (min-width: 1600px) {
  .container-custom {
    max-width: 98%;
  }
}`);

css = css.replace(/@media \(min-width: 1920px\) \{\s*\.container-custom \{\s*max-width: 98%;\s*\}\s*\}/g, `@media (min-width: 1920px) {
  .container-custom {
    max-width: 99%;
  }
}`);

fs.writeFileSync('src/index.css', css);
