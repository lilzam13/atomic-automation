const { PATHS } = require("../data/paths");
const { BasePage } = require("./BasePage");

class  OrderSummary extends BasePage{
     constructor(page) {
        super(page);
        this.page = page;
        //Step 1
        this.stateFeeLabel = page.locator('text=State Fee').locator('xpath=../..').locator('.statePrice');
        this.goodStandingLabel = page.locator('.item .value .goodStandPriceSpan');
        this.processingFeeLabel = page.locator('.processingFee');
        this.virtualAddressLabel = page.locator('.foreign-qualification-virtual-address-container .value');
        this.stepOneTotal = page.locator('.totaltext.totalPrice');
         
        //Step 2
        this.regAgentLabel = page.locator('.item .value .regagentFee');
        this.stepTwoTotal = page.locator('.totaltext.totalPrice');
     }

     async getOrderSummaryStepOne () {
         const stateFeeLabel = Number(await this.stateFeeLabel.textContent());
         const goodStandingLabel = Number(await this.goodStandingLabel.textContent());
         const processingFeeLabel = Number(await this.processingFeeLabel.textContent());
         const virtualAddressLabel =  await this.virtualAddressLabel.textContent();
         const virtualAddress = Number(virtualAddressLabel.replace('$', ''));
         const stepOneTotal = Number(await this.stepOneTotal.textContent());
         console.log(stateFeeLabel);
         console.log(processingFeeLabel);
         return{
            stateFeeLabel,
            goodStandingLabel,
            processingFeeLabel,
            virtualAddress,
            stepOneTotal
         }
     }
     async getOrderSummaryStepTwo () {
         const regAgentLabel = Number(await this.regAgentLabel.textContent());
         const stepTwoTotal = Number(await this.stepTwoTotal.textContent());
         return{
            regAgentLabel,
            stepTwoTotal
         }
     }
}

module.exports = { OrderSummary };