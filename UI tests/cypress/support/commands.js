// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import locator from "./locators"

Cypress.Commands.add('login', (username, password) => {
    cy.get(locator.LOGIN.USER).type('standard_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()
    cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
})

Cypress.Commands.add('addOneItemGoToCartAndCheckout', () => {
    //add the first product to the cart, regardless of what it is
    cy.get(locator.PRODUCTS.PRICE).first().next().click()

    cy.get(locator.NAVIGATION.CART).click()
    cy.get(locator.CART.CHECKOUT_BTN).click()

    cy.get(locator.CHECKOUT.TITLE).should('contain', 'Checkout: Your Information')
})

Cypress.Commands.add('addItemsGoToCartAndCheckout', () => {
    //add the first product to the cart, regardless of what it is
    cy.get(locator.PRODUCTS.PRICE).first().next().click()
    cy.get(locator.PRODUCTS.PRICE).last().next().click()  

    cy.get(locator.NAVIGATION.CART).click()
    cy.get(locator.CART.CHECKOUT_BTN).click()

    cy.get(locator.CHECKOUT.TITLE).should('contain', 'Checkout: Your Information')
})

Cypress.Commands.add('fillCheckoutInformation', () => {
    cy.get(locator.CHECKOUT.FIRST_NAME).type('Someone')
    cy.get(locator.CHECKOUT.LAST_NAME).type('Someoneson')
    cy.get(locator.CHECKOUT.POSTAL_CODE).type('1122333')
    cy.get(locator.CHECKOUT.CONTINUE).click()
})

