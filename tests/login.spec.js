import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://beta.aristeem.com/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('v.romanenko@aristeem.com');
  await page.getByRole('textbox', { name: 'Enter your email' }).press('Enter');
  await page.getByRole('button', { name: 'Continue with email' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Aristeem123');
  await page.getByRole('img').nth(1).click();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
});