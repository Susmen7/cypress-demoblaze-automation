// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ...})
// LOGIN COMMAND
Cypress.Commands.add('login', (username, password) => {
  cy.get('#login2').click()

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


// FILL ORDER FORM COMMAND
Cypress.Commands.add('fillOrderForm', (data) => {
  cy.get('#name').type(data.name)
  cy.get('#country').type(data.country)
  cy.get('#city').type(data.city)
  cy.get('#card').type(data.card)
  cy.get('#month').type(data.month)
  cy.get('#year').type(data.year)
})
