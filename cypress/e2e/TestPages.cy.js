describe('TestPages', () =>{
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
    it('Should be able to connect the app', () =>{
        cy.url().should('eq', "http://localhost:3000/")
    })

    it('should be able to show items page', () =>{
        cy.get('#itemsPage')
        .click()
        .url()
        .should('eq', 'http://localhost:3000/Items')
    })

    it('should be able to back to home page', () =>{
        cy.get('#Home')
        .click()
        .url()
        .should('eq', 'http://localhost:3000/')
    })

    it('should be able to show basket', () =>{
        cy.get("#basket")
        .click()
        .url()
        .should('eq', 'http://localhost:3000/Basket')
    })
})