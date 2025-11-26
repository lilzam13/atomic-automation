const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class BottomPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        this.nextStepOnebutton = page.locator('button[type="submit"]');
        this.backStepOneButton = page.locator('.backbtn');

        this.billingAgreeCheckbox = page.getByText('I agree to the Legal').nth(2);
    }

    async clickBillingAgreePolicy() {
        await this.billingAgreeCheckbox.click();
    }

    async clickNextStepOne() {
        await this.nextStepOnebutton.click();
    }
}

module.exports = { BottomPage };