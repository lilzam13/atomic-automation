const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class AnnualReportPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        //Addtional information
        this.dateFormationInput = page.locator('#formation-date');

        //Taxpayer form
        this.taxPayerInput = page.locator('#taxpayer_number');
        this.webfileInput = page.locator('#webfile_number');
        this.totalRevenueInput = page.locator('#total_revenue');

    }

    async fillDateFormation(dateFormation) {
        await this.dateFormationInput.click();
        await this.dateFormationInput.type(dateFormation, { delay: 50 });
    }

    async fillTaxpayer(taxpayer) {
        await this.taxPayerInput.click();
        await this.taxPayerInput.type(taxpayer, { delay: 50 });
        await this.taxPayerInput.press('Tab');
    }


    async fillWebfile(webfile) {
        await this.webfileInput.click();
        await this.webfileInput.type(webfile, { delay: 50 });
        await this.webfileInput.press('Tab');
    }

    async fillTotalRevenue(totalRevenue) {
        await this.totalRevenueInput.click();
        await this.totalRevenueInput.fill(totalRevenue, { delay: 50 });
        await this.totalRevenueInput.press('Tab');
    }

    async fillTaxpayerForm(taxpayer, webfile) {
        await this.fillTaxpayer(taxpayer);
        await this.fillWebfile(webfile);
    }

}

module.exports = { AnnualReportPage };