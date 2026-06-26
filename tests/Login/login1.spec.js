import {test} from '@playwright/test'
import data from '../../TestData/data.json'
import { loginpage } from '../../pages/index1.js'

test.skip("method1",async({page})=>{
    let obj=new loginpage(page)
    //Launch Url-Method 1
    await page.goto(data.url)
    
    await obj.username.fill(data.username)
    await obj.password.fill(data.password)
    await obj.btn.click()
})

/*----------------------------------------- */
test.only("method2",async({page})=>{
    let obj1=new loginpage(page)
    //Launch Url-Method 2
    await obj1.launch(data.url)
    
    await obj1.enter_details(data.username,data.password)
})