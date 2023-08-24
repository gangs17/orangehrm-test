/// <reference types="cypress"/>

export default class loginPage {
    constructor(con) {
      this.config = con;
    }
    //Organization Logo locator
    getOrgLogo() {
      return cy.get('[class="orangehrm-login-branding"]');
    }
    //Username Label locator
    getUsernameLabel() {
      return cy.get('[class="oxd-label"]').first();
    }
    //Password Label locator
    getPasswordLabel() {
      return cy.get('[class="oxd-label"]').last();
    }
    //Username Input locator
    getUsernameInput() {
      return cy.get('[name="username"]');
    }
    //Password Input locator
    getPasswordInput() {
      return cy.get('[type="password"]');
    }
    //Login Butoon locator
    getLoginButton() {
      return cy.get(".orangehrm-login-button");
    }
    //Forgot Password locator
    getForgotPassword() {
      return cy.get(".orangehrm-login-forgot-header");
    }
  }