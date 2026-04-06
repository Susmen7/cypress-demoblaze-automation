describe('Add to cart', () => {

  beforeEach(() => {
    cy.visit('/')

    // backend musí načítať entries, inak UI nie je ready
    cy.intercept('GET', '**/entries').as('entries')
    cy.wait('@entries')
  })

  it('should login and add product to cart', () => {

    const username = 'patrik'     // existujúci user
    const password = 'test123'

    // LOGIN
    cy.get('#login2').click()
    cy.get('#logInModal').should('be.visible')
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal .btn-primary').click()

    cy.contains(`Welcome ${username}`, { timeout: 5000 })
      .should('be.visible')

    // ADD PRODUCT
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.include('Product added')
    })

    // NAVIGATE TO CART
    cy.contains('Cart').click()

    // ASSERT PRODUCT IS IN CART
    cy.contains('Samsung galaxy s6', { timeout: 5000 })
      .should('be.visible')
  })

})
