
import{test,expect} from '@playwright/test'

test('iFrames Handling',async({page})=>
{

    await page.goto('https://vinothqaacademy.com/iframe/')
    const allFrames=await page.frames();
    const framesNum=await allFrames.length;
    console.log("Total frames= "+framesNum);

    for(let f of allFrames)
    {
        console.log("Frame name= "+f.name());
        console.log("Frame url= "+f.url());    
    }

    const firstFrame=await page.frame('employeetable')
    await firstFrame.locator('#nameInput').fill("Adhya")
    await page.waitForTimeout(2000);
})