import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/Login/loginpage.js';
import { SearchPage } from '../../pages/Search/search.js';
import loginData from '../../TestData/data1.json';
import searchData from '../../testdata/searchData.json';



test('Search Laptop and validate product name', async ({ page }) => {

    const login = new LoginPage(page);

    await login.launch(loginData.url);
    await login.clickLogin();

    await login.login(
        loginData.email,
        loginData.password
    );

    const search = new SearchPage(page);

    await search.searchProduct(searchData.searchProduct);

    const products = await search.getProductNames();

    expect(products.length).toBeGreaterThan(0);

    for (const product of products) {
        expect(product.toLowerCase())
            .toContain(
                searchData.searchProduct.toLowerCase()
            );
    }
});