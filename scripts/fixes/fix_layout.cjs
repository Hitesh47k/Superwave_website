const fs = require('fs');
/**
 * fix_layout.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Layout.tsx'), 'utf8');

code = code.replace(/import { Outlet, useLocation } from 'react-router-dom';/, "import { Outlet, useLocation, useOutlet } from 'react-router-dom';");
code = code.replace(/const location = useLocation\(\);/, "const location = useLocation();\n  const currentOutlet = useOutlet();");
code = code.replace(/<Outlet \/>/, "{currentOutlet}");

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Layout.tsx'), code);
