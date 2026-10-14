import {test, expect} from '@playwright/test'

test('Drag and Drop',async({page})=>{

    await page.goto('https://testautomationcentral.com/demo/drag_and_drop.html')
    const drgBtn=await page.locator('#draggable')
    const drpBtn=await page.locator('#droppable')
    await drgBtn.dragTo(drpBtn)
    await expect(page.locator('#drop-message')).toHaveText('Dropped successfully!')   
})

