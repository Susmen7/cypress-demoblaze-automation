describe('Login', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
    cy.ensureNoModal()
  })

  it('should login with valid credentials', function() {

    // REGISTER USER
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

    cy.contains(`Welcome ${this.userData.username}`, { timeout: 5000 })
      .should('be.visible')
  })

})
