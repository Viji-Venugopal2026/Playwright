import {test, expect} from '@playwright/test'

test('Drag and Drop',async({page})=>{

    await page.goto('https://demo.guru99.com/test/drag_drop.html')
    const drgBtn=await page.locator('/html/body/section/div/div/main/div/div/div/div/div/div/div[1]/div/ul/li[2]/a')
    const drpBtn=await page.locator('//*[@id="amt7"]/li')
    await drgBtn.dragTo(drpBtn)
    
})