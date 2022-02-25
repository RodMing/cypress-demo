describe('Via CEP', () => {
    it('should consult an existing zip code', () => {
        const zipcode = '01001000'
        cy.request(`https://viacep.com.br/ws/${zipcode}/json/`).as('result')
        cy.get('@result').its('status').should('eq', 200)
        cy.get('@result').its('body').as('body')
        cy.get('@body').its('cep').should('eq', zipcode.slice(0, 5) + '-' + zipcode.slice(5))
    })
})