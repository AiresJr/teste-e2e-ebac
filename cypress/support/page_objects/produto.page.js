class produtosPage {
    visitarUrl() {
        cy.visit('produtos')
    };
    //Faz a busca de produtos por nome 
    buscarProduto(nomeProduto) {
        cy.get('[name=s]').eq(1).type(nomeProduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.get('.product_title').should('contain', nomeProduto)

    };
    addProtudoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('exist')
    };
    checkoutCompras(nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento) {
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_address_1').type(endereço)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#payment_method_' + pagamento).click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice', { timeout: 20000 }).should('exist')
    }
}

export default new produtosPage()