// LOGIN COMMAND
Cypress.Commands.add('login', (username, password) => {

  // CLOSE ANY OPEN MODALS FIRST
  cy.get('body').then($body => {
    if ($body.find('#signInModal.show').length) {
      cy.get('#signInModal .btn-secondary').click({ force: true })
    }
    if ($body.find('#logInModal.show').length) {
      cy.get('#logInModal .btn-secondary').click({ force: true })
    }
  })

  // WAIT UNTIL NO MODAL IS VISIBLE
  cy.get('.modal.show').should('not.exist')

  // NOW CLICK LOGIN BUTTON
  cy.get('#login2').click({ force: true })

  cy.get('#logInModal').should('be.visible')

  cy.get('#loginusername')
    .should('be.visible')
    .clear()
    .type(username)

  cy.get('#loginpassword')
    .should('be.visible')
    .clear()
    .type(password)

  cy.get('button[onclick="logIn()"]').click()
})
