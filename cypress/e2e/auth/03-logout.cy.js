describe('Logout', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
  })

  it('should logout successfully', function() {

    // REGISTER
    cy.get('#signin2').click()
    cy.get('#sign-username').type(this.userData.username)
    cy.get('#sign-password').type(this.userData.password)
    cy.contains('Sign up').click()
    cy.on('window:alert', () => {})

    cy.wait(1000)

    // LOGIN
    cy.login(this.userData.username, this.userData.password)

    cy.contains(`Welcome ${this.userData.username}`).should('be.visible')

    // LOGOUT
    cy.contains('Log out').click()

    cy.contains('Log in').should('be.visible')
  })

})
