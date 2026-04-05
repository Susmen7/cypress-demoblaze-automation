describe('Login', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
  })

  it('should login with valid credentials', function() {

    // REGISTER
    cy.get('#signin2').click()
    cy.get('#sign-username').type(this.userData.username)
    cy.get('#sign-password').type(this.userData.password)
    cy.contains('Sign up').click()

    cy.on('window:alert', () => {})

    // WAIT FOR MODAL TO CLOSE
    cy.get('#signInModal', { timeout: 5000 })
      .should('not.be.visible')

    // LOGIN
    cy.get('#login2').click()
    cy.get('#loginusername').type(this.userData.username)
    cy.get('#loginpassword').type(this.userData.password)
    cy.contains('Log in').click()

    cy.contains(`Welcome ${this.userData.username}`, { timeout: 5000 })
      .should('be.visible')
  })

})
