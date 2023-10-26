const { expect } = require("@playwright/test");
exports.LogInPage = class LogInPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("#wpName1");
    this.passwField = page.locator("#wpPassword1");
    this.logInButton = page.locator("#wpLoginAttempt");
    this.validationError = page.locator("div[class='cdx-message__content']")
  }
  
  async fillUsernameField(username = process.env.USERNAME) {
    await this.usernameField.clear();
    await this.usernameField.fill(username);
  }

  async fillPassWordField(passw = process.env.PASSW) {
    await this.passwField.clear();
    await this.passwField.fill(passw);
  }

  async clickOnLogInButton() {
    await this.logInButton.click();
  }

  async logInToWiki() {
    await this.fillUsernameField();
    await this.fillPassWordField();
    await this.clickOnLogInButton();
  }
};
