//*************************Normal Code without Test Data***************** */

// import {test,expect} from '@playwright/test'
// test("Login With Valid Credentials",async({page})=>{
//     test.setTimeout(3000)
//      let Email="testerarora123@gmail.com"
//      let Password="Test@123"

//      //Open Application
//     await page.goto("https://demowebshop.tricentis.com/")
//     //Click Login
//     await page.click('.ico-login')
    
//     //Enter Email
//     await page.locator('#Email').fill(Email)
//     //Enter Password
//     await page.locator('#Password').fill(Password)
//     //Check Remember me
//     await page.locator('#RememberMe').check()
//     //Click Login
//     await page.click('//input[@class="button-1 login-button"]')
//     //Expected Result-User logged in successfully
    
//     //await expect(page.locator('.account')).toHaveText('testerarora123@gmail.com')
//     await expect( page.getByRole('link', { name: Email })).toHaveText(Email);
//    // getByRole('link', { name: 'testerarora123@gmail.com' })
// })

//**********************Data Driven Testing Using  JSON Test Data********************* */

// import {test,expect} from '@playwright/test'
// import data from '../../TestData/data.json';

// test.only("Login With Valid Credentials",async({page})=>{
//     test.setTimeout(3000)
//      let url=data.url
//      let Email=data.email
//      let Password=data.password

//      //Open Application
//     await page.goto(url)
//     //Click Login
//     await page.click('.ico-login')
    
//     //Enter Email
//     await page.locator('#Email').fill(Email)
//     //Enter Password
//     await page.locator('#Password').fill(Password)
//     //Check Remember me
//     await page.locator('#RememberMe').check()
//     //Click Login
//     await page.click('//input[@class="button-1 login-button"]')
//     //Expected Result-User logged in successfully
    
//     //await expect(page.locator('.account')).toHaveText('testerarora123@gmail.com')
//     await expect( page.getByRole('link', { name: Email })).toHaveText(Email);
//    // getByRole('link', { name: 'testerarora123@gmail.com' })
// })


//***********************EXCEL TEST DATA********************** */


import {test,expect} from '@playwright/test'
import data from '../../TestData/data.json';
import { Workbook } from 'exceljs';
import path from 'path';


test.only("Login With Valid Credentials",async({page})=>{
    test.setTimeout(3000)
     let url=data.url
    //?Reading the DATA from Excel
        //~Create object for Workbook
        let book=await new Workbook()
        //~Read the data from Excel->xlsx.readFile(path)
        await book.xlsx.readFile(path.join(__dirname,"../../TestData/Book1.xlsx"))
        //~Select the sheet
        let sheet=await book.getWorksheet("Registration")
        //~Select row and column
       
        let Email=await sheet.getRow(2).getCell(4).toString()
        let Password=await sheet.getRow(2).getCell(5).toString()


     //Open Application
    await page.goto(url)
    //Click Login
    await page.click('.ico-login')
    
    //Enter Email
    await page.locator('#Email').fill(Email)
    //Enter Password
    await page.locator('#Password').fill(Password)
    //Check Remember me
    await page.locator('#RememberMe').check()
    //Click Login
    await page.click('//input[@class="button-1 login-button"]')
    //Expected Result-User logged in successfully
    
    //await expect(page.locator('.account')).toHaveText('testerarora123@gmail.com')
    await expect( page.getByRole('link', { name: Email })).toHaveText(Email);
   // getByRole('link', { name: 'testerarora123@gmail.com' })
})



/*
TC_002_Login_Valid_Credentials

Preconditions
Registered user available.

Test Data
Email	                          Password
mailto:aurora123@gmail.com	Test@123
Steps:
Open application.
Click Login.
Enter Email.
Enter Password.
Check Remember me
Click Login.
Expected Result

User logged in successfully. 
*/


  //"url": "https://demowebshop.tricentis.com/",