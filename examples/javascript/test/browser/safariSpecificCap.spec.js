const safari = require('selenium-webdriver/safari');
const {Builder, Browser} = require("selenium-webdriver");
const options = new safari.Options();
const process  =  require('node:process');

describe('Should be able to Test Command line arguments', function () {
  (process.platform === 'darwin' ? it : it.skip)('headless', async function () {
    let driver = new Builder()
      .forBrowser('safari')
      .setSafariOptions(options)
      .build();

    await driver.get('https://www.google.com');
    await driver.quit();
  });
}, { browsers: [Browser.SAFARI]});