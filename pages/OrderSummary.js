const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class OrderSummary extends BasePage {
   constructor(page) {
      super(page);
      this.page = page;
      
      this.stateFeePrice = page.locator('.statePrice');
      this.goodStandingPrice = page.locator('.goodStandPriceSpan');
      this.processingFeePrice = page.locator('.processingFee');
      this.virtualAddressPrice = page.locator('.foreign-qualification-virtual-address-container div.value');
      this.regAgentLabel = page.locator('.item .value .regagentFee');
      this.totalPrice = page.locator('.totaltext.totalPrice').first();
   }

   async getStateFeePrice() {
      return Number(await this.stateFeePrice.innerText());
   }

   async getProcessingFeePrice() {
      return Number(await this.processingFeePrice.innerText());
   }

   async getVirtualAddressFeePrice() {
      const text = await this.virtualAddressPrice.innerText();
      const vaPrice = text.replace(/[^0-9]/g, "");
      return Number(vaPrice);  
   }

   async getGoodStandingFeePrice() {
      return Number(await this.goodStandingPrice.innerText());
   }

   async getRaFee() {
      return Number(await this.regAgentLabel.innerText());
   }

   async getTotalPrice() {
      return Number(await this.totalPrice.innerText());
   }
}

module.exports = { OrderSummary };