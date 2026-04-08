describe.skip('Login only', () => {


  it('should login with existing user', () => {

    const username = 'patrik'
    const password = 'test123'

    cy.visit('/')

    // OPEN LOGIN MODAL
    cy.get('#login2').click()

    // WAIT FOR MODAL + INPUTS
    cy.get('#logInModal').should('be.visible')
    cy.get('#loginusername').should('be.visible')
    cy.get('#loginpassword').should('be.visible')

    // FILL LOGIN FORM
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)

    // SUBMIT LOGIN
    cy.get('#logInModal .btn-primary').click()

    // ASSERT LOGIN SUCCESS
    cy.contains(`Welcome ${username}`, { timeout: 5000 })
      .should('be.visible')
  })

})
