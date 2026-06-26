import {random} from '../utils/randomnumber.js'

export class loginpage{
    constructor(page){
        this.page=page
        this.username=page.locator('//input[@id="username"]')
        this.password=page.locator('//input[@id="password"]')
        this.btn=page.locator('//button[@id="submit"]')
    }

//!Used to launch the application
async launch(url){
    await this.page.goto(url)
}

async enter_details(username,password){
    let ran=random()
    await this.username.fill(username+ran)
    await this.password.fill(password)
    await this.btn.click()
}
}