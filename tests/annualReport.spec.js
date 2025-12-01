import { test, expect } from '@playwright/test';
import { PATHS } from '../data/paths';
import { BasePage } from '../pages/BasePage';
import { CompanyInfPage } from '../pages/CompanyInfPage';
import { CompanyAddressPage } from '../pages/CompanyAddressPage';
import { RegisteredAgentPage } from '../pages/RegisteredAgentPage';
import { MembersPage } from '../pages/MembersPage';
import { BillingPage } from '../pages/BillingPage';
import { ThankYouPage } from '../pages/ThankYouPage';
import { OrderSummary } from '../pages/OrderSummary';
import { billingFactory, userFactory, regAgentFactory, membersFactory} from '../utils/dataGenerator';
import { ENTITY_TYPE, DESIGNATOR_CORP, CARDS, PHONE } from '../data/constants';
import { THANK_YOU } from '../data/labels';
import { BottomPage } from '../pages/BottomPage';
import { HeaderPage } from '../pages/HeaderPage';
import { AnnualReportPage } from '../pages/AnnualReportPage';

test.describe('Annual report Misc order', () => {
  let basePage;
  let companyInfPage;
  let companyAddressPage;
  let regAgentPage;
  let memberPage;
  let billingPage;
  let thankYouPage;
  let orderSummary;
  let headerPage;
  let bottomPage;
  let annualReportPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    companyInfPage = new CompanyInfPage(page);
    companyAddressPage = new CompanyAddressPage(page);
    regAgentPage = new RegisteredAgentPage(page);
    memberPage = new MembersPage(page);
    billingPage = new BillingPage(page);
    thankYouPage = new ThankYouPage(page);
    orderSummary = new OrderSummary(page);
    headerPage = new HeaderPage(page);
    bottomPage = new BottomPage(page);
    annualReportPage = new AnnualReportPage(page);

    await basePage.goto(PATHS.annualReport);
  });

  test.afterEach(async () => {
    const thankyouLabel = await thankYouPage.getThankYouGhostLabel();
    expect(thankyouLabel).toBe(THANK_YOU.COMPLETED_GHOST);
    await headerPage.clickLogOut();
  });

  test('Annual Report - should complete flow selecting "Texas" as state of service.', async ({ page }) => {
    const user = userFactory('TX');
    const billing = billingFactory('TX');
    const regAgent = regAgentFactory('TX');
    const member = membersFactory('TX');
    const stateFormation = 'Florida';
    const stateService = 'Texas';

    await companyInfPage.fillContactInformation(user.firstName, user.lastName, user.email, PHONE.NUMBER);
    await bottomPage.clickBillingAgreePolicy();
    await bottomPage.clickNextStepOne();

    const logoutLink = headerPage.getLogoutLink();
    expect(logoutLink).toBeVisible();
    let totalPrice = await orderSummary.getTotalPrice();
    expect(totalPrice).toBe(0);

    await companyInfPage.fillCompanyInformation(ENTITY_TYPE.CORPORATION, stateFormation, stateService, 'tesssss', DESIGNATOR_CORP.CORPORATION, true);
    let finalCompName = await companyInfPage.displayFinalCompanyName()
    expect(finalCompName).toBeVisible();

    await companyAddressPage.fillCompanyAddressForm(user.address, user.city, stateService, '75009');

    await annualReportPage.fillDateFormation('05072024');

    await regAgentPage.fillRegAgentIndividual(regAgent.firstName, regAgent.lastName);
    await regAgentPage.fillRegAgentAddress(regAgent.address, regAgent.secondAddress, regAgent.city, '75009');

    await memberPage.fillMembersInformation(member.firstName, member.lastName, member.address, member.secondAddress, member.city, stateService, member.zipCode);

    await annualReportPage.fillTaxpayerForm('88899977708', 'gh888888')

    const processingFee = await orderSummary.getProcessingFeeMiscPrice();
    const stateFee = await orderSummary.getStateFeeMiscPrice();
    totalPrice = await orderSummary.getTotalPrice();
    const sumItemSummary = stateFee + processingFee;
    expect(totalPrice).toBe(sumItemSummary);

    await billingPage.fillBillingCard(billing.firstName + ' ' + billing.lastName, CARDS.VISA, billing.expiryMonth, billing.expiryYear, billing.cvv);
    await billingPage.fillBillingAddress(billing.address, billing.secondAddress, billing.city, stateService, billing.zipCode);
    await billingPage.completePayment(true);
  });
});



