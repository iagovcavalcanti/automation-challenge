describe('Visit the Serverest Frontend, Click Register, and Input Name', () => {
    it('Should visit the homepage, click on Register, and type a name', () => {
      cy.visit('/'); // Visit the homepage
  
      cy.contains('Cadastre-se').click(); // Click the "Register" button
  
      // Fix the expected URL path
      cy.url().should('include', '/cadastrarusuarios'); // Updated assertion
  
      // Type into the "Digite o seu nome" field
      cy.get('input[name="nome"]').should('be.visible').type('Test User');
    });
  });
  