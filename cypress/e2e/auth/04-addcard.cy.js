describe('Add to cart', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
    cy.ensureNoModal()

    // WAIT FOR NAVBAR
    cy.get('#login2', { timeout: 8000 }).should('be.visible')
  })

  it('should login and add product to cart', function() {

    // REGISTER
    cy.get('#signin2').click()
    cy.get('#sign-username').type(this.userData.username)
    cy.get('#sign-password').type(this.userData.password)
    cy.contains('Sign up').click()

    cy.on('window:alert', () => {})

    // CLOSE SIGNUP MODAL
    cy.get('#signInModal .btn-secondary').click({ force: true })
    cy.get('#signInModal').should('not.be.visible')

    // LOGIN
    cy.login(this.userData.username, this.userData.password)

    cy.contains(`Welcome ${this.userData.username}`).should('be.visible')

    // ADD PRODUCT
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added')
    })
  })

})
