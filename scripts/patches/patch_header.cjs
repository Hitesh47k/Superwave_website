const fs = require('fs');
/**
 * patch_header.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

code = code.replace(/import AuthModal from '\.\.\/auth\/AuthModal';\n/, '');

const loginFunctionsRegex = /\s*\/\/ Local state to manage isAuthModalOpen[\s\S]*?const openRegister = \(e: React\.MouseEvent\) => \{[\s\S]*?setIsAuthModalOpen\(true\);\s*\};\n/;
code = code.replace(loginFunctionsRegex, '\n');

const desktopButtonsRegex = /\s*<div className="flex items-center gap-2 lg:gap-4 lg:border-l lg:border-slate-300 lg:dark:border-white\/10 lg:pl-6 shrink-0">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/header>/;
code = code.replace(desktopButtonsRegex, '\n            </div>\n          </div>\n        </div>\n      </header>');

const mobileIconRegex = /\s*\{\/\* Mobile Login Icon[^\n]*\n\s*<div className="md:hidden flex items-center ml-2">[\s\S]*?<\/div>/;
code = code.replace(mobileIconRegex, '');

const authModalTagRegex = /\s*<AuthModal[\s\S]*?\/>\n/;
code = code.replace(authModalTagRegex, '\n');

const loginIconImport = /LogIn,\s*UserPlus,\s*/;
code = code.replace(loginIconImport, '');

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
