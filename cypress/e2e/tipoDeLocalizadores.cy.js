describe("Tipos de localizadores", () => {
    it("Obtenerlo por medio de un atributo", () => {
        cy.visit("/automation-practice-form")
        cy.get("input")
    })

    it("Obtenerlo por medio de un tag", () => {
        // cy.visit("/automation-practice-form")
        cy.get('[placeholder="First Name"]')
    })


    it("Obtenerlo por medio de un atributo y un tag", () => {
        cy.get('input[placeholder="First Name"]')
    })

    it("Obtenerlo por medio de un id", () => {
        cy.get("#firstName")
    })

    it("Obtenerlo por medio de una clase", () => {
        cy.get(".mr-sm-2.form-control")
    })

    it("Usando contains", () => {
        cy.contains("Reading")
        cy.contains(".element-group", "Widgets")
    })

    it("Usando parent", () => {
        //Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
        //Obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents()
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get("form").find("label")
    })


})