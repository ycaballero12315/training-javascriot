describe('Test applitools.com', () => {
  it('Test logging and assert', () => {
    cy.visit('https://demo.applitools.com/')
    cy.get('#username').type('yoedev')
    cy.get('#password').type('123')
    cy.get('#log-in').click()
    cy.get(':nth-child(1) > .text-center > .badge').click()
  })
})