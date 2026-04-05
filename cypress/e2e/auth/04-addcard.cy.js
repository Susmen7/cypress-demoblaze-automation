describe('Add to cart', () => {

  beforeEach(function() {
    cy.fixture('user').then((user) => {
      this.userData = user

      cy.visit('/')

      // 1. Vyčisti localStorage
      cy.window().then((win) => {
        win.localStorage.clear()
      })

      // 2. Vyčisti backend košík
      cy.request('POST', 'https://api.demoblaze.com/deletecart', {
        cookie: user.username
      })
    })
  })

  it('should login and add product to cart', function() {
    cy.login(this.userData.username, this.userData.password)

    cy.get("[onclick=\"byCat('phone')\"]").click()

    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)

    cy.contains('HTC One M9')
      .should('be.visible')
      .click()

    cy.get('.col-sm-12 > .btn').click()

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added')
    })

    cy.get('#cartur').click()

    // Over, že je tam iba jeden produkt
    cy.get('#tbodyid tr').should('have.length', 1)
    
    cy.get('#totalp')
      .should('be.visible')

      cy.get('.col-lg-1 > .btn')
      .click()

cy.fillOrderForm({
  name: 'Deniska',
  country: 'Zabreh na Morave',
  city: 'Vaclavov',
  card: '1234 5678 9999',
  month: '77',
  year: '2032'
})
})
})  
