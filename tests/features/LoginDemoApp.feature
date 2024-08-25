Feature: Login

 @login
    Scenario: Successful Login
        Given I am on the login tab
        When I complete the email field 
        When I complete the password field 
        Then I should see a Success alert
        And the alert should be closed when I click on OK