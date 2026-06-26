//***************************HARD CODED DATA************************ */
// import {test,expect} from '@playwright/test'

// test('User Registration',async({page})=>{

//     //? Logging intyo application
//     await page.goto('https://demowebshop.tricentis.com/')
//     await page.click('[class="ico-login"]')
//     let Email mailto:="harshi765@gmail.com"
//     let Password = "Test@123"
//     await page.fill('[id="Email"]',Email)
//     await page.fill('[id="Password"]',Password)
//     await page.check('[id="RememberMe"]')
//     await page.click('[value="Log in"]')

//     await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(Email)
//     //?Go to books category
//     await page.click('//ul[@class="top-menu"]/li/a[@href="/books"]')

//     await page.locator('//a[text()="Computing and Internet"]/ancestor::div[@class="details"]//input[@value="Add to cart"]').click()
//     //? Targettiungv shopping cart
//     let count = await page.locator('[class="cart-qty"]').textContent()


//     let success = "The product has been added to your shopping cart"
//     await page.locator('[id="bar-notification"]').waitFor({state:"visible"})
//     await expect(await page.locator('[id="bar-notification"]').textContent()).toContain(success)

//     //await expect(await page.locator('[class="cart-qty"]').textContent()).toBe(count+1)
//     if(await page.locator('[class="cart-qty"]').textContent()>count)
//         console.log("Cart value increased from ",count," to ",await page.locator('[class="cart-qty"]').textContent());
        

// }) 

//****************************USING JSON DATA************************* */
// import {test,expect} from '@playwright/test'
// import data from "../../TestData/data.json"

// test('User Registration Using Json',async({page})=>{

//     //? READING JSON DATA
//     let url=data.url
//     let email=data.email
//     let password= data.password

//     //? Logging into application
//     await page.goto(url)
//     await page.click('[class="ico-login"]')
  
//     await page.fill('[id="Email"]',email)
//     await page.fill('[id="Password"]',password)
//     await page.check('[id="RememberMe"]')
//     await page.click('[value="Log in"]')

//     await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(email)
//     //?Go to books category
//     await page.click('//ul[@class="top-menu"]/li/a[@href="/books"]')

//     await page.locator('//a[text()="Computing and Internet"]/ancestor::div[@class="details"]//input[@value="Add to cart"]').click()
//     //? Targettiungv shopping cart
//     let count = await page.locator('[class="cart-qty"]').textContent()


//     let success = "The product has been added to your shopping cart"
//     await page.locator('[id="bar-notification"]').waitFor({state:"visible"})
//     await expect(await page.locator('[id="bar-notification"]').textContent()).toContain(success)

//     //await expect(await page.locator('[class="cart-qty"]').textContent()).toBe(count+1)
//     if(await page.locator('[class="cart-qty"]').textContent()>count)
//         console.log("Cart value increased from ",count," to ",await page.locator('[class="cart-qty"]').textContent());
        
// })  


//****************************EXCEL DATA ************************* */
import {test,expect} from '@playwright/test'
import data from "../../TestData/data.json"
import { Workbook } from 'exceljs';
import path from 'path';

test('User Registration Using Json',async({page})=>{

    
    //? READING JSON DATA
    let url=data.url
    let email=data.email
    let password= data.password

    //?Reading the DATA from Excel
            //~Create object for Workbook
            let book=await new Workbook()
            //~Read the data from Excel->xlsx.readFile(path)
            await book.xlsx.readFile(path.join(__dirname,"../../TestData/Book1.xlsx"))
            //~Select the sheet
            let sheet=await book.getWorksheet("Cart_Data")
            //~Select row and column
            let BookName=await sheet.getRow(2).getCell(2).toString()
            let ExpectedSuccessMessage=await sheet.getRow(2).getCell(3).toString()
           
    //? Logging into application
    await page.goto(url)
    await page.click('[class="ico-login"]')
  
    await page.fill('[id="Email"]',email)
    await page.fill('[id="Password"]',password)
    await page.check('[id="RememberMe"]')
    await page.click('[value="Log in"]')

    await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(email)
    //?Go to books category
    await page.click('//ul[@class="top-menu"]/li/a[@href="/books"]')

    await page.locator('//a[text()="Computing and Internet"]/ancestor::div[@class="details"]//input[@value="Add to cart"]').click()
    //? Targettiungv shopping cart
    let count = await page.locator('[class="cart-qty"]').textContent()

    //let success = "The product has been added to your shopping cart"
    await page.locator('[id="bar-notification"]').waitFor({state:"visible"})
    await expect(await page.locator('[id="bar-notification"]').textContent()).toContain(ExpectedSuccessMessage)

    //await expect(await page.locator('[class="cart-qty"]').textContent()).toBe(count+1)
    if(await page.locator('[class="cart-qty"]').textContent()>count)
        console.log("Cart value increased from ",count," to ",await page.locator('[class="cart-qty"]').textContent());
        
})  



/*
TC_004 - Add Book To Cart
Module

Books

Precondition
User logged in.
Steps
Login to application.
Navigate to Books category.
Open "Computing and Internet" book.
Click "Add to cart".
Expected Result
Success notification should be displayed.
Cart count should increase. 


*/