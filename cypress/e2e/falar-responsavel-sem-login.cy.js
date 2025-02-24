describe('Falar com responsável sem login', () => {
  
    beforeEach(() =>{
      /*Visitando Site*/
      cy.visit('https://adopet-frontend-cypress.vercel.app/'); 
      cy.contains('a', 'Ver pets disponíveis para adoção').click();
   }) 
   
   it('Deve clicar em falar com responsável e solicitar o login', () => {
       
      /*Clicando no icone de falar com responsavel*/ 
      cy.get('.header__message').click();

      /* Verificando url - login */
      cy.url('eq', 'https://adopet-frontend-cypress.vercel.app/login')

      /*Realizando login*/
      cy.login('eduardofontes430@gmail.com', 'Edu123')
      
      /* Verificando url - home */
      cy.url('eq', 'https://adopet-frontend-cypress.vercel.app/home')


   })
})
  