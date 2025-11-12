const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class  MembersPage extends BasePage{
     constructor(page) {
        super(page);
        this.page = page;

        //Members information
        this.numMembersDropdown = page.locator('#number_of_mems');
        this.memberIndRadio = page.locator('#pres-individual-radio');
        this.memberCompRadio = page.locator('#pres-company-radio');
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
     }

     async selectNumberMembers (numberMember) {
         await this.numMembersDropdown.selectOption(numberMember);
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

   async fillMembersInformation(numberMember,presFirstName, presLastName, presStreet1, presStreet2, presCity, presState, presZip) {
        await this.selectNumberMembers(numberMember);
        await this.fillMember1FirstName(presFirstName);
        await this.fillMember1LastName(presLastName);
        await this.fillMember1StreetOne(presStreet1);
        await this.fillMember1StreetTwo(presStreet2);
        await this.fillMember1City(presCity);
        await this.selectMember1State(presState);
        await this.fillMember1ZipCode(presZip);
        await this.clickNextStepTwo();
     }
}

module.exports = { MembersPage };