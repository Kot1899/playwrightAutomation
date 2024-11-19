const { test, expect } = require('@playwright/test');
const exp = require('constants');

const urls = [
  'https://beta.aristeem.com/library',
];

test.describe('check name', () => {
  urls.forEach((url) => {
    test(`login to beta: ${url}`, async ({ page }) => {
      
    // test.setTimeout(60000);  
    await page.goto(url);

    await page.getByRole('textbox', { name: 'Enter your email' }).click();
    await page.getByRole('textbox', { name: 'Enter your email' }).fill('v.romanenko@aristeem.com');
    await page.getByRole('button', { name: 'Continue with email' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('Aristeem123');
    await page.getByRole('button', { name: 'Login', exact: true }).click();

  });
});
});
 
    test('check app 1', async ({ page }) => {
      await page.goto('https://beta.aristeem.com/programs/1');
      
      await expect(await page.locator("(//div[@class='text-white text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText('Adobe After Effects 2024'); 
      await expect(await page.locator("(//div[@class='text-[#A7A7A7] text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1] ")).toContainText("Visual effects and motion graphics software."); 
      await expect(await page.locator("(//div[@class='text-white text-sm font-medium my-10'])[1]")).toContainText("Adobe After Effects 2024 is the industry-standard software for creating motion graphics and visual effects for film, TV, video, and the web. It allows users to animate, composite, and create cinematic effects. The 2024 version includes new features like improved 3D workflows, performance enhancements, and new tools for visual effects. It integrates seamlessly with Adobe Premiere Pro and other Creative Cloud apps.");
      await expect(await page.locator("(//div[@class='text-white text-base font-semibold capitalize'])[1] ")).toContainText("paid"); 
      await expect(await page.locator("(//div[normalize-space()='Publisher'])[1] ")).toContainText("Publisher "); 
      await expect(await page.locator("(//div[@class='flex flex-col items-center gap-y-1 self-start'])[2] ")).toContainText("Developer "); 
      await expect(await page.locator("(//div[normalize-space()='Category'])[1] ")).toContainText("Category");
      
});