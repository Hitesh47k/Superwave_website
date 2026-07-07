const fs = require('fs');
/**
 * fix_navbar.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), 'utf8');

// Fix desktop onMouseEnter / onMouseLeave
code = code.replace(
  /onMouseEnter=\{\(\) => link\.dropdown \? setActiveDropdown\(link\.name\) : undefined\}/g,
  'onMouseEnter={link.dropdown ? () => setActiveDropdown(link.name) : undefined}'
);
code = code.replace(
  /onMouseLeave=\{\(\) => link\.dropdown \? setActiveDropdown\(null\) : undefined\}/g,
  'onMouseLeave={link.dropdown ? () => setActiveDropdown(null) : undefined}'
);

// Simplify desktop Link onClick
code = code.replace(
  /onClick=\{\(\) => \{ if \(location\.pathname === link\.path && !link\.path\.includes\('#'\)\) window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\); setActiveDropdown\(null\); \}\}/g,
  'onClick={() => { if (link.dropdown) setActiveDropdown(null); }}'
);

// Simplify dropdown Link onClick
code = code.replace(
  /onClick=\{\(e\) => \{ setActiveDropdown\(null\); if \(location\.pathname === item\.path && !item\.path\.includes\('#'\)\) window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\); \}\}/g,
  'onClick={() => setActiveDropdown(null)}'
);

// Simplify mobile Link onClick
code = code.replace(
  /onClick=\{\(e\) => \{ setMobileMenuOpen\(false\); if \(location\.pathname === link\.path && !link\.path\.includes\('#'\)\) window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\); \}\}/g,
  'onClick={() => setMobileMenuOpen(false)}'
);

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), code);
