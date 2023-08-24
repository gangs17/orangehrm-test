/// <reference types="cypress" />

import LoginPage from "../pages/loginPage.cy";

describe("Login page elements visibility", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    //website link
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("Verify that organization logo is visible", () => {
    //Asserting that redirecting to mentioned URL
    cy.url().should(
      "include",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    //Asserting Organization Logo is visible
    loginPage.getOrgLogo().should("be.visible");
    //Asserting the Username Label is visible
    loginPage.getUsernameLabel().should("be.visible");
    //Asserting the Password Label is visible
    loginPage.getPasswordLabel().should("be.visible");
    //Asserting the Username Input field is visible
    loginPage.getUsernameInput().should("be.visible");
    //Asserting the Pasword Input field is visible
    loginPage.getPasswordInput().should("be.visible");
    //Asserting the Login Button  is visible
    loginPage.getLoginButton().should("be.visible");
    //Asserting the Forgot Password is visible
    loginPage.getForgotPassword().should("be.visible");
  });
});

describe("User login with credential", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    //website link
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("Verify that user not able to login with wrong username and password", () => {
    //Wrong Username Input field
    loginPage.getUsernameInput().type("Dummy");
    //Wrong Password Input field
    loginPage.getPasswordInput().type("Dummy");
    //Clicking Login button
    loginPage.getLoginButton().click();
    //Asserting the error alert is appeared
    cy.get(".oxd-alert-content--error").should(
      "contain",
      "Invalid credentials"
    );
  });
  it("Verify that user not able to login with wrong username and correct password", () => {
    //Wrong Username Input field
    loginPage.getUsernameInput().type("Dummy");
    //Correct Password Input field
    loginPage.getPasswordInput().type("admin123");
    //Clicking Login button
    loginPage.getLoginButton().click();
    //Asserting the error alert is appeared
    cy.get(".oxd-alert-content--error").should(
      "contain",
      "Invalid credentials"
    );
  });
  it("Verify that user not able to login with correct username and wrong password", () => {
    //Correct Username Input field
    loginPage.getUsernameInput().type("Admin");
    //Wrong Password Input field
    loginPage.getPasswordInput().type("Dummy");
    //Clicking Login button
    loginPage.getLoginButton().click();
    //Asserting the error alert is appeared
    cy.get(".oxd-alert-content--error").should(
      "contain",
      "Invalid credentials"
    );
  });
  it("Verify that user not able to login without enter username and password", () => {
    //Empty Username Input field
    loginPage.getUsernameInput().type(" ");
    //Empty Password Input field
    loginPage.getPasswordInput().type(" ");
    //Clicking Login button
    loginPage.getLoginButton().click();
    //Asserting that Both Input fields highlighted as RED
    cy.get(".oxd-input--error").first().should("be.visible");
    //Asserting that REQUIRED error message is appeared below the Username Input field
    cy.get(".oxd-input-field-error-message")
      .first()
      .invoke("text")
      .should("eq", "Required");
    //Asserting that REQUIRED error message is appeared below the Password Input field
    cy.get(".oxd-input-field-error-message")
      .last()
      .invoke("text")
      .should("eq", "Required");
  });
  it("Verify that user able to login with correct username and password", () => {
    //Correct Username Input field
    loginPage.getUsernameInput().type("Admin");
    //Correct Password Input field
    loginPage.getPasswordInput().type("admin123");
    //Clicking Login button
    loginPage.getLoginButton().click();
    //Asserting that Landing page URL
    cy.url().should(
      "include",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
});