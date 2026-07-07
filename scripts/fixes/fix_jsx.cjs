const fs = require('fs');
/**
 * fix_jsx.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');
code = code.replace('{/* Main Brand Header */}      <div', '<div');
fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
