export class DesktopPage {

    constructor(page) {
        this.page = page;

        this.computersMenu = page.locator('//a[contains(text(),"Computers")]').first();

        this.desktopLink = page.locator('//a[contains(text(),"Desktops")]').first();

      

        this.buildYourOwnComputer = page
    .getByRole('link', {
        name: 'Build your own computer'
    })
    .first();

        this.processorDropdown = page.locator(
            '#product_attribute_16_5_4'
        );

        this.ramDropdown = page.locator(
            '#product_attribute_16_6_5'
        );

        this.addToCartBtn = page.locator(
            '#add-to-cart-button-16'
        );

        this.successMessage = page.locator(
            '#bar-notification .content'
        );
    }

    async configureDesktop(
        processor,
        ram,
        hdd,
        os
    ) {

        await this.computersMenu.hover();

        await this.desktopLink.click();

        await this.buildYourOwnComputer.click();

        await this.processorDropdown.selectOption({
            value: processor
        });

        await this.ramDropdown.selectOption({
            value: ram
        });

        await this.page.click(
            `[value="${hdd}"]`
        );

        await this.page.click(
            `[value="${os}"]`
        );

        await this.addToCartBtn.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
}