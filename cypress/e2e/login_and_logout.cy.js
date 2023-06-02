describe('Login and Logout', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/')
    })

  const username = 'wadidaw123'
  const password = 'wadidaw098'

  it('should login successfully', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    cy.get('#nameofuser').should('contain', username)
  })

  it('should failed login', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type('wadidaw1234')
    cy.get('#loginpassword').type('wadidaw098-')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('User does not exist.');
    })
  })


  it('should logout successfully', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    cy.get('#logout2').click({force: true})

    cy.get('#login2').should('contain', 'Log in')
  })
})