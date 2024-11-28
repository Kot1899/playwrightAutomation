// checkImg5.js
const { expect } = require('@playwright/test');

async function checkImg5(page) {
    await expect(await page.locator('[alt="image_0"]')).toBeVisible();
    await expect(await page.locator('[alt="image_1"]')).toBeVisible();
    await expect(await page.locator('[alt="image_2"]')).toBeVisible();
    await expect(await page.locator('[alt="image_3"]')).toBeVisible();
    await expect(await page.locator('[alt="image_4"]')).toBeVisible();
  }
 module.exports = { checkImg5 };
