const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class  CompanyAddressPage extends BasePage{
     constructor(page) {
        super(page);
        this.page = page;
        //Virtual address decision
        this.virtualAddressYes = page.locator('[for="virtual-address-required-yes"]');
        this.virtualAddressNo = page.locator('[for="virtual-address-required-no"]');

        //Contact address
        this.streetOneInput = page.locator('#contactStreet1');
        this.streetTwoInput = page.locator('#contactStreet2');
        this.cityInput = page.locator('#contactCity');
        this.stateDropdown = page.locator('#contactState');
        this.zipCodeInput = page.locator('#contactZip');
        
        //Next step 1
        this.nextStepOnebutton = page.locator('button[type="submit"]');
        this.backStepOneButton = page.locator('.backbtn');
        
     }

     async selectVirtualAddressNo () {
         await this.virtualAddressNo.click();
     }

     async fillStreetOne (contactStreet1) {
         await this.streetOneInput.fill(contactStreet1);
     }
     async fillStreetTwo (contactStreet2) {
         await this.streetTwoInput.fill(contactStreet2);
     }
     async fillCity (contactCity) {
         await this.cityInput.fill(contactCity);
     }
     async selectState (contactState) {
         await this.stateDropdown.selectOption(contactState);
     }
     async fillZipCode (contactZip) {
         await this.zipCodeInput.fill(contactZip);
     }
     async clickNextStepOne () {
         await this.nextStepOnebutton.click();
     }

     async fillCompanyAddressInformation(contactStreet1, contactStreet2, contactCity, contactState, contactZip) {
        await this.fillStreetOne(contactStreet1);
        await this.fillStreetTwo(contactStreet2);
        await this.fillCity(contactCity);
        await this.selectState(contactState);
        await this.fillZipCode(contactZip);
     }
     
}

module.exports = { CompanyAddressPage };