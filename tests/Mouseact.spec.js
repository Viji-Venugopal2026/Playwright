import{test, expect} from '@playwright/test'

test.beforeEach(async({page})=>
{
     await page.goto('https://demoqa.com/buttons')
})

test('Double Click', async({page})=>{
    const dblButton=await page.getByRole('button',{name: 'Double Click Me'})
    await dblButton.dblclick()
    await page.waitForTimeout(3000)
    await expect(page.locator('//*[@id="doubleClickMessage"]')).toHaveText('You have done a double click')  
})

test.only('Right Click', async({page})=>{
    const rghtButton=await page.getByRole('button',{name: 'Right Click Me'})
    await rghtButton.click({button:'right'})
    await page.waitForTimeout(3000)
    await expect(page.locator('//*[@id="rightClickMessage"]')).toHaveText('You have done a right click')  
})
