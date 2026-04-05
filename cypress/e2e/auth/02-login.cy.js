describe('Login', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
  })

  it('should login with valid credentials', function() {
    cy.login(this.userData.username, this.userData.password)

cy.wait(1000) // backend potrebuje čas uložiť používateľa



    cy.contains(`Welcome ${this.userData.username}`, { timeout: 5000 })
      .should('be.visible')
  })

})
