describe('Log in and Click on Pesquisar Button', () => {
    it('Should log in using registered credentials and click the Pesquisar button', () => {
        cy.visit('/login'); // Visit the login page

        // Fill in login credentials
        cy.get('input[name="email"]').should('be.visible').type('testusereverest0130@yopmail.com');
        cy.get('input[name="password"]').should('be.visible').type('Senh@1234');

        // Click "Entrar" to log in
        cy.get('button[type="submit"]').should('be.visible').click();

        // Validate successful login
        cy.url().should('include', '/home'); 

        // Click on the "Pesquisar" button
        cy.contains('Pesquisar').should('be.visible').click();
    });
});
