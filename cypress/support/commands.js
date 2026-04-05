// GLOBAL FIX – CLOSE ANY OPEN MODALS BEFORE ANY ACTION
Cypress.Commands.add('ensureNoModal', () => {
  cy.get('body').then($body => {
    if ($body.find('.modal.show').length) {
      cy.get('.modal.show .btn-secondary').click({ force: true })
    }
  })

  cy.get('.modal.show', { timeout: 5000 }).should('not.exist')
})


// LOGIN COMMAND
Cypress.Commands.add('login', (username, password) => {

  // ALWAYS ENSURE NO MODAL IS OPEN
  cy.ensureNoModal()

  // OPEN LOGIN MODAL
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
