const fs = require('fs');
/**
 * fix_header_tags.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), 'utf8');

const regex = /              <\/div>\n            <\/div>\n            <\/div>\n          <\/div>\n        <\/div>\n      <\/header>/;

code = code.replace(regex, '              </div>\n            </div>\n          </div>\n        </div>\n      </header>');

fs.writeFileSync(path.join(ROOT, 'src/components/layout/Header.tsx'), code);
