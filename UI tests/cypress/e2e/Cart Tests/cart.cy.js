/// <reference types="cypress" />
import locator from "../../support/locators"

beforeEach("Visit the base site and login", () => {
    cy.visit("/")
    cy.login()
})

it('Removing the only product in the cart', () => {
    //add the first product to the cart, regardless of what it is
    cy.get(locator.PRODUCTS.PRICE).first().next().click()    

    cy.get(locator.NAVIGATION.CART).click()

    //removing the first product to the cart, regardless of what it is  
    cy.get(locator.PRODUCTS.PRICE).first().next().click()

    //element was removed
    cy.get(locator.CART.ITEMS).children().last().should('not.have.attr', 'data-test', 'inventory-item')
    //a removed_ITEM class should appear in its place
    cy.get(locator.CART.ITEMS).children().last().should('have.class', 'removed_cart_item')
})


it('Removing all products in the cart', () => {
    //add the first and last product to the cart, regardless of what it is
    cy.get(locator.PRODUCTS.PRICE).first().next().click()   
    cy.get(locator.PRODUCTS.PRICE).last().next().click()   

    cy.get(locator.NAVIGATION.CART).click()

    //removing the first product to the cart, regardless of what it is  
    cy.get(locator.CART.ITEM).find('button').then(removeBtns => {
        let buttonsQuantity = removeBtns.length - 1

        //click all Remove buttons, bypassing the element update
        for(let i = 0; i <= buttonsQuantity; i++) {
            console.log(i)
            cy.get(locator.CART.ITEM).find('button').first().click()
        }
    })

    //element was removed
    cy.get(locator.CART.ITEMS).children().last().should('not.have.attr', 'data-test', 'inventory-item')
    //two removed_ITEM class should appear in its place
    cy.get(locator.CART.ITEMS).children().last().should('have.class', 'removed_cart_item')
    cy.get(locator.CART.ITEMS).children().last().prev().should('have.class', 'removed_cart_item')
})