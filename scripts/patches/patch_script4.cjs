const fs = require('fs');
/**
 * patch_script4.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/data/searchIndex.ts'), 'utf8');

const newContent = `
  // Products
  { id: 'scail-atms', title: 'SCAIL ATMS Platform', description: 'Advanced Traffic Management System (ATMS)', path: '/products', category: 'Products' },
  { id: 'scail-mlff', title: 'MLFF Vision Node', description: 'Edge-computing node for Multi-Lane Free Flow (MLFF) tolling.', path: '/products', category: 'Products' },
  { id: 'scail-auth', title: 'SCAIL Identity Gateway', description: 'Unified identity and access management solution', path: '/products', category: 'Products' },
  { id: 'scail-edge', title: 'SCAIL Edge Server', description: 'Ruggedized edge computing servers designed for harsh environments', path: '/products', category: 'Products' },
  { id: 'cam-anpr', title: 'ANPR Cameras', description: 'High-speed Automatic Number Plate Recognition cameras', path: '/products', category: 'Products' },
  { id: 'read-rfid', title: 'RFID Readers', description: 'Robust RFID readers for reliable asset tracking', path: '/products', category: 'Products' },
];`;

code = code.replace(/\];$/, newContent);
fs.writeFileSync(path.join(ROOT, 'src/data/searchIndex.ts'), code);
