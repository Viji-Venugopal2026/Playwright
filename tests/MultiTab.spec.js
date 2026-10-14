import{test, expect} from '@playwright/test'


test('Multi Tabs', async({context})=>
{
   const page1=await context.newPage()
   await page1.goto('https://www.facebook.com/')
   await page1.waitForTimeout(2000)
   const FbTtl=await page1.title();
   console.log(FbTtl);
   
   const page2=await context.newPage()
   await page2.goto('https://www.ebay.com/')
    await page2.waitForTimeout(2000)
   const EbTtl=await page2.title();
   console.log(EbTtl);
})


test.only('Multi Tabss', async({context})=>
{
   const page1=await context.newPage()
   await page1.goto('https://demo.guru99.com/popup.php')

   const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    page1.getByRole('link',{name:'Click Here'}).click()
   ])

   await newPage.waitForLoadState()
   await page1.waitForTimeout(2000)
   await newPage.locator('#emailid').fill('Abc@gmail.com')
   await newPage.waitForTimeout(2000)
   await newPage.close()
   await newPage.waitForTimeout(2000)
   await page1.bringToFront();
   await newPage.waitForTimeout(2000)
})
