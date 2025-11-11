// @ts-check
import { test, expect } from '@playwright/test';
import { ForeignQualificationPage } from '../pages/ForeignQualificationPage';


test.describe('Foreign Qualification Misc order', () => {
    
    test.beforeEach(async ({page}) => {
      const foreignQualificationPage = new ForeignQualificationPage(page);
      await foreignQualificationPage.goto();
    });

    test('Foreign Qualification - LLC ', async({page}) =>{
      const foreignQualificationPage = new ForeignQualificationPage(page);

      await foreignQualificationPage.fillContactInformation('Liliana', 'Zamora', 'one@example.com', '2015551234');
      await foreignQualificationPage.fillCompanyInformation('LLC','Florida', 'California', 'FOREIGN KOMPANY','L.L.C.');
      await foreignQualificationPage.fillCompanyAddressInformation('Av 100', 'st 10', 'Fresnos', 'California', '90001');
      await foreignQualificationPage.fillMembersInformation('1','Juan','Joe','Av 200', 'St 200', 'Santa Monica','California','90002');
      await foreignQualificationPage.fillBillingCardInformation('Roel Torres', '4111111111111111', '03/30', '737');
      await foreignQualificationPage.fillBillingAdressInformation('Av 200', 'St 300', 'Los Angeles','California','90003');
    })
});
  


