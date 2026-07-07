const fs = require('fs');
let content = fs.readFileSync('src/components/ui/CustomCursor.tsx', 'utf-8');

const search = `      // Hover states
      const isInteractive = target.closest('a, button, input, select, textarea, .card-hover, [role="button"]');
      const isViewable = target.closest('img, .gallery-item, .card-hover');

      if (isInteractive || isViewable) {
        setIsHovering(true);
        if (isViewable && !target.closest('button, a:not(.gallery-item)')) {
          setHoverText("View");
        } else {
          setHoverText("");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }`;

const replace = `      // Hover states
      const isLink = target.closest('a');
      const isButton = target.closest('button, [role="button"], .btn-premium');
      const isInput = target.closest('input, select, textarea');
      const isCard = target.closest('.card-hover, .glass-card, [class*="card"]');
      const isImage = target.closest('img');
      const isGallery = target.closest('.gallery-item'); // Assuming we add this class or it targets specific wrappers

      if (isLink || isButton || isInput || isCard || isImage || isGallery) {
        setIsHovering(true);
        if ((isImage || isGallery) && !isButton) {
          setHoverText("View");
        } else if (isCard && !isButton && !isLink) {
          setHoverText("Open");
        } else {
          setHoverText("");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }`;

content = content.replace(search, replace);
fs.writeFileSync('src/components/ui/CustomCursor.tsx', content);
