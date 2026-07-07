const fs = require('fs');
/**
 * patch_script2.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

const targetContent = `  // Handler function for SearchSubmit events
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate a search delay
    setTimeout(() => {
      setIsSearching(false);
      // Logic to show search results can be implemented here
    }, 1500);
  };`;

const replacementContent = `  // Handler function for SearchSubmit events
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    
    if (searchResults.length > 0) {
      navigateToResult(searchResults[selectedIndex >= 0 ? selectedIndex : 0]);
    }
  };`;

code = code.replace(targetContent, replacementContent);
fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
