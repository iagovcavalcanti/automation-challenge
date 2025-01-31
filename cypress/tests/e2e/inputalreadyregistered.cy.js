describe('Log in with Registered Credentials', () => {
    it('Should log in using the credentials created during registration', () => {
      cy.visit('/login'); // Visit the login page
  
      // Fill in the login form with the credentials used during registration
      cy.get('input[name="email"]').should('be.visible').type('testusereverest0130@yopmail.com');
      cy.get('input[name="password"]').should('be.visible').type('Senh@1234');
  
      // Click the "Entrar" button to log in
      cy.get('button[type="submit"]').should('be.visible').click();
  
      // Validate successful login (adjust URL or check for user info)
      cy.url().should('include', '/comercio'); // Ensure we are redirected to the commerce page
      cy.contains('Welcome, Test User').should('be.visible'); // Optional: Check for a welcome message or user info
    });
  });
  