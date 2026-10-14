
import{test, expect} from '@playwright/test'
import testdata from '../Util/datad.json'

test.describe('KP Login',()=>
{

for(const data of testdata){

    test(`KP Login test ${data.email}`,async({page})=>
    {
        await page.goto('https://keralaproperty.in/member/login/')
        await page.locator('#ulogin').fill(data.email)
        await page.locator('#upass').fill(data.password)
        await page.waitForTimeout(3000)
    })
}
})