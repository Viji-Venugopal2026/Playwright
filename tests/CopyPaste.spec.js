import{test,expect} from '@playwright/test'

test('Copy Paste', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    const fulName=await page.getByPlaceholder('Enter your full name')
    await fulName.click()
    await fulName.fill('Viji Venugopal')
    await page.waitForTimeout(3000)

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(3000)

    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(3000)

    //keyboard.press
    //keyboard.down
    //keyboard.up
    //ArrowLeft
})

test.only('Partial Copy Paste', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    const fulName=await page.getByPlaceholder('Enter your full name')
    await fulName.fill('Viji Venugopal')
    await fulName.click()
    await page.waitForTimeout(3000)

    //await page.keyboard.down('Shift')
    for(let i=1;i<=9;i++)
    {
        await page.keyboard.press('Shift+ArrowLeft')
    }
    //await page.keyboard.up('Shift')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Backspace')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(3000)
})
//toHaveUrl -->   /.*samsung*./