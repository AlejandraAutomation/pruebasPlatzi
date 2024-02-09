describe("Tipos de localizadores", () => {
    it("Obtenerlo por medio de un tag", () => {
        cy.visit("/automation-practice-form")
        cy.get("input")
    })

    it("Obtenerlo por medio de un atributo", () => {
        // cy.visit("/automation-practice-form")
        cy.get('[placeholder="First Name"]')
    })

})