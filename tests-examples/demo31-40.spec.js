const { test, expect } = require('@playwright/test');
const { checkImg2 } = require('../tests/checkImg2'); 
const { checkImg3 } = require('../tests/checkImg3'); 
const { checkImg4 } = require('../tests/checkImg4'); 
const { checkImg5 } = require('../tests/checkImg5'); 
const { checkLicense } = require('../tests/license'); 
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
 
test('check app 31', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/31');

  //check text data
  const appName = 'Hitfilm';
  const appDescription = "Professional video editing and visual effects software.";
  const appInfo = "HitFilm Pro is a professional-grade video editing and visual effects software that combines advanced editing tools with a powerful compositing engine. It offers features like 3D compositing, over 800 visual effects and presets, and support for 4K and 360-degree video. HitFilm Pro is designed for filmmakers, video editors, and content creators looking for an all-in-one solution. Its intuitive interface and extensive toolkit allow users to produce high-quality videos and cinematic effects. Regular updates and a supportive community make HitFilm Pro a competitive choice in the video editing industry.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo); 
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("FXhome"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("FXhome"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});


test('check app 32', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/32');

  //check text data
  const appName = 'Bricklink Studio 2.0.';
  const appDescription = "Digital LEGO building and rendering software.";
  const appInfo = "BrickLink Studio 2.0 is a free software that allows users to build, render, and create instructions for virtual LEGO models. Developed by BrickLink, it provides an extensive library of LEGO bricks and elements. Users can design custom models, generate photorealistic renders, and create building instructions. The software integrates with the BrickLink marketplace, enabling users to buy the necessary parts for their creations. With an intuitive interface and powerful tools, BrickLink Studio 2.0 is popular among LEGO enthusiasts and designers.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("BrickLink"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("BrickLink"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});

test('check app 33', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/33');

  //check text data
  const appName = 'Autodesk Fusion 360';
  const appDescription = "Cloud-based 3D CAD, CAM, and CAE platform.";
  const appInfo = "Autodesk Fusion 360 is an integrated cloud-based 3D CAD, CAM, and CAE platform designed for product development. It combines industrial and mechanical design, simulation, collaboration, and machining in a single package. Fusion 360 allows users to design and engineer products to ensure aesthetics, form, fit, and function. It supports collaboration with team members and clients, offering version control and cloud storage. Fusion 360 is suitable for engineers, designers, and manufacturers looking for a comprehensive tool for the entire product development process.";
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
   await checkImg2(page);
});

test('check app 34', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/34');

  //check text data
  const appName = 'Houndini';
  const appDescription = "3D animation and visual effects software.";
  const appInfo = "Houdini is a 3D animation and visual effects software developed by SideFX, known for its node-based procedural workflow. It offers powerful tools for modeling, rigging, animation, particle effects, dynamics, and rendering. Houdini is widely used in the film, television, and gaming industries for creating complex simulations like fire, smoke, fluids, and destruction. Its procedural approach allows artists to create detailed and flexible effects. With integrations for various renderers and support for Python scripting, Houdini is a preferred choice for VFX professionals.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
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

test('check app 35', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/35');

  //check text data
  const appName = 'Quixel Mixer';
  const appDescription = "Free 3D texturing and material creation tool.";
  const appInfo = "Quixel Mixer is a free software for creating and customizing 3D textures and materials. It allows users to mix and blend Megascans, custom textures, and procedural elements to create high-quality materials. With a user-friendly interface, Quixel Mixer enables artists to create complex surfaces with ease. It supports PBR workflows and integrates seamlessly with game engines like Unreal Engine. Quixel Mixer is ideal for game developers, 3D artists, and visual effects professionals looking to create realistic textures for their projects.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Quixel"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Quixel"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 36', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/36');

  //check text data
  const appName = 'Natron';
  const appDescription = "Open-source compositing software for visual effects.";
  const appInfo = "Natron is a free, open-source compositing software for visual effects and motion graphics. It offers robust features similar to commercial software like Nuke and After Effects, including node-based workflow, rotoscoping, keying, and tracking. Natron supports OpenFX plugins, allowing for extended functionality and customization. It's a versatile tool suitable for artists and studios looking for a cost-effective solution for compositing tasks.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Inria"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("The Natron Community"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 37', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/37');

  //check text data
  const appName = 'Vegas Pro';
  const appDescription = "Professional video editing and production software.";
  const appInfo = "VEGAS Pro is a professional video editing software offering a comprehensive set of tools for video production, audio editing, and disc authoring. Known for its intuitive timeline and advanced editing features, VEGAS Pro supports high-resolution video up to 4K and offers extensive audio control. It is suitable for filmmakers, video editors, and content creators seeking a powerful yet user-friendly editing platform.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("MAGIX Software GmbH"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("MAGIX Software GmbH"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg2(page);
});

test('check app 38', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/38');

  //check text data
  const appName = 'Autodesk InfraWorks';
  const appDescription = "Infrastructure design and engineering software.";
  const appInfo = "Autodesk InfraWorks is a BIM software for infrastructure design and civil engineering projects. It allows professionals to plan, design, and analyze infrastructure projects in a real-world context. With InfraWorks, users can create 3D models of roads, bridges, and other infrastructure elements, perform simulations, and collaborate across teams. It enhances decision-making by integrating GIS data, design models, and cloud collaboration.";
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

test('check app 39', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/39');

  //check text data
  const appName = 'Autodesk Navisworks Manage 2025';
  const appDescription = "Project review software for AEC professionals.";
  const appInfo = "Autodesk Navisworks Manage 2025 is a comprehensive project review software designed for architecture, engineering, and construction (AEC) professionals. It enables users to integrate 3D models from various sources, perform clash detection, simulate construction schedules, and collaborate effectively. Navisworks Manage helps identify and resolve potential issues before construction begins, improving project outcomes and reducing costs.";
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
  await checkImg2(page);
});

test('check app 40', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/40');

  //check text data
  const appName = 'Archicad';
  const appDescription = "BIM software for architects and designers.";
  const appInfo = "Archicad is a leading BIM software developed for architects and designers to create detailed architectural designs and documentation. It offers tools for 2D drafting, 3D modeling, visualization, and collaboration. With features like parametric object libraries, integrated rendering, and team collaboration capabilities, Archicad streamlines the design process from conceptualization to construction documentation.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Graphisoft"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Graphisoft"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Architecture & Engineering");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg2(page);
});
