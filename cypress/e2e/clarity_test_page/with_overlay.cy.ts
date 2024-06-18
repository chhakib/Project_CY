import { faker } from "@faker-js/faker";

describe('Close the overlay and perform all actions', (): void => {
    // This function will observe the DOM and close the popup if it is opened
    const observeAndClosePopup = (): void => {
        cy.document().then((document: Document) => {
            new MutationObserver((): void => {
                const closeModelBtn = Cypress.$('button[id^="CloseOverlay"]');
                if (closeModelBtn.length) {
                    closeModelBtn.trigger('click');
                }
            }).observe(document.body, { childList: true, subtree: true });
        });
    };

    it('should validate correctly', (): void => {
        // Generate a random word
        const word: string = faker.lorem.word();
        // Visit the test page.
        cy.visit("ClarityTestPage.html?withOverlay");

        observeAndClosePopup();
        // Enter a word in the first input field
        cy.get('#input_text1').type(word);

        // Click on the "Propagate" button
        cy.get('#propagate').click();

        // Validate that all other input fields contain the same value
        cy.get('#input_text2').should('have.value', word);
        cy.get('#input_text3').should('have.value', word);
        cy.get('#input_text4').should('have.value', word);

        // Click on the "Clear All" button
        cy.get('button[onclick=\'clearValue()\']').click();

        // Validate that all the 4 input fields are empty
        cy.get('#input_text1').should('have.value', '');
        cy.get('#input_text2').should('have.value', '');
        cy.get('#input_text3').should('have.value', '');
        cy.get('#input_text4').should('have.value', '');
    });
});