import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Bot, Zap, Calculator, LineChart, LayoutDashboard, Car, Cpu, Code2, BrainCircuit, Server, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AuthModal from '../auth/AuthModal';
import { LogIn } from 'lucide-react';
import { searchIndex, SearchResult } from '../../data/searchIndex';
import { useRef } from 'react';

type DropdownItem = { name: string; path: string; icon?: React.ReactNode; desc?: string };
type NavLink = {
  name: string;
  path: string;
  isMegaMenu?: boolean;
  dropdown?: DropdownItem[];
};

const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    isMegaMenu: true,
    dropdown: [
      { name: 'Toll Solutions', path: '/services#category-toll', icon: <Car className="w-5 h-5" />, desc: 'Advanced electronic toll systems' },
      { name: 'Hardware Solutions', path: '/services#category-hardware', icon: <Cpu className="w-5 h-5" />, desc: 'Industrial grade equipment' },
      { name: 'Software Solutions & AI Solutions', path: '/services#category-software', icon: <Code2 className="w-5 h-5" />, desc: 'Custom software & intelligence' },
      { name: 'IT Services', path: '/services#category-it', icon: <Server className="w-5 h-5" />, desc: 'Consulting, cloud, and security' }
    ]
  },
  { name: 'Products', path: '/products' },
  { name: 'Industries', path: '/industries' },
  { name: 'Projects', path: '/projects' },
  { name: 'Clients', path: '/clients' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Careers', path: '/careers' },
  { 
    name: 'AI Centre', 
    path: '/ai',
    isMegaMenu: true,
    dropdown: [
      { name: 'AI Assistant', path: '/ai/assistant', icon: <Bot className="w-5 h-5" />, desc: 'Intelligent conversational agent' },
      { name: 'AI Powered Solutions', path: '/ai/solutions', icon: <Zap className="w-5 h-5" />, desc: 'Enterprise AI integrations' },
      { name: 'AI Project Cost Finder', path: '/ai/project-cost-finder', icon: <Calculator className="w-5 h-5" />, desc: 'Smart estimation tool' },
      { name: 'AI Prediction', path: '/ai/prediction', icon: <LineChart className="w-5 h-5" />, desc: 'Data-driven forecasting' },
      { name: 'AI Analytical Dashboard', path: '/ai/analytics', icon: <LayoutDashboard className="w-5 h-5" />, desc: 'Real-time intelligent insights' }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'role-selection' | 'register'>('role-selection');

  const openLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setAuthView('role-selection');
    setIsAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const location = useLocation();

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



  const toggleMobileMenuState = (name: string) => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav ref={searchContainerRef} className={`relative sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#CBD5E1]/95 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.15)] border-b border-[#94A3B8]/20 py-2 dark:!bg-none dark:!bg-[#111827]/95 dark:!shadow-md dark:!border-[rgba(255,255,255,0.08)]' 
        : 'bg-[#CBD5E1] py-3 border-b border-transparent dark:!bg-none dark:!bg-[#111827] dark:shadow-none dark:!border-[rgba(255,255,255,0.08)]'
    }`}>
      <div className="max-w-[90rem] mx-auto px-3 md:px-6 flex justify-between items-center w-full">
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-0 xl:space-x-1">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={link.dropdown ? () => setActiveDropdown(link.name) : undefined}
              onMouseLeave={link.dropdown ? () => setActiveDropdown(null) : undefined}
            >
              <Link
                to={link.path}
                className={`px-2 xl:px-3 py-2 rounded-md text-[14px] xl:text-[16px] font-semibold tracking-wide transition-colors flex items-center space-x-1 nav-link-underline ${
                  location.pathname === link.path 
                    ? 'text-[#2563EB] dark:text-brand-400 after:scale-x-100 after:origin-bottom-left' 
                    : 'text-[#0F172A] dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-brand-400'
                }`}
               onClick={() => { if (link.dropdown) setActiveDropdown(null); }}>
                <span>{link.name}</span>
                {link.dropdown && <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-180" />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-full right-0 lg:left-0 mt-2 ${link.isMegaMenu ? 'w-80' : 'w-56'} glass-card bg-[#CBD5E1]/95 dark:!bg-none dark:!bg-[#1F2937]/95 backdrop-blur-xl rounded-2xl p-2 shadow-[0_6px_20px_rgba(0,0,0,0.15)] dark:shadow-xl border border-[#94A3B8]/20 dark:!border-[rgba(255,255,255,0.08)] z-50`}
                    >
                      {link.dropdown.map((item) => (
                        <Link key={item.name} to={item.path} onClick={() => setActiveDropdown(null)} className={`flex items-start px-4 py-3 rounded-xl transition-all duration-300 group/item ${ link.isMegaMenu ? 'hover:bg-[#94A3B8] dark:hover:bg-brand-900/20' : 'hover:bg-[#94A3B8] dark:hover:bg-white/5' }`}>
                          {item.icon && (
                            <div className="mr-4 mt-0.5 text-brand-600 dark:text-brand-400 group-hover/item:scale-110 transition-transform">
                              {item.icon}
                            </div>
                          )}
                          <div>
                            <div className={`text-sm font-semibold text-[#0F172A] dark:text-slate-200 group-hover/item:text-[#2563EB] dark:group-hover/item:text-brand-400 transition-colors ${!item.desc && 'py-1'}`}>
                              {item.name}
                            </div>
                            {item.desc && (
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                {item.desc}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
        
                <div className="hidden lg:flex items-center gap-2 lg:gap-4 pl-4 shrink-0">
          
          
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-[#0F172A] dark:text-slate-300 hover:bg-[#94A3B8] dark:hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
<a href="#" onClick={openLogin} className="bg-brand-500/10 text-brand-600 dark:text-brand-400 px-3 py-2 text-[14px] xl:text-[16px] font-semibold rounded-lg border border-brand-500/20 hover:bg-brand-500/20 transition-colors flex items-center space-x-2 group">
            <LogIn className="w-4 h-4 group-hover:text-brand-500 transition-colors" />
            <span className="whitespace-nowrap">Login Portal</span>
          </a>
          <Link 
            to="/contact" 
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 text-[14px] xl:text-[16px] font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg shrink-0 whitespace-nowrap btn-premium hover:scale-[1.02] ml-2"
          >
            Contact Us
          </Link>
        </div>


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
                            className={`w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col ${index === selectedIndex ? 'bg-slate-50 dark:bg-slate-800/80' : ''}`}
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#CBD5E1] dark:!bg-none dark:!bg-[#111827]/95 border-t border-[#94A3B8]/20 dark:!border-[rgba(255,255,255,0.08)] overflow-hidden backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <button 
                        onClick={() => toggleMobileMenuState(link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-md text-[15px] font-semibold text-[#0F172A] dark:text-white hover:bg-[#94A3B8] dark:hover:bg-white/5 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedMobileMenus[link.name] ? '-rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMobileMenus[link.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 border-l-2 border-[#CBD5E1] dark:border-slate-800 ml-4 py-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center px-4 py-2 rounded-md text-[15px] font-semibold text-[#334155] dark:text-slate-400 hover:bg-[#94A3B8] dark:hover:bg-white/5 hover:text-[#2563EB] dark:hover:text-brand-400"
                                >
                                  {item.icon && <span className="mr-3 scale-75">{item.icon}</span>}
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={link.path} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-semibold text-[#0F172A] dark:text-slate-200 hover:bg-[#94A3B8] dark:hover:bg-white/5">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
                            <div className="pt-6 pb-2 flex flex-col gap-3 border-t border-slate-200 dark:border-white/10 mt-2">
                <a 
                  href="#" 
                  onClick={openLogin} 
                  className="flex items-center justify-center space-x-2 w-full bg-brand-500/10 text-brand-600 dark:text-brand-400 px-5 py-3 rounded-xl text-base font-semibold border border-brand-500/20 hover:bg-brand-500/20 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Login Portal</span>
                </a>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-3 rounded-xl text-base font-medium btn-premium mt-1"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialView={authView}
      />
    </>
  );
}