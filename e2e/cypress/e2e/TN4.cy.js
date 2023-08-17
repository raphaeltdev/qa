/// <reference types="cypress" />

const viewports = ['macbook-15', 'iphone-x'];

viewports.forEach((viewport) => {
  describe(`Search Functionality: Input & Activation for viewport ${viewport}`, () => {

    beforeEach(() => {
      cy.viewport(viewport);
      cy.visit('/');
    });

    it('TN4.0:Confirm that each found repo is displayed in a separate row', () => {
      const text = 'project-a';

      cy.get('#username')
        .should('exist')
        .type(text);

      cy.get('.submit')
        .should('have.text', 'Go')
        .click();

      cy.get('li.repo-row')
        .should('have.length', 18);

      cy.get('li.repo-row').each(($li) => {
        cy.wrap($li).find('a').should('exist');
      });
      
      cy.get('li.repo-row').each(($li) => {
        cy.wrap($li).find('p.repo-description').should('exist');
      });
    });

    it(`TN4.1:Validate the display of the repo's name and description`, () => {
      const text = 'project-a';

      cy.get('.output-status-text')
        .should('have.text', 'No repos');

      cy.get('#username')
        .should('exist')
        .type(text);

      cy.get('.submit')
        .should('have.text', 'Go')
        .click();

      cy.get(':nth-child(1) > :nth-child(1) > a')
        .should('have.text', 'backend-.NET-coding-challenge');

      cy.get(':nth-child(1) > .repo-description')
        .should('have.text', 'Coding challenge for C# developer');

      cy.get(':nth-child(18) > :nth-child(1) > a')
        .should('have.text', 'velojiraptor');

      cy.get(':nth-child(18) > .repo-description')
        .should('have.text', 'A tool to generate developer productivity metrics from Jira tickets.');
    });

    it(`TN4.2:Check the redirection to the repo's URL when the repo name is clicked.`, () => {
      const text = 'project-a';

      cy.get('#username')
        .should('exist')
        .type(`${text}{enter}`);

      cy.get('.repo-amount')
        .should('have.text', 'Found 18 Repos');
      
      const repoUrl = 'https://github.com/project-a/backend-.NET-coding-challenge';

      cy.get(':nth-child(1) > :nth-child(1) > a')
        .should('have.text', 'backend-.NET-coding-challenge')
        .should('have.attr','href', repoUrl)
        .invoke('removeAttr', 'target');

      cy.request(repoUrl).its('status').should('eq', 200);
    });
  });
});
