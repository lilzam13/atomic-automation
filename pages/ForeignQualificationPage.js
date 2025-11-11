const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class  ForeignQualificationPage extends BasePage{
     constructor(page) {
        super(page);
        this.page = page;

        //Contact inf
        this.contactFirstNameInput = page.locator('#contactFirstName');
        this.contactLastNameInput = page.locator('#contactLastName');
        this.contactEmailInput = page.locator('#contactEmail');
        this.contactPhoneInput = page.locator('#contactPhone');

        //Company inf
        this.entityDropdown = page.locator('#entityType');
        this.stateOfFormationDropdown = page.locator('#entityState');
        this.stateOfQualificationDropdown = page.locator('#compState');
        this.comNameInput = page.locator('#compName1');
        this.designatorDropdown = page.locator('#designator');

        //Contact address
        this.streetOneInput = page.locator('#contactStreet1');
        this.streetTwoInput = page.locator('#contactStreet2');
        this.cityInput = page.locator('#contactCity');
        this.stateDropdown = page.locator('#contactState');
        this.zipCodeInput = page.locator('#contactZip');
        
        //Next step 1
        this.nextStepOnebutton = page.locator('button[type="submit"]');
        this.backStepOneButton = page.locator('.backbtn');

        //Registered Agent information
        this.raYesRadio = page.locator('#r1');
        this.raNoRadio = page.locator('#r2');
        
        //Registered agent No(individual/company)
        this.raIndRadio = page.locator('#act-individual');
        this.raCompRadio = page.locator('#act-company');

        //Individual
        this.raFirstNameInput = page.locator('#agentFirstName');
        this.raLastNameInput = page.locator('#agentLastName');
        this.addressRAHelpCheckbox = page.locator('#use-contact-name');

        this.raStret1Input = page.locator('#agentStreet1');
        this.raStret2Input = page.locator('#agentStreet2');
        this.raCityInput = page.locator('#agentCity');
        this.raStateDropdown = page.locator('#f_agentState');
        this.raZipcodeInput = page.locator('#agentZip');

        //Company
        this.raCompNameInput = page.locator('#agentComp');
        this.raRepresentativeFirstNameInput = page.locator('#authorized_person_fname');
        this.raRepresentativeLastNameInput = page.locator('#authorized_person_lname');

        //Members information
        this.numMembersDropdown = page.locator('#number_of_mems');
        this.membersIndRadio = page.locator('#pres-individual-radio');
        this.membersCompRadio = page.locator('#pres-company-radio');
        this.addressMemberHelpCheckbox = page.locator('#first-member-use-contact-name');

        //Member 1
        this.member1FirstNameInput = page.locator('#presFirstName');
        this.member1LastNameInput = page.locator('#presLastName');
        this.member1Stret1Input = page.locator('#presStreet1');
        this.member1Stret2Input = page.locator('#presStreet2');
        this.member1CityInput = page.locator('#presCity');
        this.member1StateDropdown = page.locator('#presState');
        this.member1ZipCodeInput = page.locator('#presZip');
        //Additional fields
        this.member1NameCompInput = page.locator('#presCompName');
        this.member1RepresentativeInput = page.locator('#presPersonSign');

        //Next step 
        this.nextStepTwoButton = page.locator('#js_btn_next');
        this.backStepTwoButton = page.locator('.backbtn');

        //Billing page
        //Billing card information
        this.cardFullNameInput = page.locator('#cardFullName');
        this.cardNumberInput = page.locator('#cardNumber');
        this.cardNumberDropdown = page.locator('#cardExpMonth');
        this.cardNumberDropdown  = page.locator('#cardExpYear');

        //Billing address
        this.billingCountryDropdown = page.locator('#country');
        this.billingStreet1Input = page.locator('[placeholder="Street Address"]');
        this.billingStreet2Input = page.locator('[placeholder="Address (Cont)"]');
        this.billingCityInput = page.locator('[placeholder="City"]');
        this.billingStateDropdown = page.locator('#card[address][state]');
        this.billingZipInput = page.locator('[placeholder="ZIP Code"]');

        this.billingAgreeCheckbox = page.locator('#c_agree');
        this.backBillingButton = page.locator('.backbtn');
        this.PayButton = page.locator('#payButton');
     }

     async goto (){
        await this.page.goto(PATHS.foreignQualification);
     }

     async fillContactFirstName (contactFirstName) {
         await this.contactFirstNameInput.fill(contactFirstName);
     }
     async fillContactLastName (contactLastName) {
         await this.contactLastNameInput.fill(contactLastName);
     }
     async fillContactEmail (contactEmail) {
         await this.contactEmailInput.fill(contactEmail);
     }
     async fillContactPhone (contactPhone) {
         await this.contactPhoneInput.fill(contactPhone);
     }

     
     async selectEntity (entity) {
         await this.entityDropdown.selectOption(entity);
     }
     async selectStateOfFormation (stateFormation) {
         await this.stateOfFormationDropdown.selectOption(stateFormation);
     }
     async selectStateOfQualification (stateQualification) {
         await this.stateOfQualificationDropdown.selectOption(stateQualification);
     }
     async fillCompName (compName) {
         await this.comNameInput.fill(compName);
     }
     async selectDesignator (designator) {
         await this.designatorDropdown.selectOption(designator);
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
     async ClickNextStepOne () {
         await this.nextStepOnebutton.click();
     }
     
     async selectNumberMembers (number_of_mems) {
         await this.numMembersDropdown.selectOption(number_of_mems);
     }
     async fillMember1FirstName (presFirstName) {
         await this.member1FirstNameInput.fill(presFirstName);
     }
     async fillMember1LastName (presLastName) {
         await this.member1LastNameInput.fill(presLastName);
     }
     async fillMember1StreetOne (presStreet1) {
         await this.member1Stret1Input.fill(presStreet1);
     }
     async fillMember1StreetTwo (presStreet2) {
         await this.member1Stret2Input.fill(presStreet2);
     }
     async fillMember1City (presCity) {
         await this.member1CityInput.fill(presCity);
     }
     async selectMember1State (presState) {
         await this.member1StateDropdown.selectOption(presState);
     }
     async fillMember1ZipCode (presZip) {
         await this.member1ZipCodeInput.fill(presZip);
     }
     async clickNextStepTwo () {
         await this.nextStepTwoButton.click();
     }


     async fillBillingFullName (cardFullName) {
         await this.cardFullNameInput.fill(cardFullName);
     }
     async fillBillingCardNumber (billingCardNum) {
        await this.cardNumberInput.fill(billingCardNum);
     }
     async fillBillingExpiryDate (billingExpiryDate) {
         await this.billingExpiryDate.fill(billingExpiryDate);
     }
     async fillBillingCvv (billingCvv) {
         await this.cardNumberInput.fill(billingCvv);
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
         await this.fillBillingPayButton.click();
     }


     async fillContactInformation(contactFirstName, contactLastName, contactEmail, contactPhone) {
        await this.fillContactFirstName(contactFirstName);
        await this.fillContactLastName(contactLastName);
        await this.fillContactEmail(contactEmail);
        await this.fillContactPhone(contactPhone);
     }
     async fillCompanyInformation(entityType, entityState, compState, compName1, designator) {
        await this.selectEntity(entityType);
        await this.selectStateOfFormation(entityState);
        await this.selectStateOfQualification(compState);
        await this.fillCompName(compName1);
        await this.selectDesignator(designator);
     }
     async fillCompanyAddressInformation(contactStreet1, contactStreet2, contactCity, contactState, contactZip) {
        await this.fillStreetOne(contactStreet1);
        await this.fillStreetTwo(contactStreet2);
        await this.fillCity(contactCity);
        await this.selectState(contactState);
        await this.fillZipCode(contactZip);
        await this.ClickNextStepOne();
     }
     async fillMembersInformation(number_of_mems,presFirstName, presLastName, presStreet1, presStreet2, presCity, presState, presZip) {
        await this.selectNumberMembers(number_of_mems);
        await this.fillMember1FirstName(presFirstName);
        await this.fillMember1LastName(presLastName);
        await this.fillMember1StreetOne(presStreet1);
        await this.fillMember1StreetTwo(presStreet2);
        await this.fillMember1City(presCity);
        await this.selectMember1State(presState);
        await this.fillMember1ZipCode(presZip);
        await this.clickNextStepTwo();
     }
     async fillBillingCardInformation(cardFullName, billingCardNum, billingExpiryDate, billingCvv) {
        await this.fillBillingFullName(cardFullName);
        await this.fillBillingCardNumber(billingCardNum);
        await this.fillBillingExpiryDate(billingExpiryDate);
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

module.exports = { ForeignQualificationPage };