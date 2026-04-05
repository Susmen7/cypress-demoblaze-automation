describe('Add to cart', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')
  })

  it('should add product to cart via API and verify UI', function() {

    // REGISTER
    cy.request('POST', 'https://api.demoblaze.com/signup', {
      username: this.userData.username,
      password: this.userData.password
    })

    // LOGIN
    cy.request('POST', 'https://api.demoblaze.com/login', {
      username: this.userData.username,
      password: this.userData.password
    })

    // ADD PRODUCT VIA API
    cy.request('POST', 'https://api.demoblaze.com/addtocart', {
      id: 1,
      cookie: "user=" + this.userData.username,
      prod_id: 1,
      flag: true
    })

    // VERIFY UI
    cy.visit('/cart.html')

    cy.contains('Samsung galaxy s6').should('be.visible')
  })

})
