import { Given, Then, When } from "@cucumber/cucumber";
import LoginDemoAppPage from "../pageobjects/LoginDemoApp.page.js";

const username = 'test@webdriver.io';
const password = 'Test1234!';

Given(/^I am on the login tab$/, async () => {
    await LoginDemoAppPage.openvieww();
    await new Promise(resolve => setTimeout(resolve, 9000));
    await LoginDemoAppPage.loginiconButton();
});


When(/^I complete the email field$/, async () => {
    await LoginDemoAppPage.setUsername(username);
});

When(/^I complete the password field$/, async () => {
	await LoginDemoAppPage.setPassword(password);
    await LoginDemoAppPage.submitLoginForm();
});


Then(/^I should see a Success alert$/, async() => {
	await LoginDemoAppPage.loginsuccesfull();
});

Then(/^the alert should be closed when I click on OK$/, async () => {
	await new Promise(resolve => setTimeout(resolve, 3000));
    await LoginDemoAppPage.okSucces();
});
