import { test as setup } from "@playwright/test"; 
const authFile = "playwright/auth/auth.json"; 
setup("authenticate", async ({ page }) => {
 await page.goto("https://keralaproperty.in/member/login/");
 await page.locator('#ulogin').fill("vijivenugopal94@gmail.com");
 await page.locator('#upass').fill("Abc@123");
 await page.getByRole('button', { name: 'Login' }).click();
await page.context().storageState({ path: authFile });
 });
