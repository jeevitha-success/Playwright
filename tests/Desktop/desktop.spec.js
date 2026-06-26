//******************************HARD CODED DATA******************** */
// import {test,expect} from '@playwright/test'

// test('User Registration',async({page})=>{
//     await page.goto('https://demowebshop.tricentis.com/')
//     await http://page.click('[class="ico-login"]')

//     let Email = "mailto:harshi765@gmail.com"
//     let Password = "Test@123"

//     //? lOGGING in
//     await page.fill('[id="Email"]',Email)
//     await page.fill('[id="Password"]',Password)
//     await page.check('[id="RememberMe"]')
//     await http://page.click('[value="Log in"]')

//     //? Cliking on Computers
//     await page.locator('//a[contains(text(),"Computers")]').first().hover()
//     await page.locator('//a[contains(text(),"Desktops")]').first().click()
//     await http://page.click('(//a[contains(text(),"Build your own computer")])[2]')

//     //? Selecting processor from dropdown
//     await page.locator('[id="product_attribute_16_5_4"]').selectOption({value:"14"})


//     //?Selecting a RAM from drop down
//     await page.locator('[id="product_attribute_16_6_5"]').selectOption({value:"17"})

//     //? Choosing HDD
//     await http://page.click('[value="19"]')

//     //?Chhosing OS
//     await http://page.click('[value="21"]')
//     await http://page.click('//input[@id="add-to-cart-button-16"]')

//     //? validating the message
//     await page.locator('//p[text()="The product has been added to your "]').waitFor()
//     let success=await page.locator('//p[text()="The product has been added to your "]').textContent()
//     await expect(success).toContain('The product has been added')
 
// }) 


//*******************************JSON DATA************************* */
// import {test,expect} from '@playwright/test'
// import data from "../../TestData/commonData.json"

// test('User Registration',async({page})=>{

//      //? READING JSON DATA
//     let url=data.url
//     let http://email=data.email
//     let password= data.password

//     await page.goto(url)
//     await http://page.click('[class="ico-login"]')


//     //? lOGGING in
//     await page.fill('[id="Email"]',email)
//     await page.fill('[id="Password"]',password)
//     await page.check('[id="RememberMe"]')
//     await http://page.click('[value="Log in"]')

//     //? Cliking on Computers
//     await page.locator('//a[contains(text(),"Computers")]').first().hover()
//     await page.locator('//a[contains(text(),"Desktops")]').first().click()
//     await http://page.click('(//a[contains(text(),"Build your own computer")])[2]')

//     //? Selecting processor from dropdown
//     await page.locator('[id="product_attribute_16_5_4"]').selectOption({value:"14"})


//     //?Selecting a RAM from drop down
//     await page.locator('[id="product_attribute_16_6_5"]').selectOption({value:"17"})

//     //? Choosing HDD
//     await http://page.click('[value="19"]')

//     //?Chhosing OS
//     await http://page.click('[value="21"]')
//     await http://page.click('//input[@id="add-to-cart-button-16"]')

//     //? validating the message
//     await page.locator('//p[text()="The product has been added to your "]').waitFor()
//     let success=await page.locator('//p[text()="The product has been added to your "]').textContent()
//     await expect(success).toContain('The product has been added')



    

// }) 


///***********************************************EXCEL DATA************************ */
import {test,expect} from '@playwright/test'
import data from "../../TestData/data.json"
import { Workbook } from 'exceljs';
import path from 'path';

test.only('User Registration',async({page})=>{

     //? READING JSON DATA
    let url=data.url
    let email=data.email
    let password= data.password

    await page.goto(url)
    await page.click('[class="ico-login"]')


    //? lOGGING in
    await page.fill('[id="Email"]',email)
    await page.fill('[id="Password"]',password)
    await page.check('[id="RememberMe"]')
    await page.click('[value="Log in"]')

    //?Reading the DATA from Excel
        //~Create object for Workbook
        let book=await new Workbook()
        //~Read the data from Excel->xlsx.readFile(path)
        await book.xlsx.readFile(path.join(__dirname,"../../TestData/Book1.xlsx"))
        //~Select the sheet
        let sheet=await book.getWorksheet("Computer_Config")
        //~Select row and column
        let processor=await sheet.getRow(2).getCell(2).toString()
        let ram=await sheet.getRow(2).getCell(3).toString()
        let hdd=await sheet.getRow(2).getCell(4).toString()
        let os=await sheet.getRow(2).getCell(5).toString()
        let expectedMsg=await sheet.getRow(2).getCell(6).toString()
        
    //? Cliking on Computers
    await page.locator('//a[contains(text(),"Computers")]').first().hover()
    await page.locator('//a[contains(text(),"Desktops")]').first().click()
    await page.locator("(//a[contains(@href,'build-your-own-computer')])[1]").click()

    await page.locator('[id="product_attribute_16_5_4"]').selectOption({ value: processor });
      
      await page.locator('[id="product_attribute_16_6_5"]').selectOption({ value: ram });
      
      await page.click(`[value="${hdd}"]`);
      
      await page.click(`[value="${os}"]`);
      
      await page.click('//input[@id="add-to-cart-button-16"]');
      
      await page.locator('//p[text()="The product has been added to your "]').waitFor();
      
      let success = await page.locator('//p[text()="The product has been added to your "]').textContent();
      
      await expect(success).toContain(expectedMsg);

})