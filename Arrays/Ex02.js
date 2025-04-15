//Uma escola quer registrar as turmas disponíveis para o turno da
//manhã.

var prompt = require('prompt-sync')();

let turmasManha = [
    { nome: "Turma A", horarioInicio: "08:00", horarioFim: "11:00" },
    { nome: "Turma B", horarioInicio: "08:30", horarioFim: "11:30" },
    { nome: "Turma C", horarioInicio: "09:00", horarioFim: "12:00" },
    { nome: "Turma D", horarioInicio: "09:30", horarioFim: "12:30" }
  ];
  
  // Exibindo as turmas disponíveis para o turno da manhã
  console.log("Turmas disponíveis para o turno da manhã:");
  turmasManha.forEach(turma => {
    console.log(`${turma.nome} - Início: ${turma.horarioInicio} / Fim: ${turma.horarioFim}`);
  });