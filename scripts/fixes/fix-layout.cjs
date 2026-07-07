const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Layout.tsx', 'utf-8');

if (!content.includes('import CustomCursor from')) {
    content = content.replace("import BackToTop from '../ui/BackToTop';", "import BackToTop from '../ui/BackToTop';\nimport CustomCursor from '../ui/CustomCursor';");
    content = content.replace("<BackToTop />", "<CustomCursor />\n      <BackToTop />");
    fs.writeFileSync('src/components/layout/Layout.tsx', content);
}
