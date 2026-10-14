import{test,expect}from '@playwright/test'
import { KPlogin } from '../../PageFolder/KPlogin.spec'


test('Kplogin Test',async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/')
    const login=new KPlogin(page)
    await login.setValues('abc@gmail.com','abc123')
    await login.loginClick();
    await page.waitForTimeout(2000)
})