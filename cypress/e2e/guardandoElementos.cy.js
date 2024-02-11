describe("Tipos de localizadores", () => {
    it("Obtenerlo por medio de un atributo", () => {
        cy.visit("/automation-practice-form")
        cy.get("input")
    })

    it("Guardando elementos", () => {

        cy.get('[placeholder="First Name"]')
    })

    it("Repeticion", () => {
        cy.visit("/automation-practice-form")
        //Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
        //Obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents().then((padres) => {
            console.log(padres)
        })
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get("form").find("label")
    })


})