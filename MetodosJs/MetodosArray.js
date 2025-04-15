//.length() => tamanho

//let frutas = ["Maça", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacaxi", "Abacate", "Jabuticaba", "Romã", 
    //"Seriguela", "Embu", "Caqui", "Uva verde", ];

//console.log(frutas.length);

//let numeros = [20,5,3]
//console.log(numeros.length);

// ------------------------------------------------------

// .reverse() -> reverte a nossa array
//let numeros = [70, 100, 120, 1000];

//numeros.reverse();

//console.log(numeros);

// -------------------------------------------------------

//let nomes = ["Valdemir", "Edson", "Anna", "Ana"];

//.push() => Adiciona no final
//nomes.push("Matheus")

//.pop() => Remover no final
//nomes.pop();

//.splice() => para remover o ultimo elemento
//console.log(nomes.splice())

//.shift()
//nomes.shift();

//.unshift() => Adiciona no inicio
//nomes.unshift("Sophia");

//console.log(nomes);

// -----------------------------------------------------------

//let nomesAnimais = ["Julie", "Meg", "Kiara", "Lola", "Sol"];

//.includes() => Se existe no array, se existir ele retornará true
// console.log(nomesAnimais.includes("Bob"));

// ------------------------------------------------------------
//let valores = [30, 55, 90, 66];

//Quero valores maiores que 50
//let maiores = valores.filter(num => num < 90);

//console.log(maiores)

// ------------------------------------------------------------

//.map() => Definição: Método usado arryas que permite transformar os elementos do array 
// original em novos valores, criando um novo array, sem modificar original.

//lista de nomes de alunos e notas
// let alunos = [
//     {nome: "Clara", nota: 8},
//     {nome: "Laura", nota: 10 },
//     {nome: "Hiohanna", nota: 9 },
//     {nome: "Isabelle", nota: 9 },
//     {nome: "Isaac", nota: 9 },
//     {nome: "Sillas", nota: 9 },
//     {nome: "Richard", nota: 9 },
//     {nome: "Bryan", nota: 9 },
// ];

// //Lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.nome);
// console.log(alunos) 

// let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
// })

// let alunoNota = alunos.map(aluno => aluno.nota);

// // console.log(alunoNomes);
// console.log(alunoNomesDois);

// 2. Criar um array com mensagens personalizadas
//let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

//Olá Caio
//Olá Dani

//let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`);


//console.log(mensagem);    

// 3. Pegar apenas os primeiros carcteres de nomes

//let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];

//let inicialnomes = nomes.map (element => element [0]);

//console.log(inicialnomes);

let emails =
 [
    "kaue@gmail.com",  "pedro@hotmail.com",  "julia @ outlook.com"
 ]

let dominios = emails.map(element => element.split("@")[0]);

console.log(dominios);
