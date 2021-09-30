import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const registerPage = require('../../pageObject/registerPage.json')
var loggedInUser;

Given('the user open login page', () => {
    cy.clearCookies()
    cy.visit('?controller=authentication&back=my-account')
});

When('the user enters email address as {string}', (content) => {
    cy.get(registerPage.emailAddress).clear().type(content).should('contain.value', content)
});

When('the user clicks on Create Account button', () => {
    cy.get(registerPage.createAccountButton).should('be.visible').contains('Create an account').click()
    cy.contains('Your personal information', { timeout: 20000 }).should('be.visible')
});

When('user enters data for required fields only', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(registerPage.firstName).should('be.visible').type(element.firstName)
        cy.get(registerPage.lastName).should('be.visible').type(element.lastName)
        cy.get(registerPage.password).should('be.visible').type(element.password)
        cy.get(registerPage.address).should('be.visible').type(element.address)
        cy.get(registerPage.city).should('be.visible').type(element.city)        
        cy.get(registerPage.state).select(element.state).should('contain.text', element.state)
        cy.get(registerPage.zip).should('be.visible').type(element.zip)
        cy.get(registerPage.phone).should('be.visible').type(element.phone)

        loggedInUser = element.firstName + " " + element.lastName
        cy.log('The name of user is : ' + loggedInUser)
    })
});


When('the user clicks on Register button', () => {
    cy.get(registerPage.regiserButton).should('be.visible').contains('Register').click()    
});

Then('new account is created and user should be logged in', () => {
    cy.contains(loggedInUser, { timeout: 10000 }).should('be.visible')
});