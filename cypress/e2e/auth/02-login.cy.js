describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should register and login with unique user', () => {

    const username = `user_${Date.now()}`
    const password = 'test123'

    // REGISTER
    cy.get('#signin2').click()
    cy.get('#sign-username').type(username)
    cy.get('#sign-password').type(password)
    cy.contains('Sign up').click()

    cy.on('window:alert', () => {})

    // CLOSE SIGNUP MODAL
    cy.get('#signInModal .btn-secondary').click({ force: true })
    cy.get('#signInModal').should('not.be.visible')

    // LOGIN
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.contains('Log in').click()

    cy.contains(`Welcome ${username}`, { timeout: 5000 })
      .should('be.visible')
  })

})
