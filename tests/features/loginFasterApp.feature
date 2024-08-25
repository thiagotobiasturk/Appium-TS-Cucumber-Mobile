@all
Feature: Login to Mobile Application

  As a user of the mobile application
  I want to be able to log in with valid credentials
  And see an error message with invalid credentials

  @test1
  Scenario: Successful Login with Valid Credentials
    Given I am on the login screen
    When I enter username "chalm+2@temperies.com"
    And I tap the login button
    And I enter password "fatloss123"
    And I tap the login button
    Then login is correct

  @test2
  Scenario: Unsuccessful Login with Invalid Credentials
    Given I am on the login screen
    When I enter username "chalm+2@temperies.com"
    And I tap the login button
    And I enter password "fatloss1234"
    And I tap the login button
    Then an error message is displayed
