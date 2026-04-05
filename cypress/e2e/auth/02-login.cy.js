describe('Login', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
  })

  it('should login with API and verify UI', function() {

    // REGISTER USER VIA API
    cy.request('POST', 'https://api.demoblaze.com/signup', {
      username: this.userData.username,
      password: this.userData.password
    })

    // LOGIN VIA API
    cy.request('POST', 'https://api.demoblaze.com/login', {
      username: this.userData.username,
      password: this.userData.password
    })

    // VERIFY UI
    cy.reload()
    cy.contains(`Welcome ${this.userData.username}`, { timeout: 5000 })
      .should('be.visible')
  })

})
