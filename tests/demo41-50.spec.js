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
      
    await page.goto(url);

    await page.getByRole('textbox', { name: 'Enter your email' }).click();
    await page.getByRole('textbox', { name: 'Enter your email' }).fill('romanenko.vit1899@gmail.com');
    await page.getByRole('button', { name: 'Continue with email' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('Aristeem123');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    });
  });
});
 
test('check app 41', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/41');

  //check text data
  const appName = "Microsoft Power BI";
  const appDescription = "Business analytics and data visualization platform.";
  const appInfo = "Microsoft Power BI is a suite of business analytics tools that deliver insights throughout an organization. It enables users to connect to various data sources, create interactive dashboards, and generate detailed reports. Power BI facilitates data-driven decision-making by providing real-time data analysis and visualization capabilities, making it an essential tool for business intelligence.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo); 
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Microsoft"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Microsoft"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Data Analytics");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});


test('check app 42', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/42');

  //check text data
  const appName = "Tableau Desktop";
  const appDescription = "Data visualization and business intelligence software.";
  const appInfo = "Tableau Desktop is a powerful data visualization tool that helps users transform data into actionable insights. It allows for the creation of interactive and shareable dashboards, connecting to multiple data sources. Tableau enables users to perform complex analytical tasks with ease, making it a valuable tool for data analysts, business intelligence professionals, and decision-makers.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Tableau Software"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Tableau Software"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Data Analytics");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});

test('check app 43', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/43');

  //check text data
  const appName = "MATLAB";
  const appDescription = "Numerical computing and programming environment.";
  const appInfo = "MATLAB is a high-level programming language and interactive environment used for numerical computation, visualization, and programming. Developed by MathWorks, it provides tools for algorithm development, data analysis, signal processing, and modeling. MATLAB is widely used in academia and industry for research, development, and teaching in engineering, science, and mathematics.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("MathWorks"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("MathWorks"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Data Analytics");
  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});

test('check app 44', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/44');

  //check text data
  const appName = "Rhinoceros 3D";
  const appDescription = "3D modeling software for design and architecture.";
  const appInfo = "Rhinoceros 3D, commonly known as Rhino, is a 3D modeling software used for industrial design, architecture, and product design. It offers tools for creating complex 3D models with precision and flexibility. Rhino supports NURBS mathematical modeling, making it suitable for designing smooth and detailed surfaces. With a wide range of plugins and compatibility with other software, Rhino is a versatile tool for designers.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Robert McNeel & Associates"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Robert McNeel & Associates"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});

test('check app 45', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/45');

  //check text data
  const appName = "SketchUp";
  const appDescription = "3D modeling software for architecture and design.";
  const appInfo = "SketchUp is an intuitive 3D modeling software used for architectural, interior design, civil, mechanical, and video game design applications. Known for its user-friendly interface, SketchUp allows users to create detailed 3D models quickly. It offers features like rendering, animation, and plugins for extended functionality. SketchUp is available in both free and paid versions, catering to beginners and professionals alike.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Trimble Inc."); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Trimble Inc."); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 46', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/46');

  //check text data
  const appName = "Twinmotion";
  const appDescription = "Real-time visualization and immersive VR software.";
  const appInfo = "Twinmotion is a real-time visualization software that enables architects, urban planners, and designers to create high-quality images, panoramas, and standard or 360° VR videos from BIM or CAD models. Powered by Unreal Engine, Twinmotion provides an intuitive interface for creating immersive visualizations with dynamic lighting, materials, and environmental effects, enhancing the presentation of architectural projects.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Epic Games"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Epic Games"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Architecture & Engineering");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 47', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/47');

  //check text data
  const appName = "Adobe Dreamweaver";
  const appDescription = "Web development and design software.";
  const appInfo = "Adobe Dreamweaver 2021 is a comprehensive tool for designing, coding, and managing websites and web applications. It supports both visual design and code editing, accommodating users with different skill levels. The 2021 version offers improved support for modern web technologies like HTML5, CSS3, and JavaScript frameworks. It also integrates with Git for version control and offers real-time previews across multiple devices. Dreamweaver simplifies web development with its intuitive interface and powerful features.";
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
  await checkImg2(page);
});

test('check app 48', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/48');

  //check text data
  const appName = "FL Studio";
  const appDescription = "Digital audio workstation for music production";
  const appInfo = "FL Studio is a complete software music production environment or Digital Audio Workstation (DAW). It features a graphical user interface with a pattern-based music sequencer. The software allows for multi-track audio recording, sequencing, and mixing for the creation of professional quality music. It includes numerous effects and instruments for sound design. FL Studio is used by professionals and hobbyists alike for composing, recording, and mixing music.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Image-Line Software"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Image-Line Software"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Audio & Music");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 49', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/49');

  //check text data
  const appName = "Topaz Video AI";
  const appDescription = "AI-powered video enhancement software";
  const appInfo = "Topaz Video AI utilizes artificial intelligence to enhance and upscale video footage. It offers features like upscaling, denoising, deinterlacing, and motion interpolation. The software is designed to improve video quality by adding detail and reducing artifacts. It's suitable for filmmakers, videographers, and enthusiasts looking to improve old or low-resolution videos. Topaz Video AI provides an intuitive interface for ease of use.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Topaz Labs"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Topaz Labs"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 50', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/50');

  //check text data
  const appName = "Houdini Apprentice";
  const appDescription = "Free version of Houdini for non-commercial use";
  const appInfo = "Houdini Apprentice is a free version of Houdini FX, designed for learning and creating non-commercial projects. It offers the same procedural tools for modeling, animation, and VFX as the full version. Users can explore Houdini's node-based workflow and create complex simulations like fire, smoke, and fluids. While it includes most features, renderings are limited to a lower resolution and include a watermark. It's ideal for students and hobbyists wanting to learn Houdini.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("SideFX"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("SideFX"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});


