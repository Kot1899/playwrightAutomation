// checkImg4.js
const { expect } = require('@playwright/test');

async function checkImg4(page) {
    await expect(await page.locator('[alt="image_0"]')).toBeVisible();
    await expect(await page.locator('[alt="image_1"]')).toBeVisible();
    await expect(await page.locator('[alt="image_2"]')).toBeVisible();
    await expect(await page.locator('[alt="image_3"]')).toBeVisible();
  }
 module.exports = { checkImg4 };
