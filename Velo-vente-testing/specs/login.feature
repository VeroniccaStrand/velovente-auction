Feature: User Login

  Scenario: Successful Login
    Given I am on the home page
    When I click on My Account Link
    Then I should be redirected to loginPage
    And I should be able to log in using valid credentials