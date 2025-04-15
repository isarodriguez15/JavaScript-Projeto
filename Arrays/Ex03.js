var prompt = require('prompt-sync')();

let notasAluno = [7.5, 8.0, 9.3, 6.8, 7.9];

// Usando forEach para imprimir as notas
notasAluno.forEach((nota, index) => {
  console.log(`Nota ${index + 1}: ${nota}`);
});