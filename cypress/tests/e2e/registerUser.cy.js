describe('Visit the Serverest Frontend and Click Register', () => {
    it('Should visit the homepage and click on Register', () => {
      cy.visit('/'); // Visit the homepage
  
      cy.contains('Cadastre-se').click(); // Click the "Register" button
  
      cy.url().should('include', '/register'); // Verify navigation to Register page
    });
  });
  


