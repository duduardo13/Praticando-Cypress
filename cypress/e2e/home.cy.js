describe('Verificando elementos na home', ()=>{

    beforeEach(() =>{
        /*Visitando Site*/
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); 
    })
     
    it('Deve verificar se há título "AdoPet" ', ()=>{
           
        cy.title().should('eq', 'AdoPet');

    })

    it('Deve verificar há texto "quem ama adota" ', ()=>{
          
       cy.contains('p', 'Quem ama adota!').should('be.visible');

   })

   it('Deve verificar há texto " " ', ()=>{
          
    cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!')
    .should('be.visible');

})
})