const fs = require('fs');
/**
 * patch_navbar.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), 'utf8');

if (!code.includes('AuthModal')) {
  code = code.replace(
    "import { motion, AnimatePresence } from 'motion/react';",
    "import { motion, AnimatePresence } from 'motion/react';\nimport AuthModal from '../auth/AuthModal';\nimport { LogIn, UserPlus } from 'lucide-react';"
  );
}

// Add state for AuthModal
if (!code.includes('isAuthModalOpen')) {
  code = code.replace(
    '  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});',
    `  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'role-selection' | 'register'>('role-selection');

  const openLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setAuthView('role-selection');
    setIsAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const openRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setAuthView('register');
    setIsAuthModalOpen(true);
    setMobileMenuOpen(false);
  };`
  );
}

// Add buttons to desktop navbar (before Contact Us)
const desktopButtons = `        <div className="hidden lg:flex items-center gap-2 lg:gap-4 pl-4 shrink-0">
          <a href="#" onClick={openLogin} className="bg-brand-500/10 text-brand-600 dark:text-brand-400 px-3 py-2 text-[14px] xl:text-[16px] font-semibold rounded-lg border border-brand-500/20 hover:bg-brand-500/20 transition-colors flex items-center space-x-2 group">
            <LogIn className="w-4 h-4 group-hover:text-brand-500 transition-colors" />
            <span className="whitespace-nowrap">Login Portal</span>
          </a>
          <a href="#" onClick={openRegister} className="bg-brand-600 text-white px-3 py-2 text-[14px] xl:text-[16px] font-semibold rounded-lg border border-brand-600 hover:bg-brand-700 transition-colors flex items-center space-x-2 shadow-sm shadow-brand-500/20">
            <UserPlus className="w-4 h-4 text-brand-200" />
            <span className="whitespace-nowrap">Register</span>
          </a>
          <Link 
            to="/contact" 
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 text-[14px] xl:text-[16px] font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg shrink-0 whitespace-nowrap btn-premium hover:scale-[1.02] ml-2"
          >
            Contact Us
          </Link>
        </div>`;

const desktopRegex = /<div className="hidden lg:block pl-4">\s*<Link\s*to="\/contact"\s*className="[^"]+"\s*>\s*Contact Us\s*<\/Link>\s*<\/div>/;

if (desktopRegex.test(code)) {
  code = code.replace(desktopRegex, desktopButtons);
} else {
  console.log("Could not match desktop button");
}

// Add buttons to mobile menu (before Contact Us)
const mobileButtons = `              <div className="pt-6 pb-2 flex flex-col gap-3 border-t border-slate-200 dark:border-white/10 mt-2">
                <a 
                  href="#" 
                  onClick={openLogin} 
                  className="flex items-center justify-center space-x-2 w-full bg-brand-500/10 text-brand-600 dark:text-brand-400 px-5 py-3 rounded-xl text-base font-semibold border border-brand-500/20 hover:bg-brand-500/20 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Login Portal</span>
                </a>
                <a 
                  href="#" 
                  onClick={openRegister} 
                  className="flex items-center justify-center space-x-2 w-full bg-brand-600 text-white px-5 py-3 rounded-xl text-base font-semibold shadow-sm hover:bg-brand-700 transition-colors"
                >
                  <UserPlus className="w-5 h-5 text-brand-200" />
                  <span>Register</span>
                </a>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-3 rounded-xl text-base font-medium btn-premium mt-1"
                >
                  Contact Us
                </Link>
              </div>`;

const mobileRegex = /<div className="pt-6 pb-4">\s*<Link\s*to="\/contact"\s*onClick=\{\(\) => setMobileMenuOpen\(false\)\}\s*className="[^"]+"\s*>\s*Contact Us\s*<\/Link>\s*<\/div>/;

if (mobileRegex.test(code)) {
  code = code.replace(mobileRegex, mobileButtons);
} else {
  console.log("Could not match mobile button");
}

const finalReturnRegex = /<\/nav>\s*\);\s*\}/;
code = code.replace(finalReturnRegex, `</nav>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialView={authView}
      />
    </>
  );
}`);

const firstReturnRegex = /return \(\s*<nav/;
code = code.replace(firstReturnRegex, 'return (\n    <>\n      <nav');

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), code);
