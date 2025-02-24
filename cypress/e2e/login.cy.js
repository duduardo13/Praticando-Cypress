describe('Realizando login adopet', () => {

   beforeEach(() =>{
   /*Visitando Site*/
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

    /*Clicando em login*/
    cy.get('[data-test="login-button"]').click();
   })

   it('Deve-se logar com sucesso', () => {

   /*Realizando login*/
   cy.login('eduardofontes430@gmail.com', 'Edu123')

   /* Vericando url */
   cy.url('eq', 'https://adopet-frontend-cypress.vercel.app/home');
 
   })
})
   

/*
    ----------------Comando antigo para realizar o login ---------------------
    
    cy.get('[data-test="input-loginEmail"]').type('eduardofontes430@gmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Edu123');

    
    cy.get('[data-test="submit-button"]').click();

    */