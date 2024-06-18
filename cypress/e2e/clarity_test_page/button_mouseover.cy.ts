describe('Move the mouse over the button “Button MouseOver”', () : void => {
  it('Validate that the message “MouseOver Done” is displayed', () : void => {
    //Visit the test page.
    cy.visit('ClarityTestPage.html')
    //Move the mouse over the button “Button MouseOver”.
    cy.get('#buttonMouseOver').trigger('mouseover')
    //Validate that the message “MouseOver Done” is displayed.
    cy.get('#buttonMouseOverMsg').should('have.text', 'MouseOver Done')
  })
})