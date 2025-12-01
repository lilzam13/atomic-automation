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

        //Company address(dashboard)
        this.streetCompInput = page.locator('#compStreet1');
        this.cityCompInput = page.locator('#compCity');
        this.stateCompDropdown = page.locator('#compStateVisible');
        this.zipCompInput = page.locator('#compZip');
        
        //Next step 1
        this.nextStepOnebutton = page.locator('button[type="submit"]');
        this.backStepOneButton = page.locator('.backbtn');
        
     }

     //Methods for contact address
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

     //Methods for company address
     async fillStreetComp (compStreet1) {
         await this.streetCompInput.fill(compStreet1);
     }
   
     async fillCityComp (compCity) {
         await this.cityCompInput.fill(compCity);
     }

     async selectStateComp (compState) {
         await this.stateCompDropdown.selectOption(compState);
     }

     async fillZipComp (compZip) {
         await this.zipCompInput.fill(compZip);
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

     async fillCompanyAddressForm(compStreet1, compCity, compState, compZip) {
        await this.fillStreetComp(compStreet1);
        await this.fillCityComp(compCity);
        await this.selectStateComp(compState);
        await this.fillZipComp(compZip);
     }
     
}

module.exports = { CompanyAddressPage };