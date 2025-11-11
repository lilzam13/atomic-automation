// pages/BasePage.js
const { expect } = require('@playwright/test');
const { PATHS } = require('../data/paths');

class BasePage {
  constructor(page) {
    this.page = page;
  }
  async waitForElementToBeVisible(element) {
    return element.waitFor({ state: 'visible' });
  }
}

module.exports = { BasePage };