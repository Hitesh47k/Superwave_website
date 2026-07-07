const fs = require('fs');
/**
 * remove_search.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

// Remove states and search logic
const stateRegex = /  \/\/ Search feature states[\s\S]*?const handleSearchSubmit = \(e\?: React\.FormEvent\) => \{[\s\S]*?\}\;/;
code = code.replace(stateRegex, '');

// Remove Search Bar UI from Header.tsx
// Find where "{/* Search Bar */}" starts
const searchUiStart = code.indexOf('{/* Search Bar */}');
if (searchUiStart !== -1) {
  // Find where Search Bar UI ends (before "</div>" that closes the right side container)
  // Or just find the closing AnimatePresence and the div
  const searchUiEndStr = '                </AnimatePresence>\n              </div>';
  const searchUiEnd = code.indexOf(searchUiEndStr, searchUiStart) + searchUiEndStr.length;
  code = code.substring(0, searchUiStart) + code.substring(searchUiEnd);
}

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
