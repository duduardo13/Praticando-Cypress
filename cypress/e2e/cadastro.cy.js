describe('Página cadastro', () => {
  
  beforeEach(() =>{
    /*Visitando Site*/
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

    /*Clicando em cadastrar*/
    cy.get('[data-test="register-button"]').click();

 })
 
  it('Deve realizar o cadastro corretamente no site adopet', () => {
    /*Preenchendo campos com dados fictícios*/
    cy.get('[data-test="input-name"]').type('Eduardo Barbosa');
    cy.get('[data-test="input-email"]').type('eduardo@email.com');
    cy.get('[data-test="input-password"]').type('Edu123');
    cy.get('[data-test="input-confirm-password"]').type('Edu123');

    /*cadastrando*/

    cy.get('[data-test="submit-button"]').click();
    })
})