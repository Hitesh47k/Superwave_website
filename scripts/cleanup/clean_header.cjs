const fs = require('fs');
/**
 * clean_header.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');
code = code.replace(/return \(\s*<>\s*/, 'return (\n    ');
code = code.replace(/\s*<\/>\s*\);\s*}\s*$/, '\n  );\n}');
fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
