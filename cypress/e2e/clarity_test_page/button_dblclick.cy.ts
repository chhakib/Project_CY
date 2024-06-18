describe('Click on the button “Button DblClick”', () : void => {
  it('Validate that the message “DblClick Done” is displayed', () : void => {
    //Visit the test page.
    cy.visit('ClarityTestPage.html')
    //Click on the button “Button DblClick”.
    cy.get('#buttonDblClick').dblclick()
    //Validate that the message “DblClick Done” is displayed.
    cy.get('#buttonDblClickMsg').should('have.text', 'DblClick Done')
  })
})