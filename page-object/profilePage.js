const { expect } = require("@playwright/test");
exports.ProfilePage = class ProfilePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.preferencesButton = page.locator("#pt-preferences");
    this.profileDropDown = page.locator("#vector-user-links-dropdown")
    this.header = page.locator("h1[class*='mw-first-heading']")
  }

  async clickOnProfileDropDown() {
    await this.profileDropDown.click({force: true});
  }

  async clickOnPreferencesButton() {
    await this.preferencesButton.click({force:true});
  }

  async landToPreferences() {
    await this.clickOnProfileDropDown();
    await this.clickOnPreferencesButton();
  }
};
