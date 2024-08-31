import { Given, Then, When } from "@cucumber/cucumber";
import Login from "../pageobjects/Login.page.js";
import Home from "../pageobjects/Home.page.js";
import { browser } from '@wdio/globals';



Given(/^the user is on the home screen$/, async () => {
    await Home.openHome();
    await Home.waitForTabBarShown();
});


When(/^the user navigates to the "([^"]*)"$/, async(page) => {
	await Home.waitForTabBarShown();
    await Home.openWebView();
    await new Promise(resolve => setTimeout(resolve, 7000));
   
});


When(/^the user selects the "([^"]*)" option$/, async(page) => {
	await Home.openLogin();
});


When(/^the user performs a "([^"]*)" action$/, async(page) => {
     await Home.openSwipe();	
});


When(/^the user enters "([^"]*)" into the email field$/, async (username) => {
    await Login.setUsername(username);

});

When(/^the user enters "([^"]*)" into the password field$/, async (password) => {
    await Login.setPassword(password);
});


When(/^I enter password "([^"]*)"$/, async (password) => {
    await Login.setPassword(password);
});

When(/^I tap the login button$/, async() => {
    await Login.submitLoginForm();
    await new Promise(resolve => setTimeout(resolve, 4000));

});


Then(/^the user should be successfully logged in and see the login success page$/, async() => {
	await Login.loginsuccesfull();
    await new Promise(resolve => setTimeout(resolve, 3000));
    await Login.okIconButton();
});


