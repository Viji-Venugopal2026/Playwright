import{test,expect} from '@playwright/test'

test('File upload', async({page})=>
{
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    const brwsBtn=await page.locator('#input-4')
    await page.waitForTimeout(3000)
    await brwsBtn.setInputFiles("C:\\Users\\lumin\\OneDrive\\Desktop\\jmeternotes (1).docx","path")
    await page.waitForTimeout(3000)
})

