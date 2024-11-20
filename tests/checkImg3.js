// checkImg3.js
const { expect } = require('@playwright/test');

async function checkImg3(page) {
     await expect(await page.locator('[alt="image_0"]')).toBeVisible();
     await expect(await page.locator('[alt="image_1"]')).toBeVisible();
     await expect(await page.locator('[alt="image_2"]')).toBeVisible();
}
 module.exports = { checkImg3 };

