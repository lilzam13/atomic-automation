import { test, expect } from '@playwright/test';
import { PATHS } from '../data/paths';
import { BasePage } from '../pages/BasePage';
import { CompanyInfPage } from '../pages/CompanyInfPage';
import { CompanyAddressPage } from '../pages/CompanyAddressPage';
import { RegisteredAgentPage } from '../pages/RegisteredAgentPage';
import { BillingPage } from '../pages/BillingPage';
import { ThankYouPage } from '../pages/ThankYouPage';
import { OrderSummary } from '../pages/OrderSummary';
import { billingFactory, userFactory, regAgentFactory } from '../utils/dataGenerator';
import { ENTITY_TYPE, DESIGNATOR, CARDS, PHONE } from '../data/constants';
import { THANK_YOU } from '../data/labels';
import { BottomPage } from '../pages/BottomPage';
import { HeaderPage } from '../pages/HeaderPage';

test.describe('Change of Agent Misc order', () => {
  let basePage;
  let companyInfPage;
  let companyAddressPage;
  let regAgentPage;
  let billingPage;
  let thankYouPage;
  let orderSummary;
  let headerPage;
  let bottomPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    companyInfPage = new CompanyInfPage(page);
    companyAddressPage = new CompanyAddressPage(page);
    regAgentPage = new RegisteredAgentPage(page);
    billingPage = new BillingPage(page);
    thankYouPage = new ThankYouPage(page);
    orderSummary = new OrderSummary(page);
    headerPage = new HeaderPage(page);
    bottomPage = new BottomPage(page);
    await basePage.goto(PATHS.changeAgent);
  });
  test.afterEach(async () => {
    const thankyouLabel = await thankYouPage.getThankYouGhostLabel();
    expect(thankyouLabel).toBe(THANK_YOU.COMPLETED_GHOST);
  });

  test.only('Change of Agent - should complete flow selecting as Individual.', async ({ page }) => {
    const user = userFactory('TX');
    const billing = billingFactory('TX');
    const regAgent = regAgentFactory('TX');
    const stateFormation = 'Florida';
    const stateService = 'Texas';

    await companyInfPage.fillContactInformation(user.firstName, user.lastName, user.email, PHONE.NUMBER);
    await bottomPage.clickBillingAgreePolicy();
    await bottomPage.clickNextStepOne();

    const logoutLink = headerPage.getLogoutLink();
    expect(logoutLink).toBeVisible();
    let totalPrice = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(0);

    await companyInfPage.fillCompanyInformation(ENTITY_TYPE.CORPORATION, stateFormation, stateService, 'tesssss', DESIGNATOR.CORP, true);
    expect(companyInfPage.displayFinalCompanyName()).toBeVisible();

    const processingFee = await orderSummary.getProcessingFeeMiscPrice();
    const stateFee = await orderSummary.getStateFeeMiscPrice();
    totalPrice = await orderSummary.getTotalPrice();
    const sumItemSummary = stateFee +  processingFee;
    expect(totalPrice).toBe(sumItemSummary);

    await companyAddressPage.fillCompanyAddressInformation(user.address, user.secondAddress, user.city, stateService, '75009');
    await regAgentPage.fillRegAgentIndividual(regAgent.firstName, regAgent.lastName);
    await regAgentPage.fillRegAgentAddress(regAgent.address, regAgent.secondAddress, regAgent.city, '75009');

    await billingPage.fillBillingCardInformation(billing.firstName + ' ' + billing.lastName, CARDS.VISA, billing.expiryMonth, billing.expiryYear, billing.cvv);
    await billingPage.fillBillingAdressInformation(billing.address, billing.secondAddress, billing.city, stateService, billing.zipCode);
    await billingPage.completePayment(true);
  });
});



