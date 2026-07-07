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

  // Replace font-sans in headings with font-display
  content = content.replace(/<(h[1-6])([^>]*)font-sans/g, '<$1$2font-display');
  // Or just let the global CSS handle it by removing font-sans, but let's just make sure there is no explicit font-sans in headings.
  // Actually, some places might just have `font-sans` manually added.
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated fonts in ${file}`);
  }
});
