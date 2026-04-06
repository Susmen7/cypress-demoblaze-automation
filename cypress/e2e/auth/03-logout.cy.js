describe('Logout', () => {

  beforeEach(() => {
    cy.visit('/')

    // počkaj kým backend načíta entries (stabilita)
    cy.intercept('GET', '**/entries').as('entries')
    cy.wait('@entries')
  })

  it('should login and logout with existing user', () => {

    const username = 'patrik'     // existujúci user
    const password = 'test123'

    // LOGIN
    cy.get('#login2').click()
    cy.get('#logInModal').should('be.visible')
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal .btn-primary').click()

    // ASSERT LOGIN SUCCESS
    cy.contains(`Welcome ${username}`, { timeout: 5000 })
      .should('be.visible')

    // LOGOUT
    cy.contains('Log out').click()

 
  })

})
