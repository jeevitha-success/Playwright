import { test,expect} from '@playwright/test';

import { LoginPage } from '../../pages/Login/loginpage.js';
import { DesktopPage } from '../../pages/Desktop/DesktopPage.js';


import { Workbook } from 'exceljs';
import path from 'path';

import loginData from '../../TestData/data1.json';



test('Configure Desktop And Add To Cart', async ({ page }) => {

    // Login
    const login = new LoginPage(page);

    await login.launch(loginData.url);

    await login.clickLogin();

    await login.login(
        loginData.email,
        loginData.password
    );

    // Read Excel Data
    const workbook = new Workbook();

    await workbook.xlsx.readFile(
        path.join(
            __dirname,
            '../../TestData/Book1.xlsx'
        )
    );

    const sheet =
        workbook.getWorksheet(
            'Computer_Config'
        );

    const processor =
        sheet.getRow(2).getCell(2).toString();

    const ram =
        sheet.getRow(2).getCell(3).toString();

    const hdd =
        sheet.getRow(2).getCell(4).toString();

    const os =
        sheet.getRow(2).getCell(5).toString();

    const expectedMsg =
        sheet.getRow(2).getCell(6).toString();

    // Desktop Configuration
    const desktop =
        new DesktopPage(page);

    await desktop.configureDesktop(
        processor,
        ram,
        hdd,
        os
    );

    // Validation
    const actualMessage =
        await desktop.getSuccessMessage();

    expect(actualMessage)
        .toContain(expectedMsg);
});