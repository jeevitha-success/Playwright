//***********************HARD CODED DATA******************* */

// import {test,expect} from '@playwright/test'
// test("Verify Registeration",async({page})=>{
//     test.setTimeout(3000)

//     let FirstName="Aurora"
//     let LastName="Tester"
//     let Email="testerarora123@gmail.com"
//     let Password="Test@123"
//     let ConfirmPassword="Test@123"

//     //Launch Application
//     await page.goto("https://demowebshop.tricentis.com/")
//     //Click Register
//     await page.click('.ico-register')
//     //Select Female radio button
//     await page.locator('#gender-female').check()
//     //Enter First Name
//     await page.locator('#FirstName').fill(FirstName)
//     //Enter Last Name
//     await page.locator('#LastName').fill(LastName)
//     //Enter Email
//     await page.locator('#Email').fill(Email)
//     //Enter Password
//     await page.locator('#Password').fill(Password)
//     //Enter Confirm Password
//     await page.locator('#ConfirmPassword').fill(ConfirmPassword)
//     //Click Register button
//     await page.click('#register-button')

//     //Expected Result-Registration successful message displayed. 
//     await expect(page.locator('.result')).toContainText(/registration/)
// })

//*******************DataDriven Test Using JSON Test Data*********************** */

// import { test,expect } from '@playwright/test';
// import data from '../../TestData/data.json';

// test.only('Login Test Using Json Test Data', async ({ page }) => {
//     test.setTimeout(3000)
//      let url=data.url
//      let Email=data.email
//      let Password=data.password


//      let FirstName="Aurora"
//      let LastName="Tester"


//      //Launch Application
//     await page.goto(url);
//     //Click Register
//     await page.click('.ico-register')
//     //Select Female radio button
//     await page.locator('#gender-female').check()
//      //Enter First Name
//     await page.locator('#FirstName').fill(FirstName)
//     //Enter Last Name
//     await page.locator('#LastName').fill(LastName)
//     //Enter Email
//     await page.locator('#Email').fill(Email)
//     //Enter Password
//     await page.locator('#Password').fill(Password)
//     //Enter Confirm Password
//     await page.locator('#ConfirmPassword').fill(Password)
//     //Click Register button
//     await page.click('#register-button')
//     //Expected Result-Registration successful message displayed. 
//     await expect(page.locator('.result')).toContainText(/registration/)

//     console.log(Email);
//     console.log(Password);
// });

//*******************DataDriven Test Using EXCEL Test Data*********************** */

import { test,expect } from '@playwright/test';
import data from '../../TestData/data.json';
import { Workbook } from 'exceljs';
import path from 'path';

test.only('Login Test Using Excel Data', async ({ page }) => {
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
        let FirstName=await sheet.getRow(2).getCell(2).toString()
        let LastName=await sheet.getRow(2).getCell(3).toString()
        let Email=await sheet.getRow(2).getCell(4).toString()
        let Password=await sheet.getRow(2).getCell(5).toString()
       

     //Launch Application
    await page.goto(url);
    //Click Register
    await page.click('.ico-register')
    //Select Female radio button
    await page.locator('#gender-female').check()

     //Enter First Name
    await page.locator('#FirstName').fill(FirstName)
    //Enter Last Name
    await page.locator('#LastName').fill(LastName)
    //Enter Email
    await page.locator('#Email').fill(Email)
    //Enter Password
    await page.locator('#Password').fill(Password)
    //Enter Confirm Password
    await page.locator('#ConfirmPassword').fill(Password)
    //Click Register button
    await page.click('#register-button')
    //Expected Result-Registration successful message displayed. 
    await expect(page.locator('.result')).toContainText(/registration/)

    console.log(Email);
    console.log(Password);
});





//~Requirement
/*
TC_001_User_Registration
Module

Registration

Objective

Verify user can register successfully with valid details.

Test Data
Field	Value
First Name	Aurora
Last Name	Tester
Email	mailto:aurora123@gmail.com
Password	Test@123
Confirm Password	Test@123
Steps
Step No	Action
1	Launch application
2	Click Register
3	Select Female radio button
4	Enter First Name
5	Enter Last Name
6	Enter Email
7	Enter Password
8	Enter Confirm Password
9	Click Register button
Expected Result
Registration successful message displayed. 
*/