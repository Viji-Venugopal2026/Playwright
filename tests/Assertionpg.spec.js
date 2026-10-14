import{test, expect} from '@playwright/test'

test.beforeEach('Rediff', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details") 
})

test('Title verification', async({page})=>
{
    await expect(page).toHaveTitle("Rediff")
})

test('Logo verification', async({page})=>
{
    const logoredf=page.getByAltText('Rediffmail')
    await expect(logoredf).toBeVisible()
})

test('button disabled', async({page})=>
{
    const regBtn=page.locator('#Register')
    //await expect(regBtn).toBeDisabled()
    await expect(regBtn).toBeEnabled()
})

test('field editable', async({page})=>
{
   await expect(page.getByPlaceholder('Enter your full name')).toBeEditable()
})

test.only('non retrying assertions', async()=>
{
    let msg="account created successfully"
    expect(msg).toContain("created")

    let nullValue=null
    expect(nullValue).toBeNull()

    let psswrd="abc"
    expect(psswrd).toBeTruthy()
})

 


