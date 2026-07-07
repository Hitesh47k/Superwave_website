const fs = require('fs');
/**
 * fix_header_state.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

const insertContent = `
  // Search feature states
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        setIsSearching(false);
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
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearching(true);
    setShowResults(true);
  };

  const navigateToResult = (result: SearchResult) => {
    setShowResults(false);
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults && searchQuery.trim()) {
      setShowResults(true);
    }

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
      setShowResults(false);
    }
  };

  // Handler function for SearchSubmit events
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    
    if (searchResults.length > 0) {
      navigateToResult(searchResults[selectedIndex >= 0 ? selectedIndex : 0]);
    }
  };

  // Side effect executed on mount or dependency change
  useEffect(() => {
    // Only apply the class, do NOT save to localStorage here to avoid overriding user intent
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Handler for theme toggle
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('scail-theme', newTheme ? 'dark' : 'light');
  };
`;

const anchor = "return true;";
code = code.replace(anchor, anchor + "\\n   });\\n" + insertContent);

// Need to remove the extra "  });\n" since we duplicated it with replace? No wait, previously I matched "  });" but maybe it didn't match perfectly.
// Let's replace the whole isDark block to be safe.
const newIsDark = `  // Local state to manage isDark
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('scail-theme');
    if (savedTheme === 'light') {
      return false;
    }
    // If no preference exists, or if it's 'dark', default to Dark Mode
    return true; 
  });`;

// Replace from isDark to return ( with the new content
const regex = /  \/\/ Local state to manage isDark[\s\S]*?return \(/;
code = code.replace(regex, newIsDark + "\\n" + insertContent + "\\n  return (");

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
