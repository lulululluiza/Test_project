/// <reference types="cypress" />
import locator from "../../support/locators"

beforeEach("Visit the base site", () => {
    cy.visit("/")
})

it("Logging in with the correct credentials (standard_user)", ()=> {
    cy.get(locator.LOGIN.USER).type('standard_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()
    cy.get('[data-test="title"]').should('contain', 'Products')
})

it("Logging in with a locked out user", ()=> {
    cy.get(locator.LOGIN.USER).type('locked_out_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()
    cy.get(locator.LOGIN.ERROR_MSG).should('contain', 'Sorry, this user has been locked out.')
})

it("Logging in with a problem user", ()=> {
    cy.get(locator.LOGIN.USER).type('problem_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()    
    cy.get('[data-test="title"]').should('contain', 'Products')
    cy.get('.inventory_list img').should('have.attr', 'src', '/static/media/sl-404.168b1cce10384b857a6f.jpg')
})

it("Logging in with a performance glitch user", ()=> {
    cy.get(locator.LOGIN.USER).type('performance_glitch_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()    
    cy.get('[data-test="title"]', {timeout: 30000}).should('contain', 'Products')
})

 it("Logging in with a error user", ()=> {
    cy.get(locator.LOGIN.USER).type('error_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()
    cy.get('[data-test="title"]').should('contain', 'Products')
})
 
it("Logging in with a visual user", ()=> {
    cy.get(locator.LOGIN.USER).type('visual_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()    
    cy.get('[data-test="title"]').should('contain', 'Products')
    
    //check the wrong product image 
    cy.get('[data-test="inventory-item"]').find('img').should('have.attr', 'src', '/static/media/sl-404.168b1cce10384b857a6f.jpg')
    //check if theres 2 product titles with align right
    cy.get('[data-test="inventory-item"] .align_right').should('have.length', 2)
    //check if the product cart has the visual_failure class
    cy.get('[data-test="shopping-cart-link"]').parent().should('have.class', 'visual_failure')
    //check if the burguer button has the visual_failure class
    cy.get('[data-test="open-menu"]').should('have.class', 'visual_failure')
})

it("Logging in a wrong username", ()=> {
    cy.get(locator.LOGIN.USER).type('standard_super_user')
    cy.get(locator.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()
    cy.get(locator.LOGIN.ERROR_MSG).should('contain', 'Username and password do not match any user in this service')
})

it("Logging without inserting credentials", ()=> {
    cy.get(locator.LOGIN.BTN_LOGIN).click()
    cy.get(locator.LOGIN.ERROR_MSG).should('contain', 'Username is required')
})

it("Retrying valid login (standard_user) after closing an alert", ()=> {
    cy.get(locator.LOGIN.USER).type('standard_user')
    cy.get(locator.LOGIN.PASSWORD).type('secrets_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()    
    //check if the error icons showed up on the input fields
    cy.get('.form_group').find('.error').then(elements => {
        cy.wrap(elements).should('have.length', 2)
    })
    cy.get(locator.LOGIN.ERROR_MSG).find('button').click()

    cy.get(locator.LOGIN.USER).clear().type('standard_user')
    cy.get(locator.LOGIN.PASSWORD).clear().type('secret_sauce')
    cy.get(locator.LOGIN.BTN_LOGIN).click()    
    cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
})