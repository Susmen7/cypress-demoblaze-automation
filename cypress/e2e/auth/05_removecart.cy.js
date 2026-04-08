describe.skip('Remove from cart', () => {

  
  
    it.only('should login, add product and remove it from cart', () => {

    cy.fixture('user').then(({ username, password }) => {

      // Visit homepage
      cy.visit('/');

      // Login
      cy.get('#login2').click();
      cy.get('#loginusername').should('be.visible').type(username);
      cy.get('#loginpassword').type(password);

        cy.get('#logInModal .btn-primary').click()

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

      // Remove product
      cy.contains('Delete').click()
      cy.get('#tbodyid tr').should('have.length', 1)
      cy.contains('#tbodyid', 'Samsung').should('be.visible');


  
    })
})
    })
