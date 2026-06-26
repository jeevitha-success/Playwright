import {test} from '@playwright/test'
import { readExcel } from '../utils/excel'

test("",async({page})=>{
    let data=await readExcel("C:/Users/Jeevitha T/OneDrive/Desktop/PlaywrightProject/TestData/Book2.xlsx","Sheet1")
    await page.goto("https://www.hyrtutorials.com/p/css-selectors-practice.html?utm_source=chatgpt.com")
    for(let row of data){
        await page.locator("#firstName").fill(row.firstName)
        await page.locator('#lastName').fill(row.lastName)
        await page.locator('.gender').fill(row.gender)
    }
})