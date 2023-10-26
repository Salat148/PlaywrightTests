const { expect } = require("@playwright/test");
exports.PreferencesPage = class PreferencesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.selectLanguageField = page.locator("select[name='wplanguage']");
    this.saveButton = page.locator("button[type='submit']")
  }

  async selectLanguage(lang) {
    await this.selectLanguageField.selectOption(lang);
  }

  async clickOnSaveButton() {
    await this.saveButton.click();
  }
};






