export class AddToCartPage {

    constructor(page) {
        this.page = page;

        this.booksLink = page.locator(
            '//ul[@class="top-menu"]/li/a[@href="/books"]'
        );

        this.addToCartBtn = page.locator('#add-to-cart-button-13')

        this.notificationBar = page.locator(
            '#bar-notification .content'
        );

        this.cartCount = page.locator('.cart-qty');
    }

    async addToCart(BookName) {

        await this.booksLink.click();

        //await this.page.getByRole('link', { name: '${BookName}', exact: true }).click()



    await this.page.getByRole('link', {
        name: BookName,
        exact: true
    }).click();


        await this.addToCartBtn.click();
    }

    async getSuccessMessage() {
        return await this.notificationBar.textContent();
    }

    async getCartCount() {
    const text = await this.cartCount.textContent();
    return parseInt(text.replace(/[()]/g, ''));
}

}
/*
TC_004 - Add Book To Cart
Module

Books

Precondition
User logged in.
Steps
Login to application.
Navigate to Books category.
Open "Computing and Internet" book.
Click "Add to cart".
Expected Result
Success notification should be displayed.
Cart count should increase. 


*/