import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Step Definitions for the Login Scenario
Given('I am on the home page', () => {
  // Visit the homepage
  cy.visit('/');
});

When('I click on My Account Link', () => {
  // Click on the "My Account" link in the Navbar
  cy.contains('My Account').click();
});

Then('I should be redirected to loginPage', () => {
  // Verify that we are redirected to the login page
  cy.url().should('include', '/account/login');
});

Then('I should be able to log in using valid credentials', () => {
  // Fill in the login form with valid credentials
  cy.get('input[placeholder="Email"]').type('veronica@example.com'); // Enter valid email
  cy.get('input[placeholder="Password"]').type('123'); // Enter valid password

  // Submit the login form
  cy.contains('Log in').click();

  // Verify that we are redirected to the profile page after successful login
  cy.url().should('include', '/profile');

 
});
