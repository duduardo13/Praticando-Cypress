describe('Realizando login adopet', () => {

   beforeEach(() =>{
   /*Visitando Site*/
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

    /*Clicando em login*/
    cy.get('[data-test="login-button"]').click();
   })

   it('Deve-se logar com sucesso', () => {

    /*Preenchendo campos*/
    cy.get('[data-test="input-loginEmail"]').type('eduardofontes430@gmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Edu123');

    /*Clicando no botão*/
    cy.get('[data-test="submit-button"]').click();

    /* Vericando url */
    cy.url('eq', 'https://adopet-frontend-cypress.vercel.app/home');
   })

 
})