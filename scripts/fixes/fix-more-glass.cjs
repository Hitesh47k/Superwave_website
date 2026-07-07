const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      fileList = walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // More aggressive replacements
  content = content.replace(/bg-slate-100 dark:bg-slate-900\/50/g, 'glass-section');
  content = content.replace(/bg-slate-100 dark:bg-slate-900/g, 'glass-card');
  content = content.replace(/bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800/g, 'glass-card text-slate-600 dark:text-slate-400 hover:bg-white/10');
  content = content.replace(/bg-slate-50 dark:bg-slate-900/g, 'glass-card');
  content = content.replace(/bg-white\/90 dark:bg-slate-900\/90/g, 'glass');
  content = content.replace(/bg-slate-50\/50 dark:bg-slate-900\/40/g, 'glass');
  content = content.replace(/bg-slate-100\/50 dark:bg-slate-900\/50/g, 'glass');
  content = content.replace(/bg-slate-100\/50 dark:bg-slate-900\/20/g, 'glass-section');
  content = content.replace(/bg-white\/50 dark:bg-slate-900\/50/g, 'glass');
  content = content.replace(/bg-white\/60 dark:bg-slate-900\/60/g, 'glass');
  content = content.replace(/bg-white\/80 dark:bg-slate-900\/80/g, 'glass');
  content = content.replace(/bg-white dark:bg-slate-800\/50/g, 'glass-card');
  content = content.replace(/bg-white dark:bg-slate-800/g, 'glass-card');
  content = content.replace(/bg-white dark:bg-slate-950/g, 'glass-section');

  // Specific buttons or inputs
  content = content.replace(/bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300/g, 'glass-card text-slate-600 dark:text-slate-300');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated glass UI in ${file}`);
  }
});
