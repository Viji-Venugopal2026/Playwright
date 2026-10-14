
import{test, expect} from '@playwright/test'

test('Login ',async({page})=>{

    await page.goto('https://rishiherbalindia.linker.store/')
    await page.locator('//*[@id="top-links"]/ul/li[1]/a/span').click()
    await page.locator('//*[@id="top-links"]/ul/li[1]/ul/li[5]/a').click()
    await page.waitForTimeout(3000)
    await page.locator('//*[@id="cont-login-with-email"]/form/div[1]/input').fill('Abc123')
    await page.waitForTimeout(3000)  
})