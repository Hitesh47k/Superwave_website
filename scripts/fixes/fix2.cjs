const fs = require('fs');
let content = fs.readFileSync('src/pages/Products.tsx', 'utf-8');
const search = `    color: 'from-blue-600 to-indigo-600'
  },`;
const replace = `    color: 'from-blue-600 to-indigo-600'
  }
];`;
content = content.replace(search, replace);
fs.writeFileSync('src/pages/Products.tsx', content);
