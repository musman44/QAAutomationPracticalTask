import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const productPage = require('../../pageObject/productPage')

Given('the user selects a {string} tshirt', (content) => {

    cy.get(productPage.menuItem).should('be.visible').click()
    cy.get('.block_content > .tree > :nth-child(1) > .grower').should('be.visible').click()
    cy.get('.block_content > .tree > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.get(productPage.productAvailable).should('contain.text', content)
    cy.get(productPage.inStock).should('contain.text', 'In stock')
    cy.get(productPage.viewProduct).should('be.visible').click()

});

When('the user selects quantity {string}', (content) => {
    cy.get(productPage.quantity).clear().type(content).should('contain.value', content)
});

When('the user selects size {string}', (content) => {
    cy.get(productPage.selectSize).select(content).should('contain.text', content)
});

When('the user selects color {string}', (content) => {

    if (content === 'blue') {
        cy.get(productPage.blueColour).click().should('have.class', 'selected')
    } else {
        cy.get(productPage.orangeColour).click().should('have.class', 'selected')
    }

});

When('the user add to cart', () => {
    cy.get(productPage.addToCartButton).click()
    cy.contains('Product successfully added to your shopping cart', { timeout: 20000 }).should('be.visible')
    cy.get(productPage.proceedToCheckouButton).should('be.visible').contains('Proceed to checkout').click()    

});

Then('the user should see selected item {string}', (content) => {
    cy.get(productPage.cartDescription).should('contain.text', content)    

});


When('the user change quanity {string}', (content) => {

    cy.get(productPage.cartQuantity).should('be.visible').clear().type(content)
    cy.get(productPage.productPrice).click()
    cy.wait(20000)

});

Then('the price should match', () => {

    cy.get(productPage.cartQuantity).invoke('val').then(quanity => {
        const productPrice = 16.51
        const totalPrice = quanity * productPrice
        cy.get(productPage.productPrice).should('contain.text', totalPrice)

    })
    cy.clearCookies()
});


When('the user deletes the {string}', (content) => {
    
    cy.get(productPage.cartDescription).should('contain.text', content)
    cy.get(productPage.deleteProduct).click()

});

Then('the user should not see selected item {string} in cart', (content) => {
     
    cy.contains('Your shopping cart is empty', { timeout: 20000 }).should('be.visible')

});
