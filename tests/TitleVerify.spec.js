
import{test, expect} from '@playwright/test'

test('Title verify',async({page})=>{

    await page.goto('https://www.facebook.com/')
    const actTtl=await page.title();
    console.log("Title= "+actTtl);
    await expect(page).toHaveTitle("Facebook")
})