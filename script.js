let salario = 2300;
let vendas = 1500;
let resto = vendas - 1200
let comissao = vendas * 3 / 100;
let comisBonus = resto * 5 / 100;
let salarioFinal = salario + comissao 

function calculateSalary(){
  if(vendas > 1200){
    salarioFinal = salario + comissao + comisBonus
    console.log(`Seu salario esse mês foi de: R$${salarioFinal}`)
    return salarioFinal
  }else{
    console.log(`Seu salario esse mês foi de: R$${salarioFinal}`)
  }
  return salarioFinal
}
calculateSalary()

let retirada = 550;
let retiradaAux = retirada;
let restRenda = salarioFinal - retirada;
let result = '';
let nota200 = parseInt(retiradaAux / 200);
retiradaAux = retiradaAux % 200
let nota100 = parseInt(retiradaAux / 100);
retiradaAux = retiradaAux % 100
let nota50 = parseInt(retiradaAux / 50);
retiradaAux = retiradaAux % 50


function cashMachine(saque, rendaMes, vendaMes ){ 

if(retirada % 50 !== 0 && salarioFinal >= saque ){
  result += 'No momento só temos notas de 50, 100 e 200, tente outro valor.'
   console.log(result)
   return result
}
if(salarioFinal < saque){
  result += 'Saldo insuficiente';
  console.log(result)
}else{
 result += `Seu saque de: R$${retirada} foi feito com Sucesso! 
 Notas sacadas: ${nota200} de R$200, ${nota100} de R$100 e
  ${nota50} de R$50, Salto Atual: R$${restRenda}.`
  console.log(result)
} 
return result
}
cashMachine(retirada, salario, vendas)

let atualStock = 62;
let maxStock = 100;
let minStock = 25;
let mediaStock = (maxStock + minStock) / 2;
let resultCompras = '';

function calculateStock(stockAtual, stockMax, StockMin){
if(stockAtual >= mediaStock){
  resultCompras += 'Não efetuar a compra'
  console.log(resultCompras);
  return result
}else{
  resultCompras += 'Seu estoque está baixo efetuar a compra para repor'
}
console.log(resultCompras);
return result

}
calculateStock(atualStock, maxStock, minStock)


let nascimento = 1993;
let anoAtual = 2022;
function calculateAge(born, year){

let idade = anoAtual - nascimento;
let mes = 12 * idade;
let dia = 365 * mes;
let week = 4 * mes;
let stringIdade = `Eu tenho ${idade} anos, 
${mes} meses, ${dia} dias e ${week} semanas.`;
console.log(stringIdade)
return stringIdade
}
calculateAge(nascimento, anoAtual)


let resultDiag = [];

function getDiagonal(matriz){

for(let i = 0; i < matriz.length; i++){
    resultDiag.push(matriz[i][i])
    
  }
  let stringDiag = `A diagonal principal é: ${resultDiag}`;
  console.log(stringDiag)
}
getDiagonal([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
]);


