import {test} from '@playwright/test'
import data from '../../TestData/data.json'
import { loginpage } from '../../pages/index2.js'
import {random} from '../../utils/randomnumber.js'
import { log } from 'node:console'

test("method1",async({page})=>{
    let obj=new loginpage(page)
    await page.goto(data.url)
   
    let ran=random()
    let email=`abc${ran}@gmail.com`
    await page.goto(data.url)
    await obj.username.fill(username+ran)
    console.log(await obj.username.inputValue());
    
    
    //await obj.username.fill(data.username)
    await obj.password.fill(data.password)
    await obj.btn.click()
})

/*----------------------------------------- */
test("method2",async({page})=>{
    let obj1=new loginpage(page)
    //Launch Url-Method 2
    await obj1.launch(data.url)
    
    await obj1.enter_details(data.username,data.password)
})