const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class ThankYouPage extends BasePage {
   constructor(page) {
      super(page);
      this.page = page;
      this.thankyouLabel = page.locator('div.thankyou h2');
      this.finalTotalPrice = page.locator('.thankyou div.text-base span:nth-child(2)');
   }

   async getThankYouLabel() {
      const thankyouLabel = await this.thankyouLabel.textContent();
      return thankyouLabel;  
   }

   async getFinalTotalPrice() {
      const text = await this.finalTotalPrice.innerText();
      const finalTotalPrice = text.replace(/[^0-9]/g, "");
      return Number(finalTotalPrice);  
   }
}

module.exports = { ThankYouPage };