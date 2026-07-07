const fs = require('fs');
/**
 * remove_utility.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

// Remove the <header> block entirely
const headerStart = '<header className="glass-card';
const headerEnd = '</header>';
const startIndex = code.indexOf(headerStart);
const endIndex = code.indexOf(headerEnd) + headerEnd.length;

if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + code.substring(endIndex);
}

// Remove MapPin, Phone from lucide-react import
code = code.replace(/ MapPin, Phone,/, '');

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
