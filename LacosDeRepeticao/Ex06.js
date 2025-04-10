var prompt = require('prompt-sync')();
let idade;

do {
  idade = parseInt(prompt("Digite sua idade (maior ou igual a 0):"));
} while (isNaN(idade) || idade < 0);

console.log("Idade válida informada:", idade);