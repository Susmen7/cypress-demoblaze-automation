describe('Login', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
  })

  it('should login with valid credentials', function() {

    // REGISTER USER (works even if user already exists)
    cy.get('#signin2').click()
    cy.get('#sign-username').type(this.userData.username)
    cy.get('#sign-password').type(this.userData.password)
    cy.contains('Sign up').click()

    cy.on('window:alert', () => {}) // ignore "User already exists"

    cy.wait(1000)

    // LOGIN
    cy.login(this.userData.username, this.userData.password)

    cy.contains(`Welcome ${this.userData.username}`, { timeout: 5000 })
      .should('be.visible')
  })

})
