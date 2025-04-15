var prompt = require('prompt-sync')();

let alunos = [
    { nome: "João", presente: true },
    { nome: "Maria", presente: false },
    { nome: "Carlos", presente: true },
    { nome: "Ana", presente: true }
  ];
  
  // Usando forEach para listar os alunos presentes
  console.log("Alunos que compareceram à aula:");
  alunos.forEach(aluno => {
    if (aluno.presente) {
      console.log(aluno.nome);
    }
  });