describe("Aserciones", () => {
    beforeEach(() => {
        cy.visit("/automation-practice-form")
    })

    it("Asercion", () => {
        cy.url().should("include", "demoqa.com")
        cy.get("#firstName").should("be.visible").should("have.attr", "placeholder", "First Name")

    })

    it("Asercion 2", () => {
        cy.url().should("include", "demoqa.com")
        cy.get("#firstName").then((element) => {
            expect(element).to.be.visible
            expect(element).to.have.attr("placeholder", "First Name")
        })

    })
    // este es el asercion dos
    it("Asercion 3", () => {
        cy.url().should("include", "demoqa.com")
        cy.get("#firstName").then((element) => {
            assert.equal(element.attr("placeholder"), "First Name")

        })
    })

})