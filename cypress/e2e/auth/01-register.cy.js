// trigger CI

describe('Register', () => {
  it('should register a new user', () => {
    const username = 'patrik' + Math.floor(Math.random() * 100)
    const password = 'test123'

    cy.visit('/')

    cy.get('#signin2').click()
    cy.get('#signInModal').should('be.visible')

    cy.get('#sign-username').should('be.visible').type(username)
    cy.get('#sign-password').should('be.visible').type(password)

    cy.contains('Sign up').click()

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Sign up successful.')
    })

    cy.writeFile('cypress/fixtures/user.json', {
      username,
      password
    })
  })
})

