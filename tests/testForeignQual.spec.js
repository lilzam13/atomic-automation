import { test, expect } from '@playwright/test';
import { CompanyInfPage } from '../pages/CompanyInfPage';
import { CompanyAddressPage } from '../pages/CompanyAddressPage';
import { MembersPage } from '../pages/MembersPage';
import { RegisteredAgentPage } from '../pages/RegisteredAgentPage';
import { BillingPage } from '../pages/BillingPage';
import { ThankYouPage } from '../pages/ThankYouPage';
import { OrderSummary } from '../pages/OrderSummary';
import { billingFactory, userFactory, membersFactory } from '../utils/dataGenerator';
import { ENTITY_TYPE, DESIGNATOR, CARDS } from '../data/constants';


test.describe('Foreign Qualification Misc order', () => {
  let companyInfPage;
  let companyAddressPage;
  let membersPage;
  let registeredAgentPage;
  let billingPage;
  let thankYouPage;
  let orderSummary;

  test.beforeEach(async ({ page }) => {
    companyInfPage = new CompanyInfPage(page);
    companyAddressPage = new CompanyAddressPage(page);
    membersPage = new MembersPage(page);
    registeredAgentPage = new RegisteredAgentPage(page);
    billingPage = new BillingPage(page);
    thankYouPage = new ThankYouPage(page);
    orderSummary = new OrderSummary(page);

    await companyInfPage.goto();
  });

  test.afterEach(async ({ page }) => {
    const thankyouLabel = await thankYouPage.getThankYouLabel();
    expect(thankyouLabel).toBe('Your order was successfully processed');
  });

  test.only('Foreign Qualification - should complete flow without Registered Agent service and selecting Company as RA.', async ({ page }) => {
    const user = userFactory('TX');
    const billing = billingFactory('TX');
    const member = membersFactory('TX');
    const state = 'Texas'

    await companyInfPage.fillContactInformation(user.firstName, user.lastName, user.email, '2015551234');
    let totalPrice = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(0);

    await companyInfPage.fillCompanyInformation(ENTITY_TYPE.CORPORATION, 'Florida', state, 'FOREIGN KORP WITH RA', DESIGNATOR.CORP);
    const compName = page.locator('.final-name');
    await expect(compName).toBeVisible();
    await expect(orderSummary.processingFeePrice).not.toHaveText('0');

    const processingFee = await orderSummary.getProcessingFeePrice();
    const stateFee = await orderSummary.getStateFeePrice();
    const goodStandingFee = await orderSummary.getGoodStandingFeePrice();
    const virtualAddressFee = await orderSummary.getVirtualAddressFeePrice();

    totalPrice = await orderSummary.getTotalPrice();
    const sumItemSummary = stateFee + goodStandingFee + processingFee + virtualAddressFee;
    expect(totalPrice).toBe(sumItemSummary);

    await companyAddressPage.fillCompanyAddressInformation(user.address, user.secondAddress, user.city, state, user.zipCode);
    await membersPage.fillMembersInformation('1', member.firstName, member.lastName, member.address, member.secondAddress, member.city, state, member.zipCode);

    const raFee = await orderSummary.getRaFee();
    totalPrice = totalPrice + raFee;
    const totalAfterRa = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(totalAfterRa);

    await billingPage.fillBillingCardInformation(billing.firstName + ' ' + billing.lastName, CARDS.VISA, billing.expiryMonth, billing.expiryYear, billing.cvv);
    await billingPage.fillBillingAdressInformation(billing.address, billing.secondAddress, billing.city, state, billing.zipCode);
    const totalAfterBilling = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(totalAfterBilling);
    const finalTotalPrice = await thankYouPage.getFinalTotalPrice();
    expect(totalAfterBilling).toBe(finalTotalPrice);
  });
});



