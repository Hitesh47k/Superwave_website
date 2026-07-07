const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const regex = /function AnimatedCounter\(\{\s*value,\s*suffix = "",\s*isFloat = false\s*\}\s*:\s*\{\s*value:\s*number,\s*suffix\?:\s*string,\s*isFloat\?:\s*boolean\s*\}\) \{[\s\S]*?return \([\s\S]*?<\/span>\s*\);\s*\}/;

content = content.replace(regex, '');
if (!content.includes('import AnimatedCounter from')) {
    content = content.replace(
      "import { Link } from 'react-router-dom';",
      "import { Link } from 'react-router-dom';\nimport AnimatedCounter from '../components/ui/AnimatedCounter';"
    );
}
fs.writeFileSync('src/pages/Home.tsx', content);
