
var prompt = require('prompt-sync')();

// Criando um array de objetos com produtos e preços
const produtos = [
    { nome: 'Arroz', preco: 25.50 },
    { nome: 'Feijão', preco: 12.30 },
    { nome: 'Macarrão', preco: 7.90 },
    { nome: 'Óleo', preco: 5.75 }
];

// Exibindo o nome e o preço formatado em R$
produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2).replace('.', ',')}`);
});
