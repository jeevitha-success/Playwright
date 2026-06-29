import {test} from "@playwright/test"

test("xpath", async({page})=>{

    await page.goto('https://www.prokabaddi.com/standings')

    //?Hardcoded Xpath
    // let wins=await page.locator('(//p[text()="Telugu Titans"]/ancestor::div[@class="table-row-wrap"]//p[@class="count"])[2]').textContent()
    // let Bwins=await page.locator('(//p[text()="Bengaluru Bulls"]/ancestor::div[@class="table-row-wrap"]//p[@class="count"])[2]').textContent()

    //? Dynamic Xpath
    let teamName="Bengaluru Bulls"
    let wins=await page.locator(`(//p[text()="${teamName}"]/ancestor::div[@class="table-row-wrap"]//p[@class="count"])[2]`).textContent()


    console.log(wins);
    // console.log(Bwins);

})