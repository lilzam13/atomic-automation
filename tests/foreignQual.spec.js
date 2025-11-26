import { test, expect } from '@playwright/test';
import { PATHS } from '../data/paths';
import { BasePage } from '../pages/BasePage';
import { CompanyInfPage } from '../pages/CompanyInfPage';
import { CompanyAddressPage } from '../pages/CompanyAddressPage';
import { MembersPage } from '../pages/MembersPage';
import { RegisteredAgentPage } from '../pages/RegisteredAgentPage';
import { BillingPage } from '../pages/BillingPage';
import { ThankYouPage } from '../pages/ThankYouPage';
import { OrderSummary } from '../pages/OrderSummary';
import { billingFactory, userFactory, membersFactory } from '../utils/dataGenerator';
import { ENTITY_TYPE, DESIGNATOR, CARDS, PHONE } from '../data/constants';
import { THANK_YOU } from '../data/labels';

test.describe('Foreign Qualification Misc order', () => {
  let basePage;
  let companyInfPage;
  let companyAddressPage;
  let membersPage;
  let registeredAgentPage;
  let billingPage;
  let thankYouPage;
  let orderSummary;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    companyInfPage = new CompanyInfPage(page);
    companyAddressPage = new CompanyAddressPage(page);
    membersPage = new MembersPage(page);
    registeredAgentPage = new RegisteredAgentPage(page);
    billingPage = new BillingPage(page);
    thankYouPage = new ThankYouPage(page);
    orderSummary = new OrderSummary(page);

    await basePage.goto(PATHS.foreignQualification);
  });
/*
  test.afterEach(async () => {
    const thankyouLabel = await thankYouPage.getThankYouLabel();
    expect(thankyouLabel).toBe(THANK_YOU.COMPLETED_MSG);
  });
*/

  test.skip('Foreign Qualification - should complete flow without Registered Agent service and selecting Company as RA', async ({ page }) => {
    const user = userFactory('TX');
    const billing = billingFactory('TX');
    const member = membersFactory('TX');
    const stateFormation = 'Florida';
    const stateService = 'Texas';

    await companyInfPage.fillContactInformation(user.firstName, user.lastName, user.email, PHONE.NUMBER);
    let totalPrice = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(0);

    await companyInfPage.fillCompanyInformation(ENTITY_TYPE.CORPORATION, stateFormation, stateService, 'FOREIGN KORP WITH RA', DESIGNATOR.CORP, false);
    expect(companyInfPage.displayFinalCompanyName()).toBeVisible();
    await expect(orderSummary.processingFeePrice).not.toHaveText('0');

    const processingFee = await orderSummary.getProcessingFeePrice();
    const stateFee = await orderSummary.getStateFeePrice();
    const goodStandingFee = await orderSummary.getGoodStandingFeePrice();
    const virtualAddressFee = await orderSummary.getVirtualAddressFeePrice();

    totalPrice = await orderSummary.getTotalPrice();
    const sumItemSummary = stateFee + goodStandingFee + processingFee + virtualAddressFee;
    expect(totalPrice).toBe(sumItemSummary);

    await companyAddressPage.fillCompanyAddressInformation(user.address, user.secondAddress, user.city, stateService, user.zipCode);
    await membersPage.fillMembersInformation('1', member.firstName, member.lastName, member.address, member.secondAddress, member.city, stateService, member.zipCode);

    const raFee = await orderSummary.getRaFee();
    totalPrice = totalPrice + raFee;
    const totalAfterRa = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(totalAfterRa);

    await billingPage.fillBillingCardInformation(billing.firstName + ' ' + billing.lastName, CARDS.VISA, billing.expiryMonth, billing.expiryYear, billing.cvv);
    await billingPage.fillBillingAdressInformation(billing.address, billing.secondAddress, billing.city, stateService, billing.zipCode);
    const totalAfterBilling = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(totalAfterBilling);
    const finalTotalPrice = await thankYouPage.getFinalTotalPrice();
    expect(totalAfterBilling).toBe(finalTotalPrice);
  });
});



