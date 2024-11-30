
const { test, expect } = require('@playwright/test');
const { checkImg2 } = require('./checkImg2'); 
const { checkImg3 } = require('./checkImg3'); 
const { checkImg4 } = require('./checkImg4'); 
const { checkImg5 } = require('./checkImg5'); 
const { checkLicense } = require('./license'); 
const exp = require('constants');

const urls = [
  'https://demo.aristeem.com/library',
];

test.describe('check name', () => {
  urls.forEach((url) => {
    test(`login to demo: ${url}`, async ({ page }) => {
      
    // test.setTimeout(60000);  
    await page.goto(url);

    await page.getByRole('textbox', { name: 'Enter your email' }).click();
    await page.getByRole('textbox', { name: 'Enter your email' }).fill('romanenko.vit1899@gmail.com');
    await page.getByRole('button', { name: 'Continue with email' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('Aristeem123');
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    });
  });
});
 
test('check app 1', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/1');

  //check text data
  const appName = 'Adobe After Effects 2024'
  const appDescription = "Visual effects and motion graphics software.";
  const appInfo = "Adobe After Effects 2024 is the industry-standard software for creating motion graphics and visual effects for film, TV, video, and the web. It allows users to animate, composite, and create cinematic effects. The 2024 version includes new features like improved 3D workflows, performance enhancements, and new tools for visual effects. It integrates seamlessly with Adobe Premiere Pro and other Creative Cloud apps.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 

 //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg4(page);
});

test('check app 2', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/2');

  //check text data
  const appName = 'Adobe Photoshop 2024';
  const appDescription = "Photo editing and graphic design software.";
  const appInfo = "Adobe Photoshop 2024 continues to be the industry standard for photo editing and graphic design. From basic edits like cropping and color adjustments to complex manipulations, Photoshop offers tools for all levels of creativity. Beyond photo editing, Photoshop is also widely used for creating illustrations, digital artwork, and even web design. Its integration with Adobe Creative Cloud ensures smooth workflows between applications like Lightroom, Illustrator, and Premiere Pro.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Graphics");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

 //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg4(page);
});

test('check app 3', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/3');

  //check text data
  const appName = 'Blender 4.2';
  const appDescription = "Open-source 3D creation suite for modeling, animation, and rendering.";
  const appInfo = "Blender 4.2 is a free and open-source 3D creation suite supporting the entire 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing, and motion tracking. The 4.2 version brings new features like improved rendering with Cycles, advanced sculpting tools, and better performance. It's used by professionals and hobbyists for creating films, visual effects, art, and interactive 3D applications.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Blender Foundation"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Blender Foundation"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg4(page);
  });

test('check app 4', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/4');

  //check text data
  const appName = 'Maxon Cinema 4D 2025';
  const appDescription = "Professional 3D modeling, animation, and rendering software.";
  const appInfo = "Maxon Cinema 4D is a professional 3D modeling, animation, and rendering software known for its user-friendly interface and powerful features. It offers tools for 3D modeling, texturing, lighting, and rendering, making it suitable for a wide range of applications including motion graphics, visual effects, and game development. Cinema 4D is praised for its stability and integration with other software like Adobe After Effects. With a robust set of tools and regular updates, it is a popular choice among professionals in the 3D industry.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Maxon"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Maxon"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

 //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg4(page);
});

test('check app 5', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/5');

  //check text data
  const appName = 'AutoCAD 2025';
  const appDescription = "Professional CAD software for 2D and 3D design and drafting.";
  const appInfo = "AutoCAD 2025 is a leading computer-aided design (CAD) software used by architects, engineers, and construction professionals to create precise 2D and 3D drawings. The 2025 version offers enhanced performance, new automation features, and improved collaboration tools. It supports various specialized toolsets and allows for customization through APIs.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Autodesk"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Autodesk"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Architecture & Engineering");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

 //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 6', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/6');

  //check text data
  const appName = 'DaVinci Resolve';
  const appDescription = "Professional video editing, color correction, and audio post-production software.";
  const appInfo = "DaVinci Resolve combines professional 8K editing, color correction, visual effects, and audio post-production in one software tool. It offers a non-linear editing system, advanced color grading, and Fairlight audio editing tools. It is widely used in film and television production for its powerful color correction capabilities.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Blackmagic Design"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Blackmagic Design"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

 //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 7', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/7');

  //check text data
  const appName = 'Autodesk 3ds Max 2025';
  const appDescription = "3D modeling, animation, and rendering software.";
  const appInfo = "Autodesk 3ds Max 2025 is a professional 3D modeling, animation, and rendering software used in game development, film, and architectural visualization. It provides a rich toolset for creating detailed 3D assets, animations, and photorealistic renderings. With advanced features like particle systems, physics simulations, and customizable scripting, 3ds Max is a go-to solution for artists and designers seeking high-quality 3D content creation.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Autodesk"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Autodesk"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

 //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg2(page);
});

test('check app 8', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/8');

  //check text data
  const appName = 'Adobe Illustrator 2024';
  const appDescription = "Vector graphics and illustration software.";
  const appInfo = "Adobe Illustrator 2024 is a leading software for creating vector graphics, illustrations, and artwork. It allows designers to create scalable graphics for print, web, and mobile applications. The 2024 version introduces new features like enhanced 3D effects, improved performance, and collaboration tools. With its integration into Adobe Creative Cloud, users can easily work across other Adobe applications. Illustrator remains essential for professionals in graphic design, branding, and typography.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Graphics");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

 //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 9', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/9');

  //check text data
  const appName = 'Adobe Premiere Pro 2024';
  const appDescription = "Professional video editing software for film and television.";
  const appInfo = "Adobe Premiere Pro 2024 is a leading video editing application used by professionals to create movies, TV shows, and online videos. It offers advanced editing tools, support for high-resolution video formats, and seamless integration with other Adobe products. The 2024 version includes new features like enhanced color grading, improved performance, and collaborative editing tools. It supports a wide range of video formats and is suitable for both beginners and professionals.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg4(page);
});

test('check app 10', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/10');

  //check text data
  const appName = 'Autodesk Maya 2025';
  const appDescription = "Professional 3D animation, modeling, simulation, and rendering software.";
  const appInfo = "Autodesk Maya 2025 is a powerful tool for creating expansive worlds, complex characters, and dazzling effects. Used in film, television, and game development, Maya offers tools for 3D modeling, animation, visual effects, and rendering. The 2025 version provides enhanced performance, new animation tools, and better integration with other Autodesk products.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Autodesk"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Autodesk"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});

