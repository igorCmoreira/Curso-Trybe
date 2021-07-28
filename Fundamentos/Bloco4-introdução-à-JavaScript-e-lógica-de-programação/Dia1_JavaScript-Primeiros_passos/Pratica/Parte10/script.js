// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
let valorCusto = 100, lucro = 0, valorVenda = 206, lucroFinal = 0;
let impostoSobreOCusto = (valorCusto/100)*20;
let valorCustoTotal= valorCusto + impostoSobreOCusto;


lucro = valorVenda - valorCustoTotal;

if (valorVenda < 0 || valorCusto < 0 || lucro < 0){
  console.log("erro!! valor abaixo de 0");
  return 0;
}

lucroFinal = lucro * 1000;

console.log("O lucro por 1000 peças é:", lucroFinal);
