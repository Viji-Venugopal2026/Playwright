import {test, expect} from '@playwright/test'

test('KP Login',async({page})=>{

    await page.goto('https://keralaproperty.in/member/login/')
    await page.locator('#ulogin').type("abc@gmail.com")
    await page.locator('//*[@id="upass"]').fill('Abc123')
    await page.getByRole('button',{name:'Login'}).click()
})
