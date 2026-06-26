import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/Register/register.js';
import registerData  from '../../TestData/data1.json';

test('Register New User', async ({ page }) => {

    const register = new RegisterPage(page);

    const email = `user${Date.now()}@gmail.com`;

    await page.goto(registerData.url);

    await register.clickRegister();

    await register.registerUser(
        registerData.firstName,
        registerData.lastName,
        email,
        registerData.password
    );

    await expect(
        page.locator('.result')
    ).toHaveText('Your registration completed');
});