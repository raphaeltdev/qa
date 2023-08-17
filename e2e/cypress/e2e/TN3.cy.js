/// <reference types="cypress" />

const viewports = ['macbook-15', 'iphone-x'];

viewports.forEach((viewport) => {
  describe(`Search Functionality: Input & Activation for viewport ${viewport}`, () => {

    beforeEach(() => {
      cy.viewport(viewport);
      cy.visit('/');
    });

    it('TN3.0:Ensure the search form accepts text input', () => {
      const text = 'project-a';
      const inputNumber = '1234567890';
      const inputSpecialCharacter = '!@#$%ˆ&';

      cy.get('#username')
        .should('exist')
        .type(text)
        .clear();

      cy.get('#username')
        .should('exist')
        .type(inputNumber)
        .clear();
      
      cy.get('#username')
        .should('exist')
        .type(inputSpecialCharacter)
        .clear();
    });

    it('TN3.1:Validate the activation of the search by clicking the "Go" button', () => {
      const text = 'project-a';

      cy.get('.output-status-text')
        .should('have.text', 'No repos');

      cy.get('#username')
        .should('exist')
        .type(text);

      cy.get('.submit')
        .should('have.text', 'Go')
        .click();

      cy.get('.repo-amount')
        .should('have.text', 'Found 18 Repos');

      cy.get('.output-status-text')
        .should('not.exist');

      cy.get('.repo-list-container')
        .should('have.length', 1);

      cy.get(':nth-child(1) > :nth-child(1) > a')
        .should('have.text', 'backend-.NET-coding-challenge');

      cy.get(':nth-child(1) > .repo-description')
        .should('have.text', 'Coding challenge for C# developer');

      cy.get(':nth-child(18) > :nth-child(1) > a')
        .should('have.text', 'velojiraptor');

      cy.get(':nth-child(18) > .repo-description')
        .should('have.text', 'A tool to generate developer productivity metrics from Jira tickets.');
    });

    it('TN3.2:Confirm that pressing the "Enter" key also activates the search.', () => {
      const text = 'project-a';

      cy.get('.output-status-text')
        .should('have.text', 'No repos');

      cy.get('#username')
        .should('exist')
        .type(`${text}{enter}`);

      cy.get('.repo-amount')
        .should('have.text', 'Found 18 Repos');

      cy.get('.output-status-text')
        .should('not.exist');

      cy.get('.repo-list-container')
        .should('have.length', 1);

      cy.get(':nth-child(1) > :nth-child(1) > a')
        .should('have.text', 'backend-.NET-coding-challenge');

      cy.get(':nth-child(1) > .repo-description')
        .should('have.text', 'Coding challenge for C# developer');

      cy.get(':nth-child(18) > :nth-child(1) > a')
        .should('have.text', 'velojiraptor');

      cy.get(':nth-child(18) > .repo-description')
        .should('have.text', 'A tool to generate developer productivity metrics from Jira tickets.');
    });
  });
});
