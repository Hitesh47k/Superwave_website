const fs = require('fs');
let content = fs.readFileSync('src/pages/Products.tsx', 'utf-8');
content = content.replace(/  \}\n\];/g, "  },");
fs.writeFileSync('src/pages/Products.tsx', content);
