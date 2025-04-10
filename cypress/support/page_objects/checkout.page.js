class checkoutPage {
    checkoutCompras(nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento) {
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

export default new checkoutPage