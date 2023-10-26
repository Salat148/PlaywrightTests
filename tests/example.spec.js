// @ts-check
const { test, expect } = require("@playwright/test");
const { CommonPage } = require("../page-object/commonPage");
const { LogInPage } = require("../page-object/logInPage");
const { ProfilePage } = require("../page-object/profilePage");
const { PreferencesPage } = require("../page-object/preferencesPage");


test.afterEach(async ({ page })=>{
  const preferencesPage = new PreferencesPage(page);
  await preferencesPage.selectLanguage('en');
  await preferencesPage.clickOnSaveButton();
  const profilePage = new ProfilePage(page);
  await expect(profilePage.header).toHaveText('Preferences')
})

test("Change Language", async ({ page }) => {
  const commonPage = new CommonPage(page);
  await commonPage.goto();
  await commonPage.clickOnLoginButton();
  const logInPage = new LogInPage(page);
  await logInPage.logInToWiki();
  const profilePage = new ProfilePage(page);
  await profilePage.landToPreferences();
  await expect(profilePage.header).toHaveText('Preferences')
  const preferencesPage = new PreferencesPage(page);
  await preferencesPage.selectLanguage('uk');
  await preferencesPage.clickOnSaveButton();
  await expect(profilePage.header).toHaveText('Налаштування')
});



