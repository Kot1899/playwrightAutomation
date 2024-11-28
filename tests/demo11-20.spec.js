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
 
test('check app 11', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/11');

  //check text data
  const appName = 'Adobe InDesign 2024';
  const appDescription = "Professional desktop publishing software for print and digital media.";
  const appInfo = "Adobe InDesign 2024 is a leading desktop publishing program used to create flyers, brochures, magazines, newspapers, and books. Its features include advanced typography, page layout tools, and seamless integration with other Adobe Creative Cloud apps. Users can design and publish eBooks, digital magazines, and interactive online documents. The 2024 version brings enhanced collaboration features, performance improvements, and new creative tools. It is widely used by graphic designers, publishers, and marketing professionals.";
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


test('check app 12', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/12');

  //check text data
  const appName = 'Adobe Animate 2024';
  const appDescription = "Software for creating interactive animations and multimedia content.";
  const appInfo = "Adobe Animate 2024 is a powerful tool for designing interactive vector animations for games, apps, and the web. It supports animation for cartoons, banner ads, and doodles, allowing artists to publish content to multiple platforms. The 2024 version offers improved animation workflows, new effects, and better performance. It integrates with other Adobe products and supports HTML5 Canvas, WebGL, and Flash/Adobe AIR formats."
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

test('check app 13', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/13');

  //check text data
  const appName = 'Adobe Audition 2024';
  const appDescription = "Professional audio workstation for recording and editing sound.";
  const appInfo = "Adobe Audition 2024 is a comprehensive audio editing software designed for audio post-production, mixing, and mastering. It offers multitrack, waveform, and spectral display for creating, mixing, editing, and restoring audio content. The 2024 version includes enhanced audio restoration tools, improved performance, and tighter integration with Adobe Premiere Pro. It is widely used by audio engineers, video editors, and podcasters.";
  await expect(await page.locator("(//div[@class='text-color-main-text-300 text-[32px] leading-[42px] font-semibold whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appName, ( appName, { timeout: 7000 }));     
  await expect(await page.locator("(//div[@class='text-color-main-100 text-sm whitespace-normal text-center sm:text-left line-clamp-4'])[1]")).toContainText(appDescription); 
  await expect(await page.locator("(//div[@id='similarPrograms'])[1]")).toContainText(appInfo);
  await expect(await page.locator("(//div[@id='licenseType'])[1]")).toContainText("paid"); 
  await expect(await page.locator("(//div[@id='publisher'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='developer'])[1]")).toContainText("Adobe"); 
  await expect(await page.locator("(//div[@id='category'])[1]")).toContainText("Audio & Music");

  //check logo by altText
  const icon = await page.getByAltText(appName,' icon');
  await expect(icon).toBeVisible();

  //license type
  await checkLicense(page); 
  
  //check images by altText
   await checkImg4(page);
});

test('check app 14', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/14');

  //check text data
  const appName = 'Adobe InCopy 2024';
  const appDescription = "Professional writing and editing tool for editors and copywriters.";
  const appInfo = "Adobe InCopy 2024 is a professional writing and editing software that integrates tightly with Adobe InDesign. It allows editors and writers to style text, track changes, and make layout modifications to documents shared with designers. The 2024 version enhances collaboration features, improves performance, and offers new formatting tools. It streamlines the editorial process for publishing teams.";
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

test('check app 15', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/15');

  //check text data
  const appName = 'Adobe Lightroom Classic';
  const appDescription = 'Desktop-focused photo editing and organization software.';
  const appInfo = 'Adobe Lightroom Classic is a powerful photo editing and management tool designed for desktop workflows. It offers robust photo editing features, including color correction, exposure adjustments, and batch processing. Photographers can organize their images with catalogs, keywords, and metadata. It integrates seamlessly with Adobe Photoshop and supports RAW file processing.';
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

test('check app 16', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/16');

  //check text data
  const appName = 'Adobe Lightroom CC';
  const appDescription = 'Cloud-based photo service for editing and sharing images.';
  const appInfo = 'Adobe Lightroom CC is a cloud-centric photo service for editing, organizing, storing, and sharing photos across devices. It offers powerful yet simple editing tools and allows users to access their entire photo library from mobile, desktop, and web. Edits and metadata are synced automatically across devices. It is ideal for photographers who need flexibility and accessibility.';
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

test('check app 17', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/17');

  //check text data
  const appName = 'Adobe Media Encoder 2024';
  const appDescription = 'Media processing application for encoding audio and video files.';
  const appInfo = 'Adobe Media Encoder 2024 provides media export facilities for Adobe Premiere Pro, After Effects, and other Adobe applications. It allows users to process multiple video and audio clips in batch mode, converting them to various formats. The 2024 version offers improved encoding performance, new format support, and integration with the latest Adobe video tools.';
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
  await checkImg3(page);
});

test('check app 18', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/18');

  //check text data
  const appName = 'Adobe Premiere Rush 2.0';
  const appDescription = 'All-in-one video editing app for creating and sharing online videos.';
  const appInfo = "Adobe Premiere Rush 2.0 is a simplified video editing application designed for content creators who need to edit and share videos quickly. It offers intuitive editing tools, built-in motion graphics templates, and easy sharing to social media platforms. The 2.0 version provides enhanced features like multi-track editing, color correction, and audio mixing. It's available on desktop and mobile devices, enabling editing on the go.";
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

test('check app 19', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/19');

  //check text data
  const appName = 'Maxon Cinema 4D 2024';
  const appDescription = 'Professional 3D modeling, animation, and rendering software.';
  const appInfo = "Maxon Cinema 4D 2024 is a powerful 3D software suite offering tools for modeling, animation, simulation, and rendering. It's known for its ease of use, stability, and professional capabilities. The 2024 version introduces new features like advanced simulation tools, improved modeling workflows, and enhanced rendering capabilities. It is widely used in film, television, advertising, and visualization.";
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

test('check app 20', async ({ page }) => {
  await page.goto('https://demo.aristeem.com/programs/20');

  //check text data
  const appName = 'Inventor 2025';
  const appDescription = 'Professional-grade 3D mechanical design and engineering software.';
  const appInfo = 'Autodesk Inventor 2025 provides engineers and designers with comprehensive tools for 3D mechanical design, simulation, visualization, and documentation. The 2025 version introduces enhanced simulation capabilities, improved performance, and better collaboration features. It enables the creation of accurate digital prototypes, reducing the need for physical prototypes.';
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
