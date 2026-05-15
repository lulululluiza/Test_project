/// <reference types="cypress" />
import locator from "../../support/locators"

beforeEach("Visit the base site and login", () => {
    cy.visit("/")
    cy.login()
})

it("Products are sorted from a to z", ()=> {
    cy.get(locator.PRODUCTS.SORTER).select('az')

    cy.get(locator.PRODUCTS.NAME).then(titles => {
        let extractedTitles = []
        let sortedTitles = []
        for(let i = 0; i < titles.length; i++) {
            extractedTitles.push(titles[i].textContent)
        }
        sortedTitles = [...extractedTitles]
        sortedTitles.sort()
        //check if the products are sorted from a to z 
        const sortedOrNot = extractedTitles.every((value, index) => value === sortedTitles[index])
        cy.wrap(sortedOrNot).should('be.true')
    })
})

it("Products are sorted from a to z", ()=> {
    cy.get(locator.PRODUCTS.SORTER).select('za')

    cy.get(locator.PRODUCTS.NAME).then(titles => {
        let extractedTitles = []
        let sortedTitles = []
        for(let i = 0; i < titles.length; i++) {
            extractedTitles.push(titles[i].textContent)
        }        
        sortedTitles = [...extractedTitles]
        sortedTitles.sort().reverse()
        //check if the products are sorted from a to z 
        const sortedOrNot = extractedTitles.every((value, index) => value === sortedTitles[index])
        cy.wrap(sortedOrNot).should('be.true')
        console.log(extractedTitles)
        console.log(sortedTitles)
    })
})

it("Products are sorted from price low to high", ()=> {
    cy.get(locator.PRODUCTS.SORTER).select('lohi')

    cy.get(locator.PRODUCTS.PRICE).then(prices => {
        let extractedPrices = []
        let sortedPrices = []
        for(let i = 0; i < prices.length; i++) {
            extractedPrices.push(prices[i].textContent.replace('$', ''))
        }        
        sortedPrices = [...extractedPrices]
        sortedPrices.sort((a, b) => a - b)
        //check if the products are sorted from price low to high
        const sortedOrNot = extractedPrices.every((value, index) => value === sortedPrices[index])
        cy.wrap(sortedOrNot).should('be.true')
    })
})

it("Products are sorted from price high to low", ()=> {
    cy.get(locator.PRODUCTS.SORTER).select('hilo')

    cy.get(locator.PRODUCTS.PRICE).then(prices => {
        let extractedPrices = []
        let sortedPrices = []
        for(let i = 0; i < prices.length; i++) {
            extractedPrices.push(prices[i].textContent.replace('$', ''))
        }        
        sortedPrices = [...extractedPrices]
        sortedPrices.sort((a, b) => a - b).reverse()
        //check if the products are sorted from price low to high
        const sortedOrNot = extractedPrices.every((value, index) => value === sortedPrices[index])
        cy.wrap(sortedOrNot).should('be.true')
    })
})