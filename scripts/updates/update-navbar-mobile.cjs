const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf-8');

// For mobile dropdown parent
const searchMobileDropdownBtn = `                        className="w-full flex items-center justify-between px-4 py-3 rounded-md text-[15px] font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"`;
const replaceMobileDropdownBtn = `                        className={\`w-full flex items-center justify-between px-4 py-3 rounded-md text-[15px] font-semibold transition-colors \${
                          (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))
                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                            : 'text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900/50'
                        }\`}`;
content = content.replace(searchMobileDropdownBtn, replaceMobileDropdownBtn);

// For mobile non-dropdown links
const searchMobileLink = `                      <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >`;
const replaceMobileLink = `                      <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={\`block px-4 py-3 rounded-md text-base font-medium \${
                        (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))
                          ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }\`}
                    >`;
content = content.replace(searchMobileLink, replaceMobileLink);

fs.writeFileSync('src/components/layout/Navbar.tsx', content);
