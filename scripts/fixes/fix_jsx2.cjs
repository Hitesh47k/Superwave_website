const fs = require('fs');
/**
 * fix_jsx2.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

const errorBlock = `{/* Main Brand Header */}
      <div`;
code = code.replace(errorBlock, '<div');
fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
