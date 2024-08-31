Feature: User login process

  This feature describes the process for a user to log into the application. 
  It covers the steps required to navigate to the login screen, enter credentials, 
  and verify a successful login.
  
  Scenario: Successful login
    Given the user is on the home screen
    When the user navigates to the "webview"
    And the user performs a "swipe" action
    And the user selects the "login" option
    And the user enters "appium@gmail.com" into the email field
    And the user enters "password123" into the password field
    And I tap the login button
    Then the user should be successfully logged in and see the login success page
  