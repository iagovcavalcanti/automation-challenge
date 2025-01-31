describe('Visit the Serverest Frontend, Click Register, and Input User Details', () => {
    it('Should visit the homepage, click on Register, and fill out the form', () => {
      cy.visit('/'); // Visit the homepage
  
      cy.contains('Cadastre-se').click(); // Click the "Register" button
      cy.url().should('include', '/cadastrarusuarios'); // Ensure we're on the correct page
  
      // Fill out the form
      cy.get('input[name="nome"]').should('be.visible').type('Test User');
      cy.get('input[name="email"]').should('be.visible').type('testusereverest0130@yopmail.com');
      cy.get('input[name="password"]').should('be.visible').type('Senh@1234');
    });
  });
  