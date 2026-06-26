//**************************HARD CODED DATA******************** */
// import {test,expect} from '@playwright/test'
// test("Search Laptop",async({page})=>{
//     test.setTimeout(3000)
//      let Email="testerarora123@gmail.com"
//      let Password="Test@123"
//      let SearchItem="Laptop"

//      //Open Application
//     await page.goto("https://demowebshop.tricentis.com/")
//     //Click Login
//     await page.click('[class="ico-login"]')
    
//     //Enter Email
//     await page.locator('#Email').fill(Email)
//     //Enter Password
//     await page.locator('#Password').fill(Password)
//     //Check Remember me
//     await page.locator('#RememberMe').check()
//     //Click Login
//     await page.click('[value="Log in"]')
//     //Expected Result-User logged in successfully
//     await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(Email)

//    //Enter Laptop in search box.
//    await page.locator('#small-searchterms').fill(SearchItem)

//    //Search for Laptop-Enter Laptop in search box.
//    let searchItem="Laptop"
//    await page.fill('[name="q"]',searchItem)

//    //Click Search.
//    await page.click('[value="Search"]')

// //Expected Result-Matching products displayed.
// await expect(await page.locator('[class="product-title"]').textContent()).toContain("Laptop")

// //validate product name
// console.log("Search result displays",await page.locator('[class="product-title"]').textContent())
 
// })

//*****************Data Driven Testing-JSON DATA*********************/
// import {test,expect} from '@playwright/test'
// import data from '../../TestData/data.json';

// test("Login With Valid Credentials",async({page})=>{
//     test.setTimeout(3000)
//      let url=data.url
//      let Email=data.email
//      let Password=data.password
//  //Open Application
//     await page.goto(url)
//     //Click Login
//     await page.click('[class="ico-login"]')
    
//     //Enter Email
//     await page.locator('#Email').fill(Email)
//     //Enter Password
//     await page.locator('#Password').fill(Password)
//     //Check Remember me
//     await page.locator('#RememberMe').check()
//     //Click Login
//     await page.click('[value="Log in"]')
//     //Expected Result-User logged in successfully
//     await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(Email)

// //    //Enter Laptop in search box.
// //    await page.locator('#small-searchterms').fill(SearchItem)

//    //Search for Laptop-Enter Laptop in search box.
//    let searchItem="Laptop"
//    await page.fill('[name="q"]',searchItem)

//    //Click Search.
//    await page.click('[value="Search"]')

// //Expected Result-Matching products displayed.
// await expect(await page.locator('[class="product-title"]').textContent()).toContain("Laptop")

// //validate product name
// console.log("Search result displays",await page.locator('[class="product-title"]').textContent())
 
// })



//*****************Excel -Data Driven Testing*********************/
import {test,expect} from '@playwright/test'
import data from '../../TestData/data.json';
import { Workbook } from 'exceljs';
import path from 'path';

test.only("Login With Valid Credentials",async({page})=>{
    test.setTimeout(3000)
     let url=data.url
     let Email=data.email
     let Password=data.password

    //?Reading the DATA from Excel
    //~Create object for Workbook
    let book=await new Workbook()
    //~Read the data from Excel->xlsx.readFile(path)
    await book.xlsx.readFile(path.join(__dirname,"../../TestData/Book1.xlsx"))
    //~Select the sheet
    let sheet=await book.getWorksheet("Search_Data")
    //~Select row and column
    let searchItem=await sheet.getRow(2).getCell(2).toString()
    let expectedResult=await sheet.getRow(2).getCell(3).toString()

 //Open Application
    await page.goto(url)
    //Click Login
    await page.click('[class="ico-login"]')
    
    //Enter Email
    await page.locator('#Email').fill(Email)
    //Enter Password
    await page.locator('#Password').fill(Password)
    //Check Remember me
    await page.locator('#RememberMe').check()
    //Click Login
    await page.click('[value="Log in"]')
    //Expected Result-User logged in successfully
    await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(Email)

   //Search for Laptop-Enter Laptop in search box.
   //let searchItem="Laptop"
   //let expectedResult="14.1-inch Laptop"
   await page.fill('[name="q"]',searchItem)

   //Click Search.
   await page.click('[value="Search"]')

//Expected Result-Matching products displayed.
await expect(await page.locator('[class="product-title"]').textContent()).toContain(expectedResult)

//validate product name
console.log("Search result displays",await page.locator('[class="product-title"]').textContent())
 
})


/*
TC_003_Search_Laptop
Preconditions
login to the application

Test Data:
Search : Laptop
Steps:
Enter Laptop in search box.
Click Search.
Expected Result
Matching products displayed.
validate product name
*/
