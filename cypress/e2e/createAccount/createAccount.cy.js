import { faker } from "@faker-js/faker";
import { selectorCreateAccount } from "../../support/selector/selectorCreateAccount";

describe('Test Suite - Register new account', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('EXTERNAL_API'))
  })

  function generateRandomAccount() {
    cy.get(selectorCreateAccount.firstname).type(faker.person.firstName());
    cy.get(selectorCreateAccount.lastname).type(faker.person.lastName());
    cy.get(selectorCreateAccount.email).type(faker.internet.email());
    cy.get(selectorCreateAccount.password).type('big@dev@q123');
    cy.get(selectorCreateAccount.passwordConfirmation).type('big@dev@q123');
    cy.get(selectorCreateAccount.createAccountButton).click();
  }

  it('BIG01: When the user accesses the Magento page and clicks on the option to create a new account, the registration screen should be displayed.', () => {
    cy.contains('Create an Account').should('be.visible').click();
    cy.url().should('eq', (Cypress.env('EXTERNAL_API') + 'customer/account/create/'));
    cy.contains('Create New Customer Account').should('be.visible');
    cy.contains('Personal Information').should('be.visible');
    generateRandomAccount();
  })
})



