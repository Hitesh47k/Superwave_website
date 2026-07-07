const fs = require('fs');
let content = fs.readFileSync('src/components/ui/CustomCursor.tsx', 'utf-8');

if (!content.includes('import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from')) {
    content = content.replace(
      "import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';",
      "import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';"
    );
    fs.writeFileSync('src/components/ui/CustomCursor.tsx', content);
}
