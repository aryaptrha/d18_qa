describe('template spec', () => {
  beforeEach(() => {
    const username = 'wadidaw123'
    const password = 'wadidaw098'

    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

  })

  it('should successfully add product to cart', () => {
    cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()

    //Assert that product successfully added
    cy.get('.success > :nth-child(2)').should('contain', 'HTC One M9')
  })

  it('should delete cart product', () => {
    cy.get('#cartur').click()
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click()

    //Assert that product successfully deleted
    cy.get('.success > :nth-child(2)').should('not.exist')
  })
})