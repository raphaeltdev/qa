/// <reference types="cypress" />

const viewports = ['macbook-15', 'iphone-x'];

viewports.forEach((viewport) => {
  describe(`Header Title Display for viewport ${viewport}`, () => {

    before(() => {
      cy.viewport(viewport);
      cy.visit('/');
    });

    it('TN2: Check if the header correctly displays the title "Get Github Repos"', () => {
      cy.get('h1')
        .should('have.text', 'Get Github Repos');
    });
  });
});
