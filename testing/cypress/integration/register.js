describe("register", function () {
  it("tc-register", function () {
      cy.register()

    // Isi nama dan email, lalu klik button “email me!”.
    cy.wait(4000)
    cy.get('#sign-username').type("cobaja").should("have.value", "cobaja");
    cy.get('#sign-password').type("123").should("have.value", "123")
    // cy.get("#sign-password").type("123").should("have.value", "123");
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // cy.contains("Sign Up").click()
    // cy.get("#userEmail")
    //   .type("test@gmail.com")
    //   .should("have.value", "test@gmail.com");
  })
});
