import {test, expect} from '@playwright/test'

test('KP Login',async({page})=>{

    await page.goto(process.env.BaseURL)
    await page.waitForTimeout(2000)
    await page.locator('#ulogin').fill(process.env.KP_USERNAME)
    await page.locator('//*[@id="upass"]').fill(process.env.KP_PASSWORD)
    await page.getByRole('button',{name:'Login'}).click()
})