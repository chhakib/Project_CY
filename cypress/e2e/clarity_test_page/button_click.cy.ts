describe('Click on the button “Button Click”', () : void => {
  it('Validate that the message “Click Done” is displayed', () : void => {
    //Visit the test page.
    cy.visit('ClarityTestPage.html')
    //Click on the button “Button Click”.
    cy.get('#buttonClick').click()
    //Validate that the message “Click Done” is displayed.
    cy.get('#buttonClickMsg').should('have.text', 'Click Done')
  })
})