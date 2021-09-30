import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPage = require('../../pageObject/loginPage.json')
var loggedInUser;

Given('the user open login page', () => {
    cy.clearCookies()
    cy.visit('?controller=authentication&back=my-account')
});

When('the user login as {string}', (UserTypeValue) => {
    
    cy.fixture('TestData/loginCredentials.json').as('loginCredentials')
    
    cy.get('@loginCredentials').then((user) => {
        var data = user.filter(item => (item.UserType == UserTypeValue))        

        loggedInUser = data[0].DisplayName

        cy.get(loginPage.username).should('be.visible').type(data[0].UserName)
        cy.get(loginPage.password).should('be.visible').type(data[0].Password)
    })
});

When('the user clicks on Sign in button', () => {
    cy.get(loginPage.logInButton).should('be.visible').contains('Sign in').click()
});

Then('logged in user name should be shown', () => {
    cy.contains(loggedInUser, { timeout: 10000 }).should('be.visible')
});


Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});