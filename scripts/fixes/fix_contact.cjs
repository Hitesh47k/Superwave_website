const fs = require('fs');
/**
 * fix_contact.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/pages/Contact.tsx'), 'utf8');

if (!code.includes("import { CONTACT_CONFIG } from '../config/constants';")) {
  code = code.replace(/import React, \{ useState \} from 'react';/, "import React, { useState } from 'react';\nimport { CONTACT_CONFIG } from '../config/constants';");
}

code = code.replace(
  /<p className="text-sm text-slate-600 dark:text-slate-400">\+91-9911270946<\/p>/g,
  '<a href={CONTACT_CONFIG.PHONE_LINK} className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors block">{CONTACT_CONFIG.PHONE_DISPLAY}</a>'
);

fs.writeFileSync(path.join(ROOT, 'src/pages/Contact.tsx'), code);
