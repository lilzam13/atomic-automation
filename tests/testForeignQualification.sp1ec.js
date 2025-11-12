import { test, expect } from '@playwright/test';
import { CompanyInfPage } from '../pages/CompanyInfPage';
import { CompanyAddressPage } from '../pages/CompanyAddressPage';
import { MembersPage } from '../pages/MembersPage';
import { RegisteredAgentPage } from '../pages/RegisteredAgentPage';
import { BillingPage } from '../pages/BillingPage';


test.describe('Foreign Qualification Misc order', () => {
    let companyInfPage;
    let companyAddressPage;
    let membersPage;
    let registeredAgentPage;
    let billingPage;

    test.beforeEach(async ({page}) => {
      companyInfPage = new CompanyInfPage(page);
      companyAddressPage = new CompanyAddressPage(page);
      membersPage = new MembersPage(page);
      registeredAgentPage = new RegisteredAgentPage(page);
      billingPage = new BillingPage(page);

      await companyInfPage.goto();
    });

    test.afterEach(async ({page}) => {
      await page.waitForTimeout(5000);

    });

    test.skip('Foreign Qualification - should complete flow for LLC.', async() =>{
      await companyInfPage.fillContactInformation('Liliana', 'Zamora', 'one@example.com', '2015551234');
      await companyInfPage.fillCompanyInformation('LLC','Florida', 'California', 'FOREIGN KOMPANY','L.L.C.');
      await companyAddressPage.fillCompanyAddressInformation('Av 100', 'st 10', 'Fresnos', 'California', '90001');
      await membersPage.fillMembersInformation('1','Juan','Joe','Av 200', 'St 200', 'Santa Monica','California','90002');
      await billingPage.fillBillingCardInformation('Roel Torres', '4111111111111111', 'March', '2030','737');
      await billingPage.fillBillingAdressInformation('Av 200', 'St 300', 'Los Angeles','California','90003');
    });

    test.skip('Foreign Qualification - should complete flow without selecting Virtual Address service.', async() =>{
      await companyInfPage.fillContactInformation('Liliana', 'Zamora', 'one2@example.com', '2015551234');
      await companyInfPage.fillCompanyInformation('LLC','Florida', 'California', 'FOREIGN KOMPANY NOT VA','L.L.C.');
      await companyAddressPage.selectVirtualAddressNo();
      await companyAddressPage.fillCompanyAddressInformation('Av 100', 'st 10', 'Fresnos', 'California', '90001');
      await membersPage.fillMembersInformation('1','Juan','Joe','Av 200', 'St 200', 'Santa Monica','California','90002');
      await billingPage.fillBillingCardInformation('Roel Torres', '4111111111111111', 'March', '2030','737');
      await billingPage.fillBillingAdressInformation('Av 200', 'St 300', 'Los Angeles','California','90003');
    });

    test.skip('Foreign Qualification - should complete flow for a Corporation.', async() =>{
      await companyInfPage.fillContactInformation('Liliana', 'Zamora', 'one2@example.com', '2015551234');
      await companyInfPage.fillCompanyInformation('Corporation','Florida', 'Texas', 'FOREIGN KORP KOMPANY','INCORPORATED');
      await companyAddressPage.fillCompanyAddressInformation('Av 100', 'st 10', 'Fresnos', 'California', '90001');
      await membersPage.fillMembersInformation('1','Juan','Joe','Av 200', 'St 200', 'Santa Monica','California','90002');
      await billingPage.fillBillingCardInformation('Roel Torres', '4111111111111111', 'March', '2030','737');
      await billingPage.fillBillingAdressInformation('Av 200', 'St 300', 'Los Angeles','California','90003');
    });

    test.only('Foreign Qualification - should complete flow without Registered Agent service and selecting Company as RA.', async() =>{
      await companyInfPage.fillContactInformation('Liliana', 'Zamora', 'one2@example.com', '2015551234');
      await companyInfPage.fillCompanyInformation('Corporation','Florida', 'Texas', 'FOREIGN KORP KOMPANY','INCORPORATED');
      await companyAddressPage.fillCompanyAddressInformation('Av 100', 'st 10', 'Fresnos', 'California', '90001');
      await registeredAgentPage.fillRegAgentCompanyInf('AGENT KOMPS');
      await registeredAgentPage.fillRegAgentAddressInf('Av 100', 'st 10', 'Dallas', '75009');
      await membersPage.fillMembersInformation('1','Juan','Joe','Av 200', 'St 200', 'Santa Monica','California','90002');
      await billingPage.fillBillingCardInformation('Roel Torres', '4111111111111111', 'March', '2030','737');
      await billingPage.fillBillingAdressInformation('Av 200', 'St 300', 'Los Angeles','California','90003');
    });
});
  


