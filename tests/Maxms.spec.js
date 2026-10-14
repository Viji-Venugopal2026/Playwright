import{test, expect} from '@playwright/test'

//test.use({viewport:{width:1000,height:500}})
test('Maximize', async({page})=>
{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(5000)
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);  
})
