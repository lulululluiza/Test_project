/// <reference types="cypress" />
import locator from "../../support/locators"

beforeEach("Visit the base site and login", () => {
    cy.visit("/")
    cy.login()
    cy.addItemsGoToCartAndCheckout()
})

it('Simple checkout scenario', () => {
    cy.get(locator.CHECKOUT.FIRST_NAME).type('Someone')
    cy.get(locator.CHECKOUT.LAST_NAME).type('Someoneson')
    cy.get(locator.CHECKOUT.POSTAL_CODE).type('1122333')
    cy.get(locator.CHECKOUT.CONTINUE).click()
    cy.get(locator.CHECKOUT.FINISH).click()

    cy.get(locator.CHECKOUT.TITLE).should('contain', 'Checkout: Complete!')
})

it('Check if the cart items match the checkout items', () => {
    cy.fillCheckoutInformation()
    cy.get(locator.PRODUCT.NAME).then( products => {
        cy.get(locator.NAVIGATION.CART).click()
        for(let i = 0; i < products.length; i++) {
            cy.get(locator.PRODUCT.NAME).should('contain', products[i].textContent)
        }        
    })
})

it.only('Check if the subtotal and total value is correct', () => {
    cy.fillCheckoutInformation()
    cy.get(locator.PRODUCT.PRICE).then( prices => {
        let subtotal = 0
        for(let i = 0; i < prices.length; i++) {
            subtotal += Number(prices[i].textContent.replace('$', ''))
        } 
        cy.get(locator.CHECKOUT.SUBTOTAL).should('contain', '$'+subtotal.toString())

        cy.get(locator.CHECKOUT.TAX_LABEL).then( tax => {
            subtotal += Number(tax[0].textContent.replace('Tax: $', ''))

            cy.get(locator.CHECKOUT.TOTAL_LABEL).should('contain', '$' + subtotal.toString())
        })
    })
})
