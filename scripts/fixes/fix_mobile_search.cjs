const fs = require('fs');
/**
 * fix_mobile_search.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), 'utf8');

// Replace the desktop search block with a wrapper that isn't hidden if we move things, 
// OR just add a separate mobile search block inside the mobile menu toggle container.

// Remove the `ref={searchContainerRef}` from the desktop search div
code = code.replace('<div className="relative" ref={searchContainerRef}>', '<div className="relative">');

// We'll wrap the entire Navbar content in the ref, or just the whole nav element, 
// so clicking outside either desktop or mobile closes it.
code = code.replace('<nav className={`sticky', '<nav ref={searchContainerRef} className={`sticky');

// Let's modify the desktop Search dropdown classes so it can also look good if we trigger it from mobile.
// Wait, the desktop Search dropdown is inside `<div className="hidden lg:flex ...">` so it won't render at all on mobile.
// So we must move the dropdown OUT of the `hidden lg:flex` div, or duplicate it for mobile.

// Let's extract the dropdown UI string
const dropdownStart = '{isSearchOpen && (\\n                <motion.div';
const dropdownEnd = '                </motion.div>\\n              )}\\n            </AnimatePresence>';
// Wait, the exact string is in our previous injection. Let's just do a string replacement.
