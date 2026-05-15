/// <reference types="cypress" />
import locator from "../../support/locators"

beforeEach("Visit the base site and login", () => {
    cy.visit("/")
    cy.login()
})

it('Navigate to main page', () => {
    cy.get(locator.NAVIGATION.MAIN_MENU).click()
    cy.get(locator.NAVIGATION.ALL_ITEMS).click()

    cy.get('[data-test="title"]').should('contain', 'Products')
})

it.only('Navigate to a product page and return to main page', () => {
    cy.get(locator.NAVIGATION.MAIN_MENU).click()
    cy.get(locator.NAVIGATION.ALL_ITEMS).click()
    cy.get('[data-test="title"]').should('contain', 'Products')
    
    cy.get(locator.PRODUCTS.NAME).first().click().then( product => {
        cy.get(locator.PRODUCT.NAME).should('contain', product.text())
    })
    
    cy.get(locator.PRODUCT.BACK_BTN).click()
    cy.get('[data-test="title"]').should('contain', 'Products')

})

it('Navigate to cart page', () => {
    cy.get(locator.NAVIGATION.CART).click()

    cy.get(locator.CART.TITLE).should('contain', 'Your Cart')
})

it('Navigate to checkout page', () => {
    //add the first product to the cart, regardless of what it is
    cy.get(locator.PRODUCTS.PRICE).first().next().click()

    cy.get(locator.NAVIGATION.CART).click()
    cy.get(locator.CART.CHECKOUT_BTN).click()

    cy.get(locator.CHECKOUT.TITLE).should('contain', 'Checkout: Your Information')
})

it('Navigate to About page', () => {
    cy.get(locator.NAVIGATION.MAIN_MENU).click()
    cy.get(locator.NAVIGATION.ABOUT).click()

    cy.url().should('contain', 'https://saucelabs.com/')
})