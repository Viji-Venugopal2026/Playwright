import{test, expect} from '@playwright/test'

test.beforeEach(async({page})=>
{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
})

test('Rediff title', async({page})=>
{   
    await expect(page).toHaveTitle("Rediff")
})

test('Button disabled', async({page})=>
{
    await expect(page.locator('#Register')).toBeDisabled()
})

test.only('fullName',async({page})=>
{
    await page.getByPlaceholder('Enter your full name').fill('Viji Venugopal')
    await page.waitForTimeout(4000)
})
