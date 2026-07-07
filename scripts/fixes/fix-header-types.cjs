const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Header.tsx', 'utf-8');
content = content.replace("const handleSCAILAIClick = (e) => {", "const handleSCAILAIClick = (e: React.MouseEvent) => {");
fs.writeFileSync('src/components/layout/Header.tsx', content);
