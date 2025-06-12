it('add products to cart com cupom', () => {
  cy.fixture('cupom.json').then((data: { codigo: string }) => {
    const codigoCupom = data.codigo;

    cy.visit('http://lojaebac.ebaconline.art.br');
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click();
    cy.get('.button-variable-item-L').click();
    cy.get('.button-variable-item-Green').click();
    cy.get('.plus').click().click().click().click();
    cy.get('.single_add_to_cart_button').click();
    cy.get('.woocommerce-message > .button').click();

    // Aplica o cupom usando o valor recuperado
    cy.log('Cupom recuperado:', codigoCupom);
    cy.get('#coupon_code').type(codigoCupom);
    cy.get('[name="apply_coupon"]').click();
  });
});
