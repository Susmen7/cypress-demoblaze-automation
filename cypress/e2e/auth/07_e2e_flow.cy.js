describe('Full E2E purchase flow', () => {
  it('should login, add product, purchase and logout', () => {

    cy.fixture('user').then(({ username, password }) => {

      // Visit homepage
      cy.visit('/');

      // Login (stabilná verzia pre CI)
      cy.get('#login2').click();

      // počkaj, kým sa modal naozaj otvorí
      cy.get('#logInModal').should('be.visible');
      cy.get('#loginusername').should('be.visible').type(username, { delay: 50 });
      cy.get('#loginpassword').should('be.visible').type(password, { delay: 50 });

      cy.get('#logInModal .btn-primary')
        .should('be.visible')
        .and('not.be.disabled')
        .click();

      // počkaj na login (CI potrebuje viac času)
      cy.contains(`Welcome ${username}`, { timeout: 15000 }).should('be.visible');

      // Open first product
      cy.get('.hrefch').first().click();

      // Add to cart
      cy.contains('Add to cart').click();

      // Confirm alert
      cy.on('window:alert', (text) => {
        expect(text).to.include('Product added');
      });

      // Go to cart
      cy.get('#cartur').click();

      // Place order
      cy.contains('Place Order').click();

      // Fill form
      cy.get('#name').type('Patrik Tester');
      cy.get('#country').type('Slovakia');
      cy.get('#city').type('Kosice');
      cy.get('#card').type('1234567890123456');
      cy.get('#month').type('12');
      cy.get('#year').type('2026');

      // Purchase
      cy.contains('Purchase').click();

      // Verify confirmation modal
      cy.get('.sweet-alert').should('be.visible');
      cy.contains('Thank you for your purchase!').should('be.visible');

      // Extract order ID
      cy.get('.sweet-alert p')
        .invoke('text')
        .then((text) => {
          const orderId = text.match(/Id: (\d+)/)[1];
          expect(orderId).to.match(/^\d+$/);
        });

      // Close modal (force because Demoblaze is buggy)
      cy.get('.confirm').click({ force: true });

      // Wait until modal is REALLY gone
      cy.get('.sweet-alert').should('not.exist');

      // Logout (force because modal sometimes leaves invisible overlay)
      cy.contains('Log out').click({ force: true });
    });
  });
});
