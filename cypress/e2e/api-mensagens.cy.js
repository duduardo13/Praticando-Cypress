describe('Api Adapet', ()=>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZTUyYmZiZi02YjNhLTRmY2UtODk1ZC1kNWZiODY2MTA0MzQiLCJhZG9wdGVyTmFtZSI6IkVkdWFyZG8gQmFyYm9zYSAiLCJpYXQiOjE3NDA0MTA0ODYsImV4cCI6MTc0MDY2OTY4Nn0.-d3GdYqWThKkKgxF5hqfF4GK8ox7-zGQP9wW5LNfqAY`
     
    it('Mensagens da api', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/7e52bfbf-6b3a-4fce-895d-d5fb86610434',
            headers: {authorization}
        }).then((resposta) => {
            expect(resposta.status).to.be.equal(200) //200 equivale ao sucesso da requisição (oposto de 400 que é falha)
            expect(resposta.body).is.not.empty //Não vai ser vazio
            expect(resposta.body).to.have.property('msg') // Espera as mensagens do usuário
        })   
    })
})