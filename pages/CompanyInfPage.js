const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class CompanyInfPage extends BasePage {
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
        this.stateFormationDropdown = page.locator('#entityState');
        this.stateQualificationDropdown = page.locator('#compState');

        this.stateServiceDropdown = page.locator('#serviceState');
        this.comNameInput = page.locator('#compName1');
        this.designatorDropdown = page.locator('#designator');

        this.finalCompNameLabel = page.locator('.final-name');

    }
    async fillContactFirstName(contactFirstName) {
        await this.contactFirstNameInput.fill(contactFirstName);
    }

    async fillContactLastName(contactLastName) {
        await this.contactLastNameInput.fill(contactLastName);
    }

    async fillContactEmail(contactEmail) {
        await this.contactEmailInput.fill(contactEmail);
    }

    async fillContactPhone(contactPhone) {
        await this.contactPhoneInput.fill(contactPhone);
    }

    async selectEntity(entity) {
        await this.entityDropdown.selectOption(entity);
    }

    async selectStateFormation(stateFormation) {
        await this.stateFormationDropdown.selectOption(stateFormation);
    }

    async selectStateQualification(stateQualification) {
        await this.stateQualificationDropdown.selectOption(stateQualification);
    }

    async selectStateService(stateService) {
        await this.stateServiceDropdown.selectOption(stateService);
    }

    async fillCompName(compName) {
        await this.comNameInput.fill(compName);
    }

    async selectDesignator(designator) {
        await this.designatorDropdown.selectOption(designator);
    }

    async displayFinalCompanyName() {
        return this.finalCompNameLabel;
    }

    async fillContactInformation(contactFirstName, contactLastName, contactEmail, contactPhone) {
        await this.fillContactFirstName(contactFirstName);
        await this.fillContactLastName(contactLastName);
        await this.fillContactEmail(contactEmail);
        await this.fillContactPhone(contactPhone);
    }

    async fillCompanyInformation(entityType, entityState, compState, compName1, designator, ghostFlow = true) {
        await this.selectEntity(entityType);
        await this.selectStateFormation(entityState);
        if (ghostFlow) {
            await this.selectStateService(compState);
        }
        else {
            await this.selectStateQualification(compState);
        }
        await this.fillCompName(compName1);
        await this.selectDesignator(designator);
    }
}

module.exports = { CompanyInfPage };