describe('Logout', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
    cy.ensureNoModal()

    // WAIT FOR NAVBAR
    cy.get('#login2', { timeout: 8000 }).should('be.visible')
  })

  it('should logout successfully', function() {

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

    // LOGOUT
    cy.contains('Log out').click()

    cy.contains('Log in').should('be.visible')
  })

})
