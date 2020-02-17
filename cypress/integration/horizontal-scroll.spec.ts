/// <reference types="Cypress" />
context('Select cell', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/horizontal-scroll');
    },
  );
  it('checks if horizontal scroll works', () => {
    cy.get('#table')
      .get('#table > thead > tr > th:nth-child(15) > div > div')
      .should('not.be.visible')
      .get('#table')
      .scrollTo('right')
      .get('#table > thead > tr > th:nth-child(15) > div > div')
      .should('be.visible');
  });
});
