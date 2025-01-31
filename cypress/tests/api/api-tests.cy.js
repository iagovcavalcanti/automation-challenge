describe('Basic API Test - Serverest', () => {
    it('Should verify that the API is online', () => {
      cy.request('GET', 'https://serverest.dev').then((response) => {
        expect(response.status).to.eq(200); // Ensure API responds with status 200
      });
    });
  });
  