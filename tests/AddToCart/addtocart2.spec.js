import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/Login/loginpage.js';
import data from '../../TestData/data1.json';
import { AddToCartPage } from '../../pages/AddToCart/AddToCartPage.js';
import { Workbook } from 'exceljs';
import path from 'path';


test('Login and Add Book To Cart', async ({ page }) => {

    // Read Excel Data
    const workbook = new Workbook();

    await workbook.xlsx.readFile(
        path.join(__dirname, '../../TestData/Book1.xlsx')
    );

    const sheet = workbook.getWorksheet('Cart_Data');

    const BookName =
        sheet.getRow(2).getCell(2).toString();

    const ExpectedSuccessMessage =
        sheet.getRow(2).getCell(3).toString();

    // Login
    const login = new LoginPage(page);

    await login.launch(data.url);

    await login.clickLogin();

    await login.login(
        data.email,
        data.password
    );

// Add To Cart
    const cart = new AddToCartPage(page);

    const beforeCount =
        await cart.getCartCount();

    await cart.addToCart(BookName);

    const actualMessage =
        await cart.getSuccessMessage();

    expect(actualMessage)
        .toContain(ExpectedSuccessMessage);

    const afterCount =
        await cart.getCartCount();

    expect(afterCount)
        .toBe(beforeCount + 1);

});