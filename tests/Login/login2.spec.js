import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/Login/loginpage.js';
import loginData from '../../TestData/data1.json';
test('Login Test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.launch(loginData.url);

    await login.clickLogin();

    await login.login(
        loginData.email,
        loginData.password
    );

    await expect(page.locator('.ico-logout'))
        .toBeVisible();
});