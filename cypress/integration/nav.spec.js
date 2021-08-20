/// <reference types="cypress" />

describe('Navigation', () => {
    it('should have a list events link that navigates to the list events view', () => {
        // navigate to the homepage
        cy.visit("/");
        // check that 'list events' link is there
        expect(cy.get('a[href="/list-events"]')).to.exist;

        // click on the 'list events' link
        cy.get('a[href="/list-events"]').click();
        // verify a user has been redirected to the 'list events' page
        cy.get('h2').contains('Event List');

        //check that 'list events' page is there
        expect(cy.get('h2').contains('Event List')).to.exist;
    });
});