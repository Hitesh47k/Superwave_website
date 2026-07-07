const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf-8');

const search = `                className={\`px-2 xl:px-3 py-2 rounded-md text-[14px] xl:text-[16px] font-medium transition-colors flex items-center space-x-1 nav-link-underline \${
                  location.pathname === link.path 
                    ? 'text-brand-500 after:scale-x-100 after:origin-bottom-left' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400'
                }\`}`;

const replace = `                className={\`px-2 xl:px-3 py-2 rounded-md text-[14px] xl:text-[16px] font-medium transition-colors flex items-center space-x-1 nav-link-underline \${
                  (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))
                    ? 'text-brand-500 after:scale-x-100 after:origin-bottom-left' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400'
                }\`}`;

content = content.replace(search, replace);
fs.writeFileSync('src/components/layout/Navbar.tsx', content);
