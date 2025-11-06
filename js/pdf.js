const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const htmlPath = path.resolve('snapshot.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('snapshot.html niet gevonden!');
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Open lokaal bestand met file:// protocol
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Optioneel: wachten tot specifieke selector beschikbaar is
  // const selector = '#main-content';
  // await page.waitForSelector(selector, { timeout: 5000 }).catch(() => console.warn(`${selector} niet gevonden`));

  // PDF genereren
  const pdfPath = path.resolve('snapshot.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true
  });

  console.log(`PDF succesvol gegenereerd: ${pdfPath}`);

  await browser.close();
})();
