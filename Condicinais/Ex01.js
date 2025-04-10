//Verificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();

let n =  Number(prompt("Digite um número"));

 if( n >= 1 ){
   console.log("O número é positivo") 
 }else if(n < 0){
    console.log("O número é negativo")
 }else if(n === 0){
    console.log("O número é igual a zero")
 }else{
    console.log("O númeoro é inválido")
 }
