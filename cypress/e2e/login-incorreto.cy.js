describe('Falha no login', () => {

    beforeEach(() =>{
     cy.visit('https://adopet-frontend-cypress.vercel.app');
     cy.get('[data-test="login-button"]').click();
     cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
        statusCode:400, }).as('stubPost')
    })
 
    it('Campos vazios', () => {
 
     /*Clicando no botão*/
     cy.get('[data-test="submit-button"]').click();

     /*Resultado esperados*/
     cy.contains('É necessário informar um endereço de email').should('be.visible')
     cy.contains('Insira sua senha').should('be.visible')  
     
    })
    
    it('deve falhar mesmo que os campos sejam preenchidos corretamente', () =>{
        cy.login('eduardofontes430@gmail.com', 'Edu123') 
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
  
    it('Credenciais que não cumprem com os requisitos', ()=>{
    
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