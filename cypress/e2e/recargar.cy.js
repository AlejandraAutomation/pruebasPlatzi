describe("Ingreso y recarga de plataforma", ()=> {

    it("Navegar a la plataforma platzi", ()=> {
        cy.visit("https://www.platzi.com/")
    })
    it("Recargar página", ()=> {
        cy.reload()
    })
    it("Recargar página forzadamente", ()=> {
        cy.visit("https://www.google.com/")
        cy.reload(true)
    })
    it("Navegar hacia atrás", ()=>{
        cy.visit("https://www.google.com/")
        cy.visit("https://www.google.com/search?q=platzi&sca_esv=90675d82984edeb9&hl=es&source=hp&ei=K6HGZfbdCKGblQfTi76ABg&iflsig=ANes7DEAAAAAZcavO_5hcOrZyBHvOCNvnFBo4m-dsnkz&ved=0ahUKEwi2n_LFoZ-EAxWhTeUKHdOFD2AQ4dUDCA0&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emlI2wJQEFghcAB4AJABAJgBAKABAKoBALgBA8gBAPgBAQ&sclient=gws-wiz")
        cy.go("back")

    })

})