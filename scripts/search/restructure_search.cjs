const fs = require('fs');
/**
 * restructure_search.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), 'utf8');

// 1. Remove the ref={searchContainerRef} from the inner div and add it to the top level nav wrapper.
code = code.replace(
  '<nav className={`sticky top-0 z-50 transition-all duration-300',
  '<nav ref={searchContainerRef} className={`relative sticky top-0 z-50 transition-all duration-300'
);

// 2. Remove the existing desktop search block completely
const desktopSearchStart = '<div className="relative" ref={searchContainerRef}>';
const desktopSearchEnd = '</div>\n   \n          <a href="#" onClick={openLogin}';

// We'll replace it with just the desktop search button.
const desktopSearchButton = `
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-[#0F172A] dark:text-slate-300 hover:bg-[#94A3B8] dark:hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
`;

code = code.substring(0, code.indexOf(desktopSearchStart)) + 
       desktopSearchButton + 
       code.substring(code.indexOf('<a href="#" onClick={openLogin}', code.indexOf(desktopSearchStart)));

// 3. Add mobile search button right before mobile menu toggle
const mobileMenuToggle = '{/* Mobile Menu Toggle */}';
const mobileSearchAndToggle = `
        <div className="flex lg:hidden items-center gap-1">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-[#0F172A] dark:text-slate-300 hover:bg-[#94A3B8] dark:hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 text-[#0F172A] dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
`;

code = code.replace(
  /{ \/\* Mobile Menu Toggle \*\/ }[\s\S]*?<\/button>/,
  mobileSearchAndToggle
);
// Wait, the regex might fail because it doesn't match perfectly. Let's do string replacement.

const oldMobileToggle = `        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-[#0F172A] dark:text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>`;

code = code.replace(oldMobileToggle, mobileSearchAndToggle);

// 4. Insert the search popover AnimatePresence just before `</div>\n\n      {/* Mobile Navigation */}`
const popoverUI = `
        {/* Search Dropdown (Shared for Mobile & Desktop) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-4 left-4 lg:left-auto mt-2 lg:w-[400px] bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
            >
              <div className="flex items-center border-b border-slate-200 dark:border-white/10 px-3 py-2">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent border-none outline-none px-3 py-1.5 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {searchQuery.trim() !== '' && (
                <div className="max-h-[300px] overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((result, index) => {
                        const matchIndex = result.title.toLowerCase().indexOf(searchQuery.toLowerCase());
                        const beforeMatch = result.title.slice(0, matchIndex);
                        const matchText = result.title.slice(matchIndex, matchIndex + searchQuery.length);
                        const afterMatch = result.title.slice(matchIndex + searchQuery.length);
                        return (
                          <button
                            key={result.id}
                            onClick={() => navigateToResult(result)}
                            className={\`w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col \${index === selectedIndex ? 'bg-slate-50 dark:bg-slate-800/80' : ''}\`}
                          >
                            <span className="text-sm font-medium text-slate-900 dark:text-white">
                              {matchIndex >= 0 ? (
                                <>
                                  {beforeMatch}
                                  <span className="text-brand-600 dark:text-brand-400">{matchText}</span>
                                  {afterMatch}
                                </>
                              ) : result.title}
                            </span>
                            {result.description && (
                              <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {result.description}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
`;

code = code.replace(
  '      </div>\n\n      {/* Mobile Navigation */}',
  popoverUI + '\n      </div>\n\n      {/* Mobile Navigation */}'
);

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), code);
