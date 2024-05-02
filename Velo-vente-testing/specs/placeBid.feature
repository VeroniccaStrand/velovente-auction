Feature: Login and Place Bid
Scenario: Successful Login and Placing Bid
Given I am logged in 
When I navigate to the Auction Hub
Then I should be redirected to the Auction Hub page
When I select 'More Info' for a specific product
Then I enter a bid higher than the current highest bid
And I press the Place Bid button