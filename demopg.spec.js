import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://keralaproperty.in/member/login/');
  await page.locator('#ulogin').click();
  await page.locator('#ulogin').fill('hdhjghkjdhj');
  await page.locator('#upass').click();
  await page.locator('#upass').fill('hfjfkjkjg');
  await page.getByRole('button', { name: 'Login' }).click();
});