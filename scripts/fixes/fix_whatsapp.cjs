const fs = require('fs');
/**
 * fix_whatsapp.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/ui/WhatsAppButton.tsx'), 'utf8');

if (!code.includes("import { CONTACT_CONFIG } from '../../config/constants';")) {
  code = code.replace(/import { motion } from 'motion\/react';/, "import { motion } from 'motion/react';\nimport { CONTACT_CONFIG } from '../../config/constants';");
}

code = code.replace(
  /href="https:\/\/wa\.me\/919911270946"/g,
  'href={CONTACT_CONFIG.WHATSAPP_LINK}'
);

fs.writeFileSync(path.join(ROOT, 'src/components/ui/WhatsAppButton.tsx'), code);
