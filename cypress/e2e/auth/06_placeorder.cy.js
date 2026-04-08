describe('Place order', () => {
  it('should login, add product to cart and complete purchase', () => {

    cy.fixture('user').then(({ username, password }) => {

      // Visit homepage
      cy.visit('/');

      // Login
      cy.get('#login2').click();
      cy.get('#loginusername').should('be.visible').type(username);
      cy.get('#loginpassword').type(password);
      cy.get('#logInModal .btn-primary')
        .should('be.visible')
        .click();

      // Verify login
      cy.contains(`Welcome ${username}`, { timeout: 8000 }).should('be.visible');

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

      // Click Place Order
      cy.contains('Place Order').click();

      // Fill order form
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

      // Extract order ID (optional)
      cy.get('.sweet-alert p')
        .invoke('text')
        .then((text) => {
          const orderId = text.match(/Id: (\d+)/)[1];
          expect(orderId).to.match(/^\d+$/);
        });

    
// Close modal (force because Demoblaze is buggy)
cy.get('.confirm').click({ force: true });

// Logout
cy.contains('Log out').click();


    });
  });
});
