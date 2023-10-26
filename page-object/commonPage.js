const { expect } = require('@playwright/test');

exports.CommonPage = class CommonPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator("#pt-login-2");
    this.wikiHeadLine = page.locator("#Welcome_to_Wikipedia");
    this.wikiLoginHeadLine = page.locator("h1[class*='firstHeading']")
  }

  async goto(url) {
    await this.page.goto(url = process.env.URL);
    expect(this.wikiHeadLine).toBeVisible();

  }

  async clickOnLoginButton() {
    await this.loginButton.click()
    expect(this.wikiLoginHeadLine).toBeVisible();

  }
};