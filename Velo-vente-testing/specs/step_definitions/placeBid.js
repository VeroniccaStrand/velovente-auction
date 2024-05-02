import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged in', () => {
  // Implementera inloggning eller använd en befintlig inloggningsmekanism
  // Exempel: cy.login(username, password);
  cy.visit('/');
  cy.contains('My Account').click();
  cy.url().should('include', '/account/login');
  cy.get('input[placeholder="Email"]').type('ida@gmail.com'); // Enter valid email
  cy.get('input[placeholder="Password"]').type('123');
  cy.contains('Log in').click();
  cy.url().should('include', '/profile');
});
Then('enter firstpage'), () => {
  cy.contains('velo vente').click();
}
When('I navigate to the Auction Hub', () => {
  // Klicka på dropdown-knappen för att öppna menyn
  cy.get('.dropdown').click(); // Anpassa CSS-selektorn till din specifika dropdown

  // Klicka på "Auction Hub" -länken inom dropdown-menyn
  cy.get('.dropdown-content').contains('Auction hub').click(); // Anpassa CSS-selektorn och länktexten

  // Alternativt, om du vill klicka direkt på länken utan att öppna dropdown-menyn:
  // cy.contains('Auction hub').click();
});

Then('I should be redirected to the Auction Hub page', () => {
  // Verifiera att användaren har omdirigerats till sidan /auctionhub
  cy.url().should('include', '/auctionhub');
});

When('I select \'More Info\' for a specific product', () => {
  // Klicka på "More Info" för den första produkten på sidan
  cy.get('a.bg-orange-500').first().invoke('attr', 'href').then((href) => {
    // Navigera till produktens detaljsida genom att besöka den URL som är associerad med länken
    cy.visit(href);
  });
  });

Then('I enter a bid higher than the current highest bid', () => {
  // Ange ett högre bud än det aktuella högsta budet
  cy.get('input[name="amount"]').clear().type('10000'); // Ange det önskade budbeloppet
});

Then('I press the Place Bid button', () => {
  cy.get('button.btn.bg-orange-950').contains('Place bid').click();
});
