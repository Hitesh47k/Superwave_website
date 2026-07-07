const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf-8');
content = content.replace("import { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';");
fs.writeFileSync('src/components/layout/Navbar.tsx', content);
