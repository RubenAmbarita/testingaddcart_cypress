describe("belanja", function () {
  it("tc-belanja-sebelum-login", function () {
      cy.visitweb()
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
      cy.wait(4000)
    //   cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.contains('Add to cart').click()
    cy.go('back')
  }),
  it("tc-belanja-sesudah-login", function () {
      cy.wait(5000)
      cy.login()
      cy.wait(5000)
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
      cy.wait(4000)
    //   cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.contains('Add to cart').click()
  })
});
