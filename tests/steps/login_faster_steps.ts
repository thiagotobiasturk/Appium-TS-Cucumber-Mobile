import { Given, Then, When } from "@cucumber/cucumber";
import Login from "../pageobjects/Login.page.js";

Given(/^I am on the login screen$/, async () => {
    await Login.openview();
});


When(/^I enter username "([^"]*)"$/, async (username) => {
    await Login.setUsername(username);
});

When(/^I tap the login button$/, async () => {
    await Login.submitLoginForm();
});

When(/^I enter password "([^"]*)"$/, async (password) => {
    await Login.setPassword(password);
});

Then(/^login is correct$/, async () => {
	await new Promise(resolve => setTimeout(resolve, 9000));
	await Login.loginsuccesfull();
});


Then(/^an error message is displayed$/, async () => {
	await new Promise(resolve => setTimeout(resolve, 9000));
	await Login.loginunsuccessful();
});

