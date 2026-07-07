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

  // Replace max-w-7xl mx-auto px-4 md:px-8
  content = content.replace(/max-w-7xl mx-auto px-4 (?:md|sm):px-8/g, 'container-custom');
  content = content.replace(/max-w-7xl mx-auto px-4 (?:md|sm|lg):px-[0-9]+/g, 'container-custom');
  content = content.replace(/max-w-7xl mx-auto px-[0-9]+/g, 'container-custom');
  content = content.replace(/max-w-7xl mx-auto/g, 'container-custom');
  content = content.replace(/max-w-5xl mx-auto px-[0-9]+/g, 'container-custom');
  content = content.replace(/max-w-[0-9]+xl mx-auto px-[a-z0-9:-]+/g, 'container-custom');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
