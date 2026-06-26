export class SearchPage {

    constructor(page) {
        this.page = page;

        // Search Locators
        this.searchBox = page.locator('#small-searchterms');
        this.searchBtn = page.locator('input[value="Search"]');

        // Search Result Locator
        this.productTitle = page.locator('.product-title');
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchBtn.click();
    }

    async getProductNames() {
        return await this.productTitle.allTextContents();
    }
}