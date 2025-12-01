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
        await this.dateFormationInput.fill(dateFormation);
    }

    async fillTaxpayer(taxpayer) {
        await this.taxPayerInput.fill(taxpayer);
    }

    async fillWebfile(webfile) {
        await this.webfileInput.fill(webfile);
    }

    async fillTotalRevenue(totalRevenue) {
        await this.totalRevenueInput.fill(totalRevenue);
    }

    async fillTaxpayerForm(taxpayer, webfile) {
        await this.fillTaxpayer(taxpayer);
        await this.fillWebfile(webfile);
    }

}

module.exports = { AnnualReportPage };