describe('Demoblaze - Home Page', () => {

  it('should load homepage', () => {
    cy.visit('/')
    cy.contains('PRODUCT STORE').should('be.visible')
  })

})
