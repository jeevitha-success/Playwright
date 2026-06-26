export class LoginPage {

    constructor(page) {
        this.page = page;

        this.loginLink = page.locator('.ico-login');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.rememberMeCheckbox = page.locator('#RememberMe');
        this.loginBtn = page.locator('input[value="Log in"]');
        this.logoutLink = page.locator('.ico-logout');
    }

    async launch(url) {
        await this.page.goto(url);
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async isLogoutVisible() {
        return await this.logoutLink.isVisible();
    }
}