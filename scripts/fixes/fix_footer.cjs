const fs = require('fs');
/**
 * fix_footer.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Footer.tsx'), 'utf8');

if (!code.includes("import { CONTACT_CONFIG } from '../../config/constants';")) {
  code = code.replace(/import { Link } from 'react-router-dom';/, "import { Link } from 'react-router-dom';\nimport { CONTACT_CONFIG } from '../../config/constants';");
}

code = code.replace(
  /<span>\+91-9911270946<\/span>/g,
  '<a href={CONTACT_CONFIG.PHONE_LINK} className="hover:text-brand-500 transition-colors">{CONTACT_CONFIG.PHONE_DISPLAY}</a>'
);

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Footer.tsx'), code);
