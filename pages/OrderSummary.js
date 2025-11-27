const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class OrderSummary extends BasePage {
   constructor(page) {
      super(page);
      this.page = page;
      
      this.stateFeePrice = page.locator('.item .value span:nth-child(1)').first();
      this.processingFeePrice = page.locator('.bizeeFillingFee');
      this.totalPrice = page.locator('.totaltext.totalPrice');

      this.goodStandingPrice = page.locator('.goodStandPriceSpan');
      this.regAgentLabel = page.locator('.item .value .regagentFee');
      this.virtualAddressPrice = page.locator('.foreign-qualification-virtual-address-container div.value');
      this.stateFeeForeignQualPrice = page.locator('.statePrice');
      this.processingFeeForeignQualPrice = page.locator('.processingFee');
   }

   async getStateFeeMiscPrice() {
      const text = await this.stateFeePrice.innerText();
      const statePrice = text.replace(/[^0-9]/g, "");
      return Number(statePrice); 
   }

   async getProcessingFeeMiscPrice() {
      const text = await this.processingFeePrice.innerText();
      const processingPrice = text.replace(/[^0-9]/g, "");
      return Number(processingPrice); 
   }

   async getProcessingFeeForeignQualPrice() {
      return Number(await this.processingFeeForeignQualPrice.innerText());
   }

   async getStateFeeForeignQualPrice() {
      return Number(await this.stateFeeForeignQualPrice.innerText());
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