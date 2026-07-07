const fs = require('fs');
let content = fs.readFileSync('src/components/home/CompanyTimeline.tsx', 'utf-8');

content = content.replace(
  "function TimelineItem({ item, isEven, index }: { item: any, isEven: boolean, index: number })",
  "function TimelineItem({ item, isEven, index }: { key?: string | number, item: any, isEven: boolean, index: number })"
);

fs.writeFileSync('src/components/home/CompanyTimeline.tsx', content);
