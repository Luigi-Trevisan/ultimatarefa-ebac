it('teste', () => {
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
  const codigoCupom = `Ganhe10-${timestamp}`;
  const descricaoCupom = `Cupom-${timestamp}`;

  cy.visit('http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons');

  cy.get('.auth-wrapper > .btn').type('admin_ebac');
  cy.get(':nth-child(4) > section > input').type(' @admin!&b@c!2022');
  cy.get('.auth-btn-wrapper > .authorize').click();
  cy.get('.btn-done').click();

  cy.get('.try-out > .btn').click();

  cy.get('[data-param-name="code"] > .parameters-col_description > input').type(codigoCupom);
  cy.get('[data-param-name="amount"] > .parameters-col_description > input').type('10');
  cy.get('[value="fixed_cart"]').click();
  cy.get('[data-param-name="description"] > .parameters-col_description > input').type(descricaoCupom);
cy.writeFile('cypress/fixtures/cupom.json', { codigo: codigoCupom });
  cy.get('[value="fixed_cart"]').type('30/01/2025');
  cy.get('[data-param-name="individual_use"] > .parameters-col_description > input').type('false');
  cy.get('[data-param-name="product_ids"] > .parameters-col_description > input').type('255974');

  cy.get('.execute').click();
});
