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
 
test('check app 21', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/21');

  //check text data
  const appName = 'FreeCAD 0.21';
  const appDescription = "Free, open-source parametric 3D CAD modeler.";
  const appInfo = "FreeCAD 0.21 is a general-purpose 3D CAD software designed for mechanical engineering and product design. It allows users to design real-life objects of any size. The parametric modeling feature makes it easy to modify designs by going back into the model history. Version 0.21 includes new features, bug fixes, and improved performance.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo); 
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("FreeCAD Community"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("FreeCAD Community"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Architecture & Engineering");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});


test('check app 22', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/22');

  //check text data
  const appName = 'Autodesk Revit 2025';
  const appDescription = "BIM software for architects, engineers, and construction professionals.";
  const appInfo = "Autodesk Revit 2025 is a building information modeling (BIM) software for architects, structural engineers, MEP engineers, designers, and contractors. It allows users to design a building and its components in 3D, annotate the model with 2D drafting elements, and access building information from the building model's database. The 2025 version introduces new collaboration tools, enhanced performance, and better interoperability."
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

test('check app 23', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/23');

  //check text data
  const appName = 'Unreal Engine 5.4';
  const appDescription = "Advanced real-time 3D creation tool for games and more.";
  const appInfo = "Unreal Engine 5.4 is a state-of-the-art game engine that provides a suite of tools for game development, architectural visualization, and film production. The 5.4 version brings new features like enhanced rendering, physics simulation, and improved developer tools. It's known for its high-fidelity graphics and is used to create both AAA and indie games.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Epic Games"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Epic Games"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Game Development");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg5(page);
});

test('check app 24', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/24');

  //check text data
  const appName = 'Unity 2022.3.42f1';
  const appDescription = "Cross-platform game engine for creating 2D and 3D games and simulations.";
  const appInfo = "Unity game engine is providing tools for developing games and interactive content across platforms. It supports both 2D and 3D development, offers a robust asset store, and has a strong community. This version includes bug fixes, performance improvements, and new features for developers."
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Unity Technologies"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Unity Technologies"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Game Development");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg3(page);
});

test('check app 25', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/25');

  //check text data
  const appName = 'Gimp';
  const appDescription = "Free and open-source image editing software.";
  const appInfo = "GIMP (GNU Image Manipulation Program) is a free and open-source image editor used for tasks such as photo retouching, image composition, and image authoring. It offers a wide range of tools and plugins, allowing users to enhance photos and create graphics. GIMP supports various file formats and can be extended with custom plugins and scripts. It is a versatile tool suitable for photographers, graphic designers, and illustrators. As a community-driven project, GIMP is continually updated with new features and improvements.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("The GIMP Development Team"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("The GIMP Development Team"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Graphics");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 26', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/26');

  //check text data
  const appName = 'Godot';
  const appDescription = "Free and open-source game development engine.";
  const appInfo = "Godot Engine is a free and open-source game development platform that supports both 2D and 3D game creation. It offers a rich set of tools and features, including a visual editor, scripting with GDScript, and support for multiple platforms like Windows, macOS, Linux, Android, and iOS. Godot is known for its node-based architecture, which simplifies the game development process. The engine is highly customizable and extensible, making it suitable for both beginners and experienced developers. With an active community, Godot is continually evolving to meet the needs of game creators.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Godot Engine Community"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Godot Engine Community"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Game Development");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 27', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/27');

  //check text data
  const appName = 'Kdenlive';
  const appDescription = "Free and open-source video editing software.";
  const appInfo = "Kdenlive (KDE Non-Linear Video Editor) is a free and open-source video editor for Linux, Windows, and macOS. It offers a comprehensive set of features including multi-track editing, a wide range of effects and transitions, and support for various video and audio formats. Kdenlive provides a customizable interface and supports proxy editing for working with high-resolution footage. It is suitable for both beginners and professional video editors looking for a powerful tool without the cost. Regular updates and an active community contribute to its ongoing development and improvement.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("KDE"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("KDE Community"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Video & Motion");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 28', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/28');

  //check text data
  const appName = 'Inkscape';
  const appDescription = "Free and open-source vector graphics editor.";
  const appInfo = "Inkscape is a free and open-source vector graphics editor used for creating and editing scalable vector images. It supports SVG (Scalable Vector Graphics) as its primary format but can import and export various other formats. Inkscape offers tools for drawing, shaping, text, and cloning, allowing users to create complex designs. It is widely used for creating logos, illustrations, and diagrams. With a focus on flexibility and compatibility, Inkscape is suitable for both professional designers and hobbyists. The software is continuously updated by a community of contributors.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Inkscape Project"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Inkscape Project"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Graphics");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 29', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/29');

  //check text data
  const appName = 'DAZ3d';
  const appDescription = "3D figure customization, posing, and animation software.";
  const appInfo = "DAZ Studio is a free 3D software suite for customizing, posing, and animating 3D models. It allows users to create stunning digital art and animations using pre-made models, props, and environments. With an easy-to-use interface, DAZ Studio is suitable for beginners and hobbyists interested in 3D art. The software supports rendering with NVIDIA Iray and includes tools for lighting, texturing, and morphing figures. While the software is free, additional content like models and props are available for purchase from the DAZ 3D marketplace.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("free"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("DAZ 3D"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("DAZ 3D"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});

test('check app 30', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/30');

  //check text data
  const appName = 'Zbrush';
  const appDescription = "Digital sculpting and painting program for 3D modeling.";
  const appInfo = "ZBrush is a professional digital sculpting and painting software used for creating high-resolution 3D models. It offers advanced tools for sculpting, texturing, and painting, allowing artists to create detailed characters, creatures, and environments. ZBrush uses a proprietary 'pixol' technology to store lighting, color, material, and depth information for all objects. Widely used in film, game development, and illustration, ZBrush is known for its ability to handle millions of polygons with ease. The software integrates with other 3D applications, enhancing the workflow of professional artists.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));  
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Pixologic"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Pixologic"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("3D");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
  await checkImg3(page);
});
