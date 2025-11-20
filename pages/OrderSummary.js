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
      this.totalPrice = page.locator('.totaltext.totalPrice');

      this.regAgentLabel = page.locator('.item .value .regagentFee');
      this.stepTwoTotal = page.locator('.totaltext.totalPrice');
   }

   async getStateFeePrice() {
      return Number(await this.stateFeePrice.innerText());
   }

   async getProcessingFeePrice() {
      return Number(await this.processingFeePrice.innerText());
   }

   async getVirtualAddressFeePrice() {
      return Number(await this.virtualAddressPrice.innerText());
   }

   async getGoodStandingFeePrice() {
      return Number(await this.goodStandingPrice.innerText());
   }

   async getTotalPrice() {
      return Number(await this.totalPrice.innerText());
   }

}

module.exports = { OrderSummary };