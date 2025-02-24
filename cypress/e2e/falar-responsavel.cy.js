describe('Falar com responsável sem login', () => {
  
    beforeEach(() =>{
      /*Visitando Site*/
      cy.visit('https://adopet-frontend-cypress.vercel.app/'); 
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="input-loginEmail"]').type('eduardofontes430@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Edu123');
      cy.get('[data-test="submit-button"]').click();
      cy.url('eq', 'https://adopet-frontend-cypress.vercel.app/home');
   }) 
   
   it('Deve clicar em falar com responsável', () => {
       
      /*Clicando no icone de falar com responsavel*/ 
      cy.get('.header__message').click();

      cy.url('eq', 'https://adopet-frontend-cypress.vercel.app/mensagem');

   })
})
  