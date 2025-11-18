import { test, expect } from '@playwright/test';
import { CompanyInfPage } from '../pages/CompanyInfPage';
import { CompanyAddressPage } from '../pages/CompanyAddressPage';
import { MembersPage } from '../pages/MembersPage';
import { RegisteredAgentPage } from '../pages/RegisteredAgentPage';
import { BillingPage } from '../pages/BillingPage';
import { OrderSummary } from '../pages/OrderSummary';


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

    test.skip('Foreign Qualification - should complete flow without Registered Agent service and selecting Company as RA.', async() =>{
      await companyInfPage.fillContactInformation('Liliana', 'Zamora', 'oneaa6@example.com', '2015551234');
      await companyInfPage.fillCompanyInformation('Corporation','Florida', 'Texas', 'FOREIGN KORP KOMPANY','INCORPORATED');

      const summary = await orderSummary.getOrderSummaryStepOne();
      const totalStepOne = summary.stateFeeLabel + summary.goodStandingLabel + summary.processingFeeLabel + summary.virtualAddress;
       
      expect(totalStepOne).toBe(summary.stepOneTotal);
      await companyAddressPage.fillCompanyAddressInformation('Av 100', 'st 10', 'Fresnos', 'California', '90001');
      await registeredAgentPage.fillRegAgentCompanyInf('AGENT KOMPS');
      await registeredAgentPage.fillRegAgentAddressInf('Av 100', 'st 10', 'Dallas', '75009');

      const summarySecondPage = await orderSummary.getOrderSummaryStepTwo();
      const totalStepTwo = totalStepOne + Number(summarySecondPage.regAgentLabel);
      expect(totalStepTwo).toBe(summarySecondPage.stepTwoTotal);

    });
});
  


