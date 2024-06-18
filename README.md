
# Cypress Test Project

This project contains end-to-end tests for a Clarity test page, using Cypress and TypeScript.

## Prerequisites

- Node.js and npm installed on your machine.
- Clone this repository to your local machine.

## Installation

After cloning the repository, run the following command to install the dependencies:

```bash
npm install
```

## Running the Tests

There are four main tests in this project. Here's how to run them:

### Test 1: `with_overlay.cy.ts`

This test checks the behavior of a page with an overlay. It generates a random word, types it into an input field, propagates this word to other input fields, then clears all fields.

To run this test, use the following command:

```bash
npx cypress run --spec "cypress/e2e/clarity_test_page/with_overlay.cy.ts"
```

### Test 2: `button_click.cy.ts`

This test checks the behavior of a button when clicked. It visits the test page, clicks the button, and verifies that the message "Click Done" is displayed.

To run this test, use the following command:

```bash
npx cypress run --spec "cypress/e2e/clarity_test_page/button_click.cy.ts"
```

### Test 3: `button_mouseover.cy.ts`

This test checks the behavior of a button when hovered over. It visits the test page, moves the mouse over the button, and verifies that the message "MouseOver Done" is displayed.

To run this test, use the following command:

```bash
npx cypress run --spec "cypress/e2e/clarity_test_page/button_mouseover.cy.ts"
```

### Test 4: `button_dblclick.cy.ts`

This test checks the behavior of a button when double-clicked. It visits the test page, double-clicks the button, and verifies that the message "DblClick Done" is displayed.

To run this test, use the following command:

```bash
npx cypress run --spec "cypress/e2e/clarity_test_page/button_dblclick.cy.ts"
```
