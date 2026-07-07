const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf-8');

const search = `(location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))`;
const replace = `(location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path + '/')))`;

content = content.replace(search, replace);
content = content.replace(search, replace);
content = content.replace(search, replace);
content = content.replace(search, replace);
fs.writeFileSync('src/components/layout/Navbar.tsx', content);
