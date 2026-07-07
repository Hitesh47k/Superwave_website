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

  // Global replacements
  // sections
  content = content.replace(/bg-white dark:bg-slate-950/g, 'glass-section');
  content = content.replace(/bg-white dark:bg-slate-800\/50/g, 'glass-card');
  content = content.replace(/bg-white dark:bg-slate-800/g, 'glass-card');
  content = content.replace(/bg-white dark:bg-slate-900/g, 'glass-card');

  // Input fields, text areas, selects
  content = content.replace(/bg-white dark:bg-slate-950 text-slate-900/g, 'glass text-slate-900');
  
  // Specific cleanups for borders and shadows to let glass classes handle it
  content = content.replace(/border border-slate-200 dark:border-slate-800/g, 'border-transparent');
  content = content.replace(/border border-slate-200 dark:border-slate-700/g, 'border-transparent');
  content = content.replace(/border border-slate-200 dark:border-white\/10/g, 'border-transparent');
  content = content.replace(/border border-slate-200 dark:border-white\/5/g, 'border-transparent');
  
  // Additional passes for redundant borders since glass classes define them
  content = content.replace(/glass-card border-transparent/g, 'glass-card');
  content = content.replace(/glass-panel border-transparent/g, 'glass-panel');
  content = content.replace(/glass border-transparent/g, 'glass');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated glass UI in ${file}`);
  }
});
