describe('Página cadastro', () => {
    it('Deve realizar o cadastro incorreto no site adopet', () => {
      /*Visitando Site*/
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
  
      /*Clicando em cadastrar*/
      cy.get('[data-test="register-button"]').click();

  
      /*Clicando o botão de cadastro*/
  
      cy.get('[data-test="submit-button"]').click();

      /*verificandos mensagens*/

      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')

      /*Verificando se permaneceu na pagina de cadastro*/
      cy.url('eq', 'https://adopet-frontend-cypress.vercel.app/');

      })
  })