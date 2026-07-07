const fs = require('fs');
const content = `import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Bot, Zap, Calculator, LineChart, LayoutDashboard, Car, Cpu, Code2, BrainCircuit, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const location = useLocation();

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
    <nav className={\`sticky top-0 z-50 transition-all duration-300 \${
      isScrolled ? 'glass shadow-md py-3' : 'bg-white dark:bg-slate-950 py-5'
    }\`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center w-full">
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-0 xl:space-x-1">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={\`px-2 xl:px-3 py-2 rounded-md text-[14px] xl:text-[16px] font-medium transition-colors flex items-center space-x-1 nav-link-underline \${
                  location.pathname === link.path 
                    ? 'text-brand-500 after:scale-x-100 after:origin-bottom-left' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400'
                }\`}
              >
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
                      className={\`absolute top-full right-0 lg:left-0 mt-2 \${link.isMegaMenu ? 'w-80' : 'w-56'} glass-card bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-slate-200 dark:border-white/10 z-50\`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setActiveDropdown(null)}
                          className={\`flex items-start px-4 py-3 rounded-xl transition-all duration-300 group/item \${
                            link.isMegaMenu 
                              ? 'hover:bg-gradient-to-r hover:from-brand-50 hover:to-transparent dark:hover:from-brand-900/20 dark:hover:to-transparent' 
                              : 'hover:bg-slate-50 dark:hover:bg-white/5'
                          }\`}
                        >
                          {item.icon && (
                            <div className="mr-4 mt-0.5 text-brand-600 dark:text-brand-400 group-hover/item:scale-110 transition-transform">
                              {item.icon}
                            </div>
                          )}
                          <div>
                            <div className={\`text-sm font-medium text-slate-700 dark:text-slate-200 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-colors \${!item.desc && 'py-1'}\`}>
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
        
        <div className="hidden lg:block pl-4">
          <Link 
            to="/contact" 
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 text-[14px] xl:text-[16px] font-medium rounded-lg hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white dark:hover:text-white shadow-lg shrink-0 whitespace-nowrap btn-premium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass bg-white/95 dark:bg-slate-950/95 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <button 
                        onClick={() => toggleMobileMenuState(link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-md text-[15px] font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${expandedMobileMenus[link.name] ? '-rotate-180' : ''}\`} />
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
                            <div className="pl-4 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4 py-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center px-4 py-2 rounded-md text-[15px] font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-brand-600 dark:hover:text-brand-400"
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
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 pb-4">
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-xl text-base font-medium btn-premium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}`;
fs.writeFileSync('src/components/layout/Navbar.tsx', content);
