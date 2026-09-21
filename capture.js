import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to page...');
  try {
    await page.goto('http://127.0.0.1:5173', { waitUntil: 'load', timeout: 60000 });
  } catch (err) {
    console.error('Failed to load on 5173. Error:', err.message);
  }
  
  console.log('Taking top screenshot...');
  await new Promise(r => setTimeout(r, 3000)); // wait for initial 3D load and animations
  await page.screenshot({ path: 'screenshot_top.png' });
  
  console.log('Scrolling...');
  await page.evaluate(() => window.scrollBy(0, 1080));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'screenshot_mid1.png' });
  
  await page.evaluate(() => window.scrollBy(0, 1080));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'screenshot_mid2.png' });

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'screenshot_bottom.png' });

  await browser.close();
  console.log('Done capturing screenshots.');
})();
