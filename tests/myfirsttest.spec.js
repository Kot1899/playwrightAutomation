const { test, expect } = require('@playwright/test');

const urls = [

'https://preview.pcappstore.com/?p=lp31_farss_dl_last_roblox_rep_l3&guid=__test__',
'https://preview.pcappstore.com/?p=lp31_farss_dl_last_roblox_rep_l4&guid=__test__'
];

test.describe('Перевірка логотипів на кількох сторінках', () => {
  urls.forEach((url) => {
    test(`перевірка логотипів на сторінці ${url}`, async ({ page }) => {
       // Збільшуємо таймаут для кожного тесту
       test.setTimeout(60000);  // Таймаут 60 секунд (60000 мс)

      // Відкриваємо кожну URL
      await page.goto(url);

      const headerLogo = page.locator('header img[src*="logo-light.svg"], header img[src*="logo-dark.svg"]');
      await headerLogo.waitFor({ timeout: 20000 });  // чекаємо до 20 секунд, поки елемент з'явиться
      const headerLogoSrc = await headerLogo.getAttribute('src');
      expect(headerLogoSrc).toMatch(/logo-light.svg|logo-dark.svg/);  // перевіряємо, що src містить один з двох варіантів
      
      // Логіка перевірки для footer
      const footerLogo = page.locator('footer img[src*="logo-light.svg"], footer img[src*="logo-dark.svg"]');
      await footerLogo.waitFor({ timeout: 20000 });  // чекаємо до 20 секунд
      const footerLogoSrc = await footerLogo.getAttribute('src');
      expect(footerLogoSrc).toMatch(/logo-light.svg|logo-dark.svg/);  // перевіряємо, що src містить один з двох варіантів
      });
  });
});