const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000/careers');
  await new Promise(r => setTimeout(r, 2000));
  
  const html = await page.content();
  console.log("HTML length at end:", html.length);
  if (html.includes('Position Filled')) {
      console.log('Position Filled found!');
  }
  if (html.includes('Applications Closed')) {
      console.log('Applications Closed found!');
  }
  
  await browser.close();
})();
