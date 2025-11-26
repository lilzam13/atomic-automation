const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class HeaderPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        this.logoutLink = page.locator('a.logout');
    }

     getLogoutLink () {
         return this.logoutLink;
     }
}

module.exports = { HeaderPage };