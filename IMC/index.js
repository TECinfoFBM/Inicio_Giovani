var readlineSync = require('readline-sync')


let altura = 0
let peso = 0


function entradaDados(){
   //utilizamos a função questionFloat para ler um float do terminal
   //esta função faz parte da biblioteca readline-sync


   //a informação lida é salva na variável altura
   altura = readlineSync.questionFloat("Digite a altura: ")


   //a informação lida é salva na variável peso
   peso = readlineSync.questionFloat("Digite o peso: ")
}


function imc(alt, pe){
   //utilizamos o return para
   //retornar o resultado
   return pe/(alt**2)
}


function principal(){
   //vamos executar primeiro a função
   //de entrada de dados
   entradaDados()
  
   //vamos executar depois a função
   //de cálculo do IMC
   let result = imc(altura,peso)


   //vamos executar agora a
   //apresentação dos resultados
   console.log("O IMC é: " + result.toFixed(2))
}
principal()
