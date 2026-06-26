import {test,expect} from '@playwright/test'
//1.Open Google and Verify the title
test.skip("Verify the title",async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle(/Google/)
})

//2.Verify the text
test.skip("Verify text",async({page})=>{
    await page.goto("https://www.google.com/")
    const verifyText=await page.locator('//div[text()="India"]')
    await expect(verifyText).toHaveText('India')
})

3.//Input Text 4.Click Button
//Enter username and password and click submit
test.skip("Enter username,password and click submit",async({page})=>{
    await page.goto("https://demoqa.com/text-box")
    await page.locator('#userName').fill('Ganesha')
    await page.locator('#userEmail').fill("ganesha@example.com")
    await page.locator('#currentAddress').fill('Bangalore')
    await page.locator('#permanentAddress').fill('bangalore')
    await page.locator('#submit').click()
    //await page.click('#submit')
})

//5.Checkbox Handling
test.skip("Handling Checkbox",async({page})=>{
    await page.goto("https://demoqa.com/checkbox")
    await expect(page.getByRole('checkbox', { name: 'Home' })).toBeChecked();
})
 
test.skip("Count total links on a webpage",async({page})=>{
    await page.goto("https://www.google.com/")
    const links=await page.locator('a').count()
    console.log("Total Links",links); 
})



test.skip('Count links', async ({ page }) => {
  await page.goto('https://www.google.com');

  //await page.waitForLoadState('networkidle');

  const links = await page.locator('a').count();

  console.log('Total Links:', links);
});

test("Print all Link texts",async({page})=>{
    await page.goto("https://www.google.com")

    const links=await page.locator('a')
    const count=await links.count();

    for(let i=0;i<count;i++){
        console.log(await links.nth(i).textContent());
        
    }
})

test("locators",async({page})=>{
    await page.getByRole('button',{name:'Login'}).click()

    await page.getByTestId('submit-btn').click()
    await page.getByText('Submit').click()

    await page.getByRole('button',{name:'Login'}).click()

    await page.locator('button[type="submit"]').click()
    

})



