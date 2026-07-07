const fs = require('fs');
/**
 * fix_state.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

const regex = /\s*\/\/ Local state to manage isSearchFocused\s*const \[isSearchFocused, setIsSearchFocused\] = useState\(false\);\s*\/\/ Local state to manage searchQuery\s*const \[searchQuery, setSearchQuery\] = useState\(''\);\s*\/\/ Local state to manage isSearching\s*const \[isSearching, setIsSearching\] = useState\(false\);/;

const replacementContent = `  // Local state to manage isSearchFocused
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // Local state to manage searchQuery
  const [searchQuery, setSearchQuery] = useState('');
  // Local state to manage isSearching
  const [isSearching, setIsSearching] = useState(false);

  // Search feature states
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
`;

if (regex.test(code)) {
    code = code.replace(regex, replacementContent);
    fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
    console.log("Replaced successfully");
} else {
    console.log("Could not find target content");
}
