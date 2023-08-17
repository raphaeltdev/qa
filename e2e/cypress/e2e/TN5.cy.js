/// <reference types="cypress" />

const viewports = ['macbook-15', 'iphone-x'];

viewports.forEach((viewport) => {
  describe(`Search Functionality: Input & Activation for viewport ${viewport}`, () => {

    beforeEach(() => {
      cy.viewport(viewport);
      cy.visit('/');
    });

    it('TN5.0:Validate that a success message is displayed above the search field when the search is successful', () => {
      const text = 'project-a';

      cy.get('#username')
        .should('exist')
        .type(text);

      cy.get('.submit')
        .should('have.text', 'Go')
        .click();

      cy.get('.repo-amount')
        .should('have.text', 'Found 18 Repos');

      cy.get('li.repo-row')
        .should('have.length', 18);
    });

    it(`TN5.1:Ensure an error message is displayed above the search field when the search action encounters an error.`, () => {
      const text = 'project-aproject-aproject-aproject-a';

      cy.get('.output-status-text')
        .should('have.text', 'No repos');

      cy.get('#username')
        .should('exist')
        .type(text);

      cy.get('.submit')
        .should('have.text', 'Go')
        .click();

      cy.get('strong')
        .should('have.text', 'Github user not found');
      cy.get('.output-status-text')
        .should('have.text','No repos');
    });
  });
});
