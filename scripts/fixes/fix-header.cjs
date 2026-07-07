const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Header.tsx', 'utf-8');

if (!content.includes('import { Link, useLocation, useNavigate } from')) {
    content = content.replace("import { Link } from 'react-router-dom';", "import { Link, useLocation } from 'react-router-dom';");
}

content = content.replace("export default function Header() {", `export default function Header() {\n  const location = useLocation();\n\n  const handleSCAILAIClick = (e) => {\n    if (location.pathname === '/ai') {\n      e.preventDefault();\n      window.scrollTo({ top: 0, behavior: 'smooth' });\n    }\n  };\n`);

const searchBtn = `            <Link 
              to="/ai/assistant" 
              className="relative group overflow-hidden rounded-xl p-[1px] shadow-lg hover:shadow-brand-500/25 transition-all duration-300 flex-1 md:flex-none text-center sm:text-left"
            >`;
            
const replaceBtn = `            <Link 
              to="/ai" 
              onClick={handleSCAILAIClick}
              className={\`relative group overflow-hidden rounded-xl p-[1px] shadow-lg hover:shadow-brand-500/25 transition-all duration-300 flex-1 md:flex-none text-center sm:text-left \${location.pathname === '/ai' ? 'ring-2 ring-brand-500 ring-offset-2 dark:ring-offset-slate-950 scale-[1.02]' : ''}\`}
            >`;
            
content = content.replace(searchBtn, replaceBtn);

fs.writeFileSync('src/components/layout/Header.tsx', content);
