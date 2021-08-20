/// <reference types="cypress" />

describe('Create event', () => {
    it('should create a new element', () => {
        
        //navigate to home page
        cy.visit("/");
        //navigate to create event page
        cy.get('a[href="/create-event"]').click();
        //fill-in form
        cy.get('#event-name').type('Vezivanje peska u snopove');
        cy.get('#event-venue').type('Hotel Promaja');
        cy.get('#event-date-month').select('6');
        cy.get('#event-date-day').select('15');
        cy.get('#event-date-year').select('2021');
        cy.get('#event-time-hour').select('8');
        cy.get('#event-time-minute').select('00');
        cy.get('#event-time').select('p.m.');
        cy.get('#ticket-quantity').type('30');
        cy.get('#event-notes').type('Please food must be antialergic. No Smoki No Koka');
        cy.get('#event-image-2').click();
        //submit form
        cy.get('#create-btn').click();
        //assert that a new event has been created
        cy.get('h2').should('have.text', 'Event Details')
    });
});