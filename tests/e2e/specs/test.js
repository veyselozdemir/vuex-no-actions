// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#searchBox').should('exist');
    cy.get('#searchSubmitButton').should('exist');

    cy.get('#searchBox').type('john');
    cy.get('#searchSubmitButton').click();

    const searchResultsSelector = '[data-test-id="searchResults"]';
    const resultCardSelector = '[data-test-id="resultCard"]';
    cy.get(searchResultsSelector).should('exist');
    cy.get(resultCardSelector).should('exist');
    cy.get(searchResultsSelector)
      .find(resultCardSelector)
      .its('length')
      .should('be.gte', 2);
  });
});
