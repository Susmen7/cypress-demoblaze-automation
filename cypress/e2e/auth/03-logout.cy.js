describe('loguout', () => {

  beforeEach(function() {
    cy.fixture('user').as('userData')
    cy.visit('/')

  })

      it('should logout successfully', function() {
    // 1. Login
    cy.login(this.userData.username, this.userData.password)

    // 2. Overíme, že login prebehol
    cy.contains(`Welcome ${this.userData.username}`, { timeout: 8000 })
      .should('be.visible')
      
    cy.get('#logout2')
       .click()

           // Overenie odhlásenia
    cy.get('#login2')
       .should('be.visible')
    cy.get('#signin2')
       .should('be.visible')
    cy.contains(`Welcome ${this.userData.username}`).should('not.exist')
       
    })
    })