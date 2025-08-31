describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.mercadolibre.com.ar')
    cy.get('[name="as_word"]').type('Alquileres{enter}')
  })
})