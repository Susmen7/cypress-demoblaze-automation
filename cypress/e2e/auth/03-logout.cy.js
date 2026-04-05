describe('Logout', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
  })

  it('should logout successfully', function() {

    // REGISTER
    cy.request('POST', 'https://api.demoblaze.com/signup', {
      username: this.userData.username,
      password: this.userData.password
    })

    // LOGIN
    cy.request('POST', 'https://api.demoblaze.com/login', {
      username: this.userData.username,
      password: this.userData.password
    })

    cy.reload()

    cy.contains(`Welcome ${this.userData.username}`).should('be.visible')

    // LOGOUT (UI)
    cy.contains('Log out').click()

    cy.contains('Log in').should('be.visible')
  })

})
