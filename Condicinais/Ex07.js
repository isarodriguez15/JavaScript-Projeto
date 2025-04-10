//Verificar o mês pelo número(Switch case)

var prompt = require ("prompt-sync")();

let meses = Number("Digite o numero de um mes")

switch(meses){
    case 1:
        console.log("O mes escolhido foi: janeiro");
    break;
    case 2:
        console.log("O mes escolhido foi: fevereiro");
    break;
    case 3:
        console.log("O mes escolhido foi: Marco");
    break;
    case 4:
        console.log("O mes escolhido foi: Abril");
    break;
    case 5:
            console.log("O mes escolhido foi: Maio");
    break;
    case 6:
            console.log("O mes escolhido foi: Junho");
    break;
    case 7:
            console.log("O mes escolhido foi: Julho");
    break;
    case 8:
            console.log("O mes escolhido foi: Agosto");
    break;
    case 9:
            console.log("O mes escolhido foi: Setembro");
    break;
    case 10:
            console.log("O mes escolhido foi: Outubro");
    break;
    case 11:
            console.log("O mes escolhido foi: Novembro");
    break;
    case 12:
            console.log("O mes escolhido foi: Dezembro");
    break;
    
    
    default:
            console.log("Dado inválido! 😢");
    }
