//Verificar se uma senha digitada está correta

var prompt = require ("prompt-sync")();

let senha = Number (prompt ("Digite uma senha"));
let senhaconfirmada = Number (prompt("Digite a senha novamente"));

if(senhaconfirmada = senha){
    console.log("A senha esta correta");
}else{
    console.log("Senha invalida")
}
