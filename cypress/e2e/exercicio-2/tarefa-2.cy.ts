/// <reference types="cypress" />

import cypress from "cypress";

it('sucessuful login', () => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  cy.get('#username').type('gibsonluigi@hotmail.com')
  cy.get('#password').type('luigi34556')
  cy.get('#rememberme').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click()
})
 Cypress._.times(5, () => {
it('failed login', () => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  cy.get('#username').type('gibsonluigi@hotmail.com')
  cy.get('#password').type('luigi3456')
  cy.get('#rememberme').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail gibsonluigi@hotmail.com está incorreta. Perdeu a senha?')
//Mensagem de  de login erro apareceu corretamente
//
})
})