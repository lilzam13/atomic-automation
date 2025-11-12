const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class  BillingPage extends BasePage{
     constructor(page) {
        super(page);
        this.page = page;

        //Billing card information
        this.cardFullNameInput = page.locator('#cardFullName');
        this.cardNumberInput = page.locator('#cardNumber');
        this.cardExpiryMonthDropdown = page.locator('#cardExpMonth');
        this.cardExpiryYearDropdown  = page.locator('#cardExpYear');
        this.cardCvvInput  = page.locator('#cardCvv');

        //Billing address
        this.billingCountryDropdown = page.locator('#country');
        this.billingStreet1Input = page.locator('[placeholder="Street Address"]');
        this.billingStreet2Input = page.locator('[placeholder="Address (Cont)"]');
        this.billingCityInput = page.locator('[placeholder="City"]');
        this.billingStateDropdown = page.locator('[name="card[address][state]"]');
        this.billingZipInput = page.locator('[placeholder="ZIP Code"]');

       //Billing Payment
        this.billingAgreeCheckbox = page.getByText('I agree to the Legal').nth(2);
        this.payButton = page.locator('button#payButton');
        this.backBillingButton = page.locator('.backbtn');

     }
     async fillBillingFullName (cardFullName) {
         await this.cardFullNameInput.fill(cardFullName);
     }
     async fillBillingCardNumber (billingCardNum) {
        await this.cardNumberInput.fill(billingCardNum);
     }
     async fillBillingExpiryMonth (billingExpiryMonth) {
         await this.cardExpiryMonthDropdown.selectOption(billingExpiryMonth);
     }
     async fillBillingExpiryYear (billingExpiryYear) {
         await this.cardExpiryYearDropdown.selectOption(billingExpiryYear);
     }
     async fillBillingCvv (billingCvv) {
         await this.cardCvvInput.fill(billingCvv);
     }

     async fillBillingStreetOne (billingStreet1) {
         await this.billingStreet1Input.fill(billingStreet1);
     }
     async fillBillingStreetTwo (billingStreet2) {
         await this.billingStreet2Input.fill(billingStreet2);
     }
     async fillBillingCity (billingCity) {
         await this.billingCityInput.fill(billingCity);
     }
     async selectBillingState (billingState) {
         await this.billingStateDropdown.selectOption(billingState);
     }
     async fillBillingZipCode (billingZip) {
         await this.billingZipInput.fill(billingZip);
     }
     async ClickBillingAgreePolicy () {
         await this.billingAgreeCheckbox.click();
     }
     async ClickBillingPayButton () {
         await this.payButton.click();
     }

     async fillBillingCardInformation(cardFullName, billingCardNum, billingExpiryMonth, billingExpiryYear, billingCvv) {
        await this.fillBillingFullName(cardFullName);
        await this.fillBillingCardNumber(billingCardNum);
        await this.fillBillingExpiryMonth(billingExpiryMonth);
        await this.fillBillingExpiryYear(billingExpiryYear);
        await this.fillBillingCvv(billingCvv);
     }
     async fillBillingAdressInformation(billingStreet1, billingStreet2, billingCity, billingState, billingZip) {
        await this.fillBillingStreetOne(billingStreet1);
        await this.fillBillingStreetTwo(billingStreet2);
        await this.fillBillingCity(billingCity);
        await this.selectBillingState(billingState);
        await this.fillBillingZipCode(billingZip);
        await this.ClickBillingAgreePolicy();
        await this.ClickBillingPayButton();
     }
}

module.exports = { BillingPage };