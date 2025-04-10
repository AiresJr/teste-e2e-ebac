/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import produtoPage from "../support/page_objects/produto.page";
import carrinhoPage from '../support/page_objects/carrinho.page';
import checkoutPage from '../support/page_objects/checkout.page';

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        produtoPage.visitarUrl()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var endereço = faker.location.streetAddress()
        var cidade = faker.location.city()
        var cep = faker.location.zipCode('#####-###')
        var telefone = faker.phone.number(({ style: 'national' }), '(##) #####-####')
        var email = faker.internet.email()
        //Escolha as opções de pagamento
        var pagamentoTransf = 'bacs'
        var pagamentoCheque = 'cheque'
        var pagamentoEntrega = 'cod'

        cy.fixture('produtos').then(dados => {
            produtoPage.buscarProduto(dados[1].nomeProduto);
            produtoPage.addProtudoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade);
            produtoPage.buscarProduto(dados[2].nomeProduto);
            produtoPage.addProtudoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade);
            produtoPage.buscarProduto(dados[3].nomeProduto);
            produtoPage.addProtudoCarrinho(dados[3].tamanho, dados[3].cor, dados[3].quantidade);
            produtoPage.buscarProduto(dados[0].nomeProduto);
            produtoPage.addProtudoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade);
            carrinhoPage.irParaCheckout()
            checkoutPage.checkoutCompras(nome, sobrenome, endereço, cidade, cep, telefone, email, pagamentoEntrega);
        })

    });


})
