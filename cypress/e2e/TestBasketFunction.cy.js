describe('TestPages', () =>{
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
    it('basket should be empty', () =>{
        cy.get("#basket")
        .click()

        cy.get(".basketItems")
        .should('be.empty')
    })

    it('should be able to add items to basket', () =>{
        cy.get('#itemsPage')
        .click()

        cy.get(".button-add")
        .click({ multiple: true })

        cy.get("#basket")
        .click()

        cy.get(".basketItems")
        .should('not.be.empty')
    })

    it('should be able to checkout get to checkout page', () =>{
        cy.get('#itemsPage')
        .click()

        cy.get(".button-add")
        .click({ multiple: true })

        cy.get("#basket")
        .click()

        cy.get(".button-checkout")
        .click()
        .url()
        .should('eq', 'http://localhost:3000/checkout/27')
    })

    it('should be able to remember the basket list', () =>{
        cy.get('#itemsPage')
        .click()

        cy.get(".button-add")
        .click({ multiple: true })

        cy.get("#basket")
        .click()

        cy.get(".button-checkout")
        .click()
        .url()
        .should('eq', 'http://localhost:3000/checkout/27')

        cy.get('#Home')
        .click()

        cy.get("#basket")
        .click()

        cy.get('.basketItems')
        .should('not.be.empty')
    })

    it('should be able to remember and add to basket list', () =>{
        cy.get('#itemsPage')
        .click()

        cy.get(".button-add")
        .click({ multiple: true })

        cy.get('#Home')
        .click()

        cy.get('#itemsPage')
        .click()

        cy.get(".button-add")
        .click({ multiple: true })
        
        cy.get("#basket")
        .click()

        cy.get(".basketItems")
        .find('li')
        .should('have.length', '8')


    })
})