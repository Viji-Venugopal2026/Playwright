import{test,expect} from '@playwright/test'

test.beforeEach(async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
})

test('Simple alert',async({page})=>
{
    page.on('dialog',async dailog=>
    {
        expect(dailog.type()).toContain('alert')
        expect(dailog.message()).toContain('I am an alert box!')
        await dailog.accept()
    })

    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"click the button to display an alert box:"}).click()
})

test('Confirmation alert', async({page})=>
{
    await page.getByRole('link',{name:"Alert with OK & Cancel"}).click()
        page.on('dialog',async dailog=>
    {
        expect(dailog.type()).toContain('confirm')
        expect(dailog.message()).toContain('Press a Button !')
        //await dailog.accept()
        await dailog.dismiss()
    })

    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"click the button to display a confirm box"}).click()
})

let inputValue="Aradhya"
test.only('Prompt alert', async({page})=>{
    
    await page.getByRole('link',{name:'Alert with Textbox'}).click()
    page.on('dialog',async dailog=>
    {
        expect(dailog.type()).toContain('prompt')
        expect(dailog.message()).toContain('Please enter your name')
        await dailog.accept(inputValue)
    })
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"click the button to demonstrate the prompt box"}).click()
    await expect(page.locator('#demo1')).toHaveText(`Hello ${inputValue} user How are you today`)
})
