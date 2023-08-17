/// <reference types="cypress" />

const viewports = ['macbook-15', 'iphone-x'];

viewports.forEach((viewport) => {
  describe(`Verify UI Structure for viewport ${viewport}`, () => {

    before(() => {
      cy.viewport(viewport);
      cy.visit('/');
    });

    it('TN1: Validate the presence of a header, search form, and search result section on the UI.', () => {
      cy.get('title')
        .should('have.text', 'Get Github Repos');

      cy.get('label')
        .should('have.text', 'Github Username');

      cy.get('.input-area')
        .should('exist');

      cy.get('#username')
        .should('exist');

      cy.get('.submit')
        .should('exist')
        .and('have.text', 'Go');

      cy.get('.output-status-text')
        .should('have.text', 'No repos');
    });
  });
});
