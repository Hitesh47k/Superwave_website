const fs = require('fs');
/**
 * fix_imports.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

code = code.replace(/useRef /g, '');
code = code.replace(/, useRef/g, '');
code = code.replace(/, AnimatePresence/g, '');
code = code.replace(/, useNavigate/g, '');

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
