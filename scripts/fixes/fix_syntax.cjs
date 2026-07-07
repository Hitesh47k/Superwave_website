const fs = require('fs');
/**
 * fix_syntax.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

code = code.replace(/\\n/g, '\n');

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
