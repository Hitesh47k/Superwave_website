const fs = require('fs');
/**
 * fix_submit.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

const regex = /\s*\/\/ Handler function for SearchSubmit events\s*const handleSearchSubmit = \(e\?: React\.FormEvent\) => \{\s*if \(e\) e\.preventDefault\(\);\s*if \(\!searchQuery\.trim\(\)\) return;\s*setIsSearching\(true\);\s*\/\/ Simulate a search delay\s*setTimeout\(\(\) => \{\s*setIsSearching\(false\);\s*\/\/ Logic to show search results can be implemented here\s*\}, 1500\);\s*\};/;

const replacementContent = `  // Handler function for SearchSubmit events
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    
    if (searchResults.length > 0) {
      navigateToResult(searchResults[selectedIndex >= 0 ? selectedIndex : 0]);
    }
  };`;

if (regex.test(code)) {
    code = code.replace(regex, replacementContent);
    fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
    console.log("Replaced successfully");
} else {
    console.log("Could not find target content");
}
