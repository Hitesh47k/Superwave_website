const fs = require('fs');

let content = fs.readFileSync('src/pages/AI.tsx', 'utf-8');

// Replace pill classes
content = content.replace(/className="inline-flex items-center space-x-2 bg-brand-100 dark:bg-brand-900\/40 border border-brand-200 dark:border-brand-500\/30 rounded-full px-4 py-1\.5 mb-6 backdrop-blur-sm"/, 'className="inline-flex items-center space-x-2 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-400 dark:border-slate-600 rounded-full px-5 py-1.5 mb-8 backdrop-blur-sm"');

content = content.replace(/className="w-2 h-2 bg-brand-600 dark:bg-brand-400 rounded-full animate-pulse"/, 'className="w-2.5 h-2.5 bg-brand-400 rounded-full"');

content = content.replace(/className="text-brand-700 dark:text-brand-300 text-sm font-medium tracking-wide uppercase"/, 'className="text-slate-900 dark:text-slate-100 text-sm font-semibold tracking-wide uppercase"');

fs.writeFileSync('src/pages/AI.tsx', content);
