const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Header.tsx', 'utf-8');

const search = `location.pathname === '/ai' ?`;
const replace = `(location.pathname === '/ai' || location.pathname.startsWith('/ai/')) ?`;

content = content.replace(search, replace);
fs.writeFileSync('src/components/layout/Header.tsx', content);
