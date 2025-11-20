import { test, expect } from '@playwright/test';
import { CompanyInfPage } from '../pages/CompanyInfPage';
import { CompanyAddressPage } from '../pages/CompanyAddressPage';
import { MembersPage } from '../pages/MembersPage';
import { RegisteredAgentPage } from '../pages/RegisteredAgentPage';
import { BillingPage } from '../pages/BillingPage';
import { OrderSummary } from '../pages/OrderSummary';
import { userFactory } from '../utils/dataGenerator';

test.describe('Foreign Qualification Misc order', () => {
    let companyInfPage;
    let companyAddressPage;
    let membersPage;
    let registeredAgentPage;
    let billingPage;
    let orderSummary;

    test.beforeEach(async ({page}) => {
      companyInfPage = new CompanyInfPage(page);
      companyAddressPage = new CompanyAddressPage(page);
      membersPage = new MembersPage(page);
      registeredAgentPage = new RegisteredAgentPage(page);
      billingPage = new BillingPage(page);
      orderSummary = new OrderSummary(page);

      await companyInfPage.goto();
    });
/*
    test.afterEach(async ({page}) => {
      const thankyouLabel = await page.locator('div.thankyou h2').textContent();
      expect(thankyouLabel).toBe('Your order was successfully processed');
    });
*/
    test.only('Foreign Qualification - should complete flow without Registered Agent service and selecting Company as RA.', async({page}) =>{
      const user = userFactory('TX');

      await companyInfPage.fillContactInformation(user.firstName, user.lastName, user.email, '2015551234');
      let totalPrice = await orderSummary.getTotalPrice();
      expect(totalPrice).toBe(0);
      
      await companyInfPage.fillCompanyInformation('Corporation','Florida', 'Texas', 'FOREIGN KORP KMPANY','INCORPORATED');
      //await page.waitForLoadState('load');

      await page.waitForTimeout(5000);

      const stateFee = await orderSummary.getStateFeePrice();
      const processingFee = await orderSummary.getProcessingFeePrice();
      const virtualAddressFee = await orderSummary.getVirtualAddressFeePrice();
      const goodStandingFee = await orderSummary.getGoodStandingFeePrice();
      console.log(stateFee, processingFee, virtualAddressFee, goodStandingFee);


      /*
      const summary = await orderSummary.getOrderSummaryStepOne();
      const totalStepOne = summary.stateFeeLabel + summary.goodStandingLabel + summary.processingFeeLabel + summary.virtualAddress;
      expect(totalStepOne).toBe(summary.stepOneTotal);

      await companyAddressPage.fillCompanyAddressInformation(user.address, user.secondaryAddress, user.city, 'Texas', user.zipCode);
      await registeredAgentPage.fillRegAgentCompanyInf('AGENT KOMPS');
      await registeredAgentPage.fillRegAgentAddressInf(user.address, user.secondaryAddress, user.city, user.zipCode);
      
      const summarySecondPage = await orderSummary.getOrderSummaryStepTwo();
      const totalStepTwo = totalStepOne + Number(summarySecondPage.regAgentLabel);
      expect(totalStepTwo).toBe(summarySecondPage.stepTwoTotal);
      
      await membersPage.fillMembersInformation('1',user.firstName, user.lastName, user.address, user.secondaryAddress, 'Santa Monica','California','90002');
      await billingPage.fillBillingCardInformation(user.firstName + user.lastName, '4111111111111111', 'March', '2030','737');
      await billingPage.fillBillingAdressInformation(user.address, user.secondaryAddress, 'Los Angeles','California','90003');
      */
    });
});
  


