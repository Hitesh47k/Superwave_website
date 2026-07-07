const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

if (!content.includes('import CompanyTimeline from')) {
    content = content.replace(
      "import VisionMission from '../components/home/VisionMission';",
      "import VisionMission from '../components/home/VisionMission';\nimport CompanyTimeline from '../components/home/CompanyTimeline';"
    );
    content = content.replace(
      "<VisionMission />",
      "<VisionMission />\n      <CompanyTimeline />"
    );
    fs.writeFileSync('src/pages/Home.tsx', content);
}
