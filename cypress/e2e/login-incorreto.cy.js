describe('Falha no login', () => {

    beforeEach(() =>{
    /*Visitando Site*/
     cy.visit('https://adopet-frontend-cypress.vercel.app/');
 
     /*Clicando em login*/
     cy.get('[data-test="login-button"]').click();
    })
 
    it('Campos vázios', () => {
 
     /*Clicando no botão*/
     cy.get('[data-test="submit-button"]').click();

     /*Resultado esperados*/
     cy.contains('É necessário informar um endereço de email').should('be.visible')
     cy.contains('Insira sua senha').should('be.visible')  
     
    })

    it('Credenciais inválidas', ()=>{
    
    /*Preenchendo campos*/
    cy.get('[data-test="input-loginEmail"]').type('aleatosudomde');
    cy.get('[data-test="input-loginPassword"]').type('jieownje');

    /*Clicando no botão*/
    cy.get('[data-test="submit-button"]').click();

    /*Resultado esperados*/
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible'); 

    
    })
 
  
 })