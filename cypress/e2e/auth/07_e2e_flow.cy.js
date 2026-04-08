describe('Full E2E purchase flow', () => {
  it('should register, login, add product, purchase and logout', () => {

    cy.fixture('user').then(({ username, password }) => {

      // Generate unique username for CI
      const uniqueUser = `user_${Date.now()}_${Math.floor(Math.random() * 1_000_000_000)}`;

      // GLOBAL ALERT HANDLER (jediný, spoločný)
      cy.on('window:alert', (text) => {
        expect(text).to.match(
          /Sign up successful|This user already exist|Product added|Wrong password|Please fill out Username and Password/
        );
      });

      // Visit homepage
      cy.visit('/');

      //
      // REGISTER USER
      //
      cy.get('#signin2').click();
      cy.get('#signInModal').should('be.visible');
      cy.get('#sign-username').type(uniqueUser, { delay: 50 });
      cy.get('#sign-password').type(password, { delay: 50 });
      cy.get('#signInModal .btn-primary').click();

      cy.get('#signInModal').should('not.be.visible');

      //
      // LOGIN
      //
      cy.get('#login2').click();
      cy.get('#logInModal').should('be.visible');
      cy.get('#loginusername').type(uniqueUser, { delay: 50 });
      cy.get('#loginpassword').type(password, { delay: 50 });
      cy.get('#logInModal .btn-primary').click();

      cy.contains(`Welcome ${uniqueUser}`, { timeout: 15000 }).should('be.visible');

      //
      // OPEN PRODUCT
      //
      cy.get('.hrefch').first().click();

      //
      // ADD TO CART
      //
      cy.contains('Add to cart').click();

      //
      // GO TO CART
      //
      cy.get('#cartur').click();

      //
      // PLACE ORDER
      //
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

      //
      // VERIFY CONFIRMATION
      //
      cy.get('.sweet-alert').should('be.visible');
      cy.contains('Thank you for your purchase!').should('be.visible');

      cy.get('.sweet-alert p')
        .invoke('text')
        .then((text) => {
          const orderId = text.match(/Id: (\d+)/)[1];
          expect(orderId).to.match(/^\d+$/);
        });

      cy.get('.confirm').click({ force: true });

      cy.get('.sweet-alert').should('not.exist');

      //
      // LOGOUT
      //
      cy.contains('Log out').click({ force: true });
    });
  });
});
