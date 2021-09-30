import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPage = require('../../pageObject/loginPage.json')

Given('the user open login page', () => {
    cy.clearCookies()
    cy.visit('?controller=authentication&back=my-account')
});

When('the user type in', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(loginPage.username).should('be.visible').type(element.username)
        cy.get(loginPage.password).should('be.visible').type(element.password)
    })
});

When('the user clicks on Sign in button', () => {
    cy.get(loginPage.logInButton).should('be.visible').contains('Sign in').click()
});

Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});