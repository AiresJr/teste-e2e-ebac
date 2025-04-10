class produtosPage {
    visitarUrl() {
        cy.visit('produtos')
    };
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

}

export default new produtosPage()