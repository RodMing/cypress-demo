describe('Homepage', () => {
  beforeEach(() => {
    cy.viewport('iphone-se2')
    cy.visit('/')
  })
  it('Banner is visible', () => {
    cy.get('div.banner').should('be.visible')
  })
  it('Banner is not visible after close it', () => {
    cy.get('div.banner').should('be.visible')
    cy.get('div.banner span.close-icon').should('be.visible').click()
    cy.get('div.banner').should('not.be.visible')
  })
})