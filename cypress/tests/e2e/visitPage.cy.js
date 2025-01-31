describe('Visit the Serverest Frontend', () => {
    it('Should successfully load the homepage', () => {
      cy.visit('/');
      cy.title().should('include', 'ServeRest'); // Verify page title
    });
  });
  