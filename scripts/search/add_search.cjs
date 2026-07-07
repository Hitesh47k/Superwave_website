const fs = require('fs');
/**
 * add_search.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), 'utf8');

// Add imports
code = code.replace(
  "import { Link, useLocation } from 'react-router-dom';",
  "import { Link, useLocation, useNavigate } from 'react-router-dom';"
);

code = code.replace(
  "import { Menu, X, ChevronDown, ChevronRight, Bot, Zap, Calculator, LineChart, LayoutDashboard, Car, Cpu, Code2, BrainCircuit, Server } from 'lucide-react';",
  "import { Menu, X, ChevronDown, ChevronRight, Bot, Zap, Calculator, LineChart, LayoutDashboard, Car, Cpu, Code2, BrainCircuit, Server, Search } from 'lucide-react';"
);

code = code.replace(
  "import { LogIn} from 'lucide-react';",
  "import { LogIn } from 'lucide-react';\nimport { searchIndex, SearchResult } from '../../data/searchIndex';\nimport { useRef } from 'react';"
);

// Add Search state
const stateInsert = `
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    } else if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }
      
      const query = searchQuery.toLowerCase().trim();
      const results = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        (item.description && item.description.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query)
      );
      
      setSearchResults(results);
      setSelectedIndex(-1);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const navigateToResult = (result: SearchResult) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(result.path);
    if (result.path.includes('#')) {
      const id = result.path.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < searchResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        navigateToResult(searchResults[selectedIndex]);
      } else if (searchResults.length > 0) {
        navigateToResult(searchResults[0]);
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
    }
  };

`;

code = code.replace(
  "  const location = useLocation();",
  "  const location = useLocation();\n" + stateInsert
);

// Update padding classes
code = code.replace(
  /bg-\[#CBD5E1\]\/95 backdrop-blur-md shadow-\[0_6px_20px_rgba\(0,0,0,0\.15\)\] border-b border-\[#94A3B8\]\/20 py-3/g,
  "bg-[#CBD5E1]/95 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.15)] border-b border-[#94A3B8]/20 py-2"
);
code = code.replace(
  /bg-\[#CBD5E1\] py-5 border-b border-transparent/g,
  "bg-[#CBD5E1] py-3 border-b border-transparent"
);
code = code.replace(
  /className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center w-full"/g,
  'className="max-w-[90rem] mx-auto px-3 md:px-6 flex justify-between items-center w-full"'
);

// Insert Search UI before Login Portal in desktop
const desktopSearchUI = `
          <div className="relative" ref={searchContainerRef}>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#0F172A] dark:text-slate-300 hover:bg-[#94A3B8] dark:hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-[300px] sm:w-[400px] bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
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
          </div>
`;

code = code.replace(
  '<a href="#" onClick={openLogin} className="bg-brand-500/10 text-brand-600 dark:text-brand-400',
  desktopSearchUI + '\n          <a href="#" onClick={openLogin} className="bg-brand-500/10 text-brand-600 dark:text-brand-400'
);


fs.writeFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), code);
