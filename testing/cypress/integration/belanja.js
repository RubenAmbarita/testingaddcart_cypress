describe("belanja", function () {
  it("tc-belanja-sebelum-login", function () {
      cy.visitweb()
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
      cy.wait(4000)
    //   cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.contains('Add to cart').click()
    cy.go('back')
    cy.get(':nth-child(4) > .nav-link').click()
    cy.contains('Place Order').click()
    cy.wait(5000)
    cy.get('#name').type('coba').should("have.value", "coba")
    cy.get('#country').type('coba1').should('have.value','coba1')
    cy.get('#city').type('coba2').should('have.value','coba2')
    cy.get('#card').type('123').should('have.value','123')
    cy.get('#month').type('12agustus').should('have.value','12agustus')
    cy.get('#year').type('2012').should('have.value','2012')
    cy.contains('Purchase').click()
    cy.get('.confirm').click()
    cy.go('back')
    cy.go('back')
  }),
  it("tc-belanja-sesudah-login", function () {
      cy.wait(5000)
      cy.login()
      cy.wait(5000)
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
      cy.wait(4000)
    cy.contains('Add to cart').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.contains('Place Order').click()
    cy.wait(5000)
    cy.get('#name').type('coba').should("have.value", "coba")
    cy.get('#country').type('coba1').should('have.value','coba1')
    cy.get('#city').type('coba2').should('have.value','coba2')
    cy.get('#card').type('123').should('have.value','123')
    cy.get('#month').type('12agustus').should('have.value','12agustus')
    cy.get('#year').type('2012').should('have.value','2012')
    cy.contains('Purchase').click()
    cy.get('.confirm').click()
    cy.go('back')
    cy.go('back')
  })
});
