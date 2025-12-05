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
        this.contactStreetInput = page.locator('#contactStreet1');
        this.contactStreetTwoInput = page.locator('#contactStreet2');
        this.contactCityInput = page.locator('#contactCity');
        this.contactStateDropdown = page.locator('#contactState');
        this.contactZipCodeInput = page.locator('#contactZip');

        //Company address(dashboard)
        this.streetInput = page.locator('#compStreet1');
        this.cityInput = page.locator('#compCity');
        this.stateSelect = page.locator('#compStateVisible');
        this.zipInput = page.locator('#compZip')
        
     }

     //Methods for contact address
     async selectVirtualAddressNo () {
         await this.virtualAddressNo.click();
     }
    
     async fillContactStreet(contactStreet1) {
         await this.contactStreetInput.fill(contactStreet1);
     }

     async fillContactStreetTwo (contactStreet2) {
         await this.contactStreetTwoInput.fill(contactStreet2);
     }

     async fillContactCity (contactCity) {
         await this.contactCityInput.fill(contactCity);
     }

     async selectContactState (contactState) {
         await this.contactStateDropdown.selectOption(contactState);
     }

     async fillContactZipCode (contactZip) {
         await this.contactZipCodeInput.fill(contactZip);
     }

     //Company address(dashboard)
     async fillStreet(street) {
         await this.streetInput.click();
         await this.streetInput.fill(street, { delay: 50 });
         await this.streetInput.press('Tab');
     }
   
     async fillCity(city) {
         await this.cityInput.click();
         await this.cityInput.fill(city, { delay: 50 });
         await this.cityInput.press('Tab');
     }

     async selectState(state) {
         await this.stateSelect.click();
         await this.stateSelect.selectOption(state, { delay: 50 });
         await this.stateSelect.press('Tab');
     }

     async fillZip(zip) {
         await this.zipInput.click();
         await this.zipInput.fill(zip, { delay: 50 });
         await this.zipInput.press('Tab');
     }

     async fillCompanyAddressInformation(contactStreet1, contactStreet2, contactCity, contactState, contactZip) {
        await this.fillContactStreet(contactStreet1);
        await this.fillContactStreetTwo(contactStreet2);
        await this.fillContactCity(contactCity);
        await this.selectContactState(contactState);
        await this.fillContactZipCode(contactZip);
     }

     async fillCompanyAddressForm(street, city, state, zip) {
        await this.fillStreet(street);
        await this.fillCity(city);
        await this.selectState(state);
        await this.fillZip(zip);
    }
     
}

module.exports = { CompanyAddressPage };