import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

// import { WaitHelper } from "@mycompany/helpers/waithelper"; // -> Module not found: Error: Can't resolve '@mycompany/helpers/waithelper' in '/Users/michael/sites/minimal-cucumber-project/cypress/e2e'
// import { WaitHelper } from "libs/waithelper"; // -> Module not found: Error: Can't resolve 'libs/waithelper' in '/Users/michael/sites/minimal-cucumber-project/cypress/e2e'
import { WaitHelper } from "../../libs/waithelper/index"; // -> Works

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  WaitHelper.default();
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});
