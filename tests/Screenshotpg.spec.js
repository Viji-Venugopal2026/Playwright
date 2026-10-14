import{test, expect} from '@playwright/test'

test('Screen shot', async({page})=>
{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    // await page.screenshot({path:".//Screenshot//pageimg.png",fullPage:true})
})

test.only('Element screen shot', async({page})=>
{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(5000)
    const srchBox=await page.locator('#twotabsearchtextboxsfgg')
    // await srchBox.screenshot({path:".//Screenshot//srchimg.png"})
})
