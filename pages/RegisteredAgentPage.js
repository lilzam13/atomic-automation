const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class RegisteredAgentPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        //Registered Agent information
        this.regAgentYesRadio = page.locator('[for="r1"]');
        this.regAgentNoRadio = page.locator('[for="r2"]');

        //Registered agent No(individual/company)
        this.regAgentIndRadio = page.locator('#act-individual');
        this.regAgentCompRadio = page.locator('#act-company');

        //Change of Agent
        this.changeAgentCompRadio = page.locator('section:nth-child(3) .custom-radio:nth-child(2)');
        this.useAddressCheck = page.locator('#ra_checkbox_wrapper label');

        //Individual
        this.raFirstNameInput = page.locator('#agentFirstName');
        this.raLastNameInput = page.locator('#agentLastName');
        this.addressRAHelpCheckbox = page.locator('#use-contact-name');

        //Company
        this.regAgentCompNameInput = page.locator('#agentComp');
        this.authorizedFirstNameInput = page.locator('#authorized_person_fname');
        this.authorizedLastNameInput = page.locator('#authorized_person_lname');

        //Registered Agent Address
        this.raStretOneInput = page.locator('#agentStreet1');
        this.raStretTwoInput = page.locator('#agentStreet2');
        this.raCityInput = page.locator('#agentCity');
        this.raStateDropdown = page.locator('#f_agentState');
        this.raZipcodeInput = page.locator('#agentZip');
    }

    async selectRegAgentNo() {
        await this.regAgentNoRadio.click();
    }

    async selectRegAgentCompany() {
        await this.regAgentCompRadio.click();
    }

    async checkChangeAgentCompany() {
        await this.changeAgentCompRadio.click();
    }

    async checkUseAddress() {
        await this.useAddressCheck.click();
    }

    async fillRaFirstName(agentFirstName) {
        await this.raFirstNameInput.fill(agentFirstName);
    }

    async fillRaLastName(agentLastName) {
        await this.raLastNameInput.fill(agentLastName);
    }

    async fillRaCompanyName(agentComp) {
        await this.regAgentCompNameInput.fill(agentComp);
    }

    async fillAuthorizedFirstName(authorizedFirstName) {
        await this.authorizedFirstNameInput.fill(authorizedFirstName);
    }

    async fillAuthorizedLastName(authorizedLastName) {
        await this.authorizedLastNameInput.fill(authorizedLastName);
    }

    async fillRaStreetOne(agentStreet1) {
        await this.raStretOneInput.fill(agentStreet1);
    }

    async fillRaStreetTwo(agentStreet2) {
        await this.raStretTwoInput.fill(agentStreet2);
    }

    async fillRaCity(agentCity) {
        await this.raCityInput.fill(agentCity);
    }

    async selectRaState(agentState) {
        await this.raStateDropdown.selectOption(agentState);
    }

    async fillRaZipCode(agentZip) {
        await this.raZipcodeInput.fill(agentZip);
    }

    async fillRegAgentAddress(agentStreet1, agentStreet2, agentCity, agentZip) {
        await this.fillRaStreetOne(agentStreet1);
        await this.fillRaStreetTwo(agentStreet2);
        await this.fillRaCity(agentCity);
        await this.fillRaZipCode(agentZip);
    }

    async checkAgentTypeIndividual() {
        await this.selectRegAgentNo();
    }

    async fillRegAgentIndividual(agentFirstName, agentLastName) {
        await this.fillRaFirstName(agentFirstName);
        await this.fillRaLastName(agentLastName);
    }

    async fillRegAgentCompany(agentComp) {
        await this.selectRegAgentCompany();
        await this.fillRaCompanyName(agentComp);
    }

    async fillChangeAgentCompany(agentComp) {
        await this.checkChangeAgentCompany();
        await this.fillRaCompanyName(agentComp);
    }

    async fillAuthorizePerson(authorizedFirstName, authorizedLastName) {
        await this.fillAuthorizedFirstName(authorizedFirstName);
        await this.fillAuthorizedLastName(authorizedLastName);
    }
}

module.exports = { RegisteredAgentPage };