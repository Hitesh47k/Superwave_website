const fs = require('fs');
/**
 * patch_script3.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

const targetContent = `              {/* Search Bar */}
              <form 
                onSubmit={handleSearchSubmit} 
                className={\`relative flex items-center transition-all duration-300 flex-1 lg:flex-none min-w-0 \${
                  isSearchFocused ? 'lg:w-[320px]' : 'lg:w-[260px]'
                }\`}
              >
                <div className={\`absolute inset-0 rounded-xl transition-all duration-300 backdrop-blur-sm border \${
                  isSearchFocused 
                    ? 'glass-card shadow-[0_0_0_2px_rgba(37,99,235,0.2)] dark:shadow-[0_0_0_2px_rgba(56,189,248,0.2)] border-brand-500 dark:border-brand-400' 
                    : 'glass hover:bg-slate-100 dark:hover:bg-slate-800/80 shadow-sm border-slate-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-500/50'
                }\`}></div>
                
                <button 
                  type="button" 
                  onClick={(e) => handleSearchSubmit(e)} 
                  className="absolute left-3 z-10 text-slate-400 dark:text-slate-500 hover:text-brand-500 transition-colors shrink-0"
                >
                  {isSearching ? (
                    <div className="w-3.5 h-3.5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Search className={\`w-3.5 h-3.5 transition-colors \${isSearchFocused ? 'text-brand-500' : ''}\`} />
                  )}
                </button>
                
                <input
                  type="text"
                  placeholder="Search projects, products..."
                  className="w-full bg-transparent border-none outline-none py-1 pl-9 pr-3 text-[10px] sm:text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 relative z-10 min-w-0"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>`;

const replacementContent = `              {/* Search Bar */}
              <div className="relative" ref={searchContainerRef}>
                <form 
                  onSubmit={handleSearchSubmit} 
                  className={\`relative flex items-center transition-all duration-300 flex-1 lg:flex-none min-w-0 \${
                    isSearchFocused || showResults ? 'lg:w-[320px]' : 'lg:w-[260px]'
                  }\`}
                >
                  <div className={\`absolute inset-0 rounded-xl transition-all duration-300 backdrop-blur-sm border \${
                    isSearchFocused || showResults
                      ? 'glass-card shadow-[0_0_0_2px_rgba(37,99,235,0.2)] dark:shadow-[0_0_0_2px_rgba(56,189,248,0.2)] border-brand-500 dark:border-brand-400' 
                      : 'glass hover:bg-slate-100 dark:hover:bg-slate-800/80 shadow-sm border-slate-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-500/50'
                  }\`}></div>
                  
                  <button 
                    type="button" 
                    onClick={(e) => handleSearchSubmit(e)} 
                    className="absolute left-3 z-10 text-slate-400 dark:text-slate-500 hover:text-brand-500 transition-colors shrink-0"
                  >
                    {isSearching ? (
                      <div className="w-3.5 h-3.5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Search className={\`w-3.5 h-3.5 transition-colors \${isSearchFocused || showResults ? 'text-brand-500' : ''}\`} />
                    )}
                  </button>
                  
                  <input
                    type="text"
                    placeholder="Search projects, products..."
                    className="w-full bg-transparent border-none outline-none py-1 pl-9 pr-3 text-[10px] sm:text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 relative z-10 min-w-0"
                    onFocus={() => { setIsSearchFocused(true); if (searchQuery.trim()) setShowResults(true); }}
                    onBlur={() => setIsSearchFocused(false)}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                  />
                </form>

                <AnimatePresence>
                  {showResults && searchQuery.trim() !== '' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 z-50 glass-card bg-white/95 dark:!bg-[#1F2937]/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200 dark:!border-[rgba(255,255,255,0.08)] overflow-hidden max-h-[400px] overflow-y-auto"
                    >
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
                                className={\`w-full text-left px-4 py-2.5 transition-colors flex items-center justify-between group \${
                                  index === selectedIndex
                                    ? 'bg-slate-100 dark:bg-white/10'
                                    : 'hover:bg-slate-50 dark:hover:bg-white/5'
                                }\`}
                                onMouseEnter={() => setSelectedIndex(index)}
                              >
                                <div className="flex-1 min-w-0 pr-4">
                                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                                    {matchIndex >= 0 ? (
                                      <>
                                        {beforeMatch}
                                        <span className="text-brand-600 dark:text-brand-400">{matchText}</span>
                                        {afterMatch}
                                      </>
                                    ) : (
                                      result.title
                                    )}
                                  </div>
                                  {result.description && (
                                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                      {result.description}
                                    </div>
                                  )}
                                  <div className="text-[9px] font-medium text-brand-600 dark:text-brand-400 mt-1 uppercase tracking-wider">
                                    {result.category}
                                  </div>
                                </div>
                                <ChevronRight className={\`w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors \${
                                  index === selectedIndex ? 'text-brand-500 translate-x-1' : ''
                                }\`} />
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="px-4 py-8 text-center">
                          <Search className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">No results found</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            We couldn't find anything matching "{searchQuery}"
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>`;

if (code.includes('className="w-full bg-transparent border-none outline-none py-1 pl-9 pr-3 text-[10px] sm:text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 relative z-10 min-w-0"')) {
    code = code.replace(targetContent, replacementContent);
    fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
    console.log("Replaced successfully");
} else {
    console.log("Could not find target content");
}
