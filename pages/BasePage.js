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

  async goto(path) {
    await this.page.goto(path);
  }
}

module.exports = { BasePage };