// checkImg2.js
const { expect } = require('@playwright/test');

async function checkImg2(page) {
     await expect(await page.locator('[alt="image_0"]')).toBeVisible();
     await expect(await page.locator('[alt="image_1"]')).toBeVisible();
}
 module.exports = { checkImg2 };

