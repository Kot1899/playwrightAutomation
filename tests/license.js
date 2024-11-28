
const { expect } = require('@playwright/test');

 async function checkLicense(page) {
   const licenseType = await page.locator("(//div[@id='licenseType'])[1]").textContent();

   if (licenseType && licenseType.includes("paid")) {
      await expect(page.locator("(//div[@class='flex mt-4 gap-x-3 items-center justify-center sm:justify-start'])[1]")).toContainText("required ");
      } 
      else {
      const freeLicense = 'License typefree';      
      const licenseName =  await page.locator("(//div[@id='licenseType'])[1]").textContent();
      if(licenseName!==freeLicense){
        console.log('app has type - "' + licenseName.slice(12) + '"');
      }
   }
 }
 module.exports = { checkLicense };