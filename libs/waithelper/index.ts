export class WaitHelper {
  public static default(): Cypress.Chainable<undefined> {
    return cy.wait(100);
  }
}
