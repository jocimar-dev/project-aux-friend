const http = require ('http');

const hostname = '123.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port,hostname, () => {
    console.log('Servidor Rodando!')
})

var lang = 'de';

if (lang == 'es') {
    console.log('Hola Mundo')
} else {
    if (lang == 'en') {
        console.log('Hello World')
    } else {
        console.log('Hallo Welt')
    }
}

var number1 = 2;
var number2 = 5;

 if (number >= number2) {
    console.log('Primeiro numero é maior ou igual ao segundo')
 } else {
    console.log('Segundo numero é menor que o primeiro')
 }

 var number1 = 3;
 var number2 = 5;
 var number3 = 9;
  if (number1 > 5 && number1 > 9) {
     console.log('Primeiro numero é maior')
  } else if (number2 > number1 && number2 > number3) {
     console.log('Segundo numero é maior')
  } else {
     console.log('Terceiro numero é maior')
  }

  var day = 3;
  var weekly = "";

  switch (day) {
      case 0:
          weekly = 'Domingo';
          break;
      case 1:
          weekly = 'Segunda';
          break;
        case 2:
          weekly = 'Terça';
          break;
        case 3:
          weekly = 'Quarta';
          break;
        case 4:
          weekly = 'Quinta';
          break;
        case 5:
          weekly = 'Sexta';
          break;
        case 6:
          weekly = 'Sabado';
          break;
        default:
            weekly = 'Dia inválido'
  }



  function final(grade) {
      var conditionA = I == 70 && II == 70 && III == 70 && IV == 70 && V == 70;
      var conditionB = I == 70 && III == 70 && IV == 70 && III < 70 || V < 70;
      var conditionC = I == 70 && II == 70 && III < 70 || IV < 70;

    if (conditionA) {
    console.log('A - Passou em todos os exames')
    } else if (conditionB){
        console.log = 'B - Passou em I, II e IV, mas não em III ou V'
    }else if(conditionC) {
        console.log = 'C - Passou em I e II, III ou IV, mas não em V';
    } else {
        console.log = 'Reprovado - outras situações';
    }
 
//   Em uma certificação são feitos 5 exames (I, II, III, IV e V). Escreva um
    //   programa que leia as notas destes exames e imprima a classificação do
    //   aluno, sabendo que a média é 70.
    //      a. Classificação: A - passou em todos os exames;
    //      b. B- passou em I, Il e IV, mas não em III ou V;D
    //      c. C- passou em le ll, III ou IV, mas não em V.
    //      d. Reprovado - outras situações.


    // switch (grade) {
    //     case I && II && III && IV && V:    
    //         console.log = 'A - Passou em todos os exames';
    //         break;
    //     case I && II && IV && III || V:    
    //         console.log = 'B - Passou em I, II e IV, mas não em III ou V';
    //         break;
    //     case I && II && III || IV: 
    //         console.log = 'C - Passou em I e II, III ou IV, mas não em V';
    //         break;
    //     default:
    //         console.log = 'Reprovado - outras situações';
    //     }

        