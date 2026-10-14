import{test, expect} from '@playwright/test'

test('Dropdown Handling', async({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
   
    const dayDrop=await page.locator("select[class='day']")
    await dayDrop.selectOption("02")
    await page.waitForTimeout(3000)


    const monthDrop=await page.locator("select[class='middle month']")
    await monthDrop.selectOption({label:'MAR'})
    await page.waitForTimeout(3000)

    const yearDrop=await page.locator("select[class='year']")
    await yearDrop.selectOption({index:4})
    await page.waitForTimeout(3000)
})
