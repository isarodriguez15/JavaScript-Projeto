//Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();

let n =  Number(prompt("Digite um número"));

 if( n % 2 == 0 ){
   console.log("O número é par"); 
 }else if(n % 2 == 1){
    console.log("O número é ímpar");
 }else{
    console.log("O número é inválido")
 }