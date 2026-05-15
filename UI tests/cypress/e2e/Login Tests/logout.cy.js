/// <reference types="cypress" />
import locator from "../../support/locators"

beforeEach("Visit the base site", () => {
    cy.visit("/")
    cy.login()
})

it('Logout via main menu', () => {
    cy.get(locator.NAVIGATION.MAIN_MENU).click()
    cy.get(locator.NAVIGATION.LOGOUT).click()

    cy.get('input').should('contain', 'Login')   
})