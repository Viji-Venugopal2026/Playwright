import{test, expect} from '@playwright/test'

test('Mouse Hover', async({page})=>{
    await page.goto('https://www.ebay.com/')
    const electronics=await page.getByRole('link',{name:'Electronics'})
    await electronics.hover()
    await page.waitForTimeout(3000)
})

//double click - dblclick()
//right click - click({button:'right'})
//tohavetext