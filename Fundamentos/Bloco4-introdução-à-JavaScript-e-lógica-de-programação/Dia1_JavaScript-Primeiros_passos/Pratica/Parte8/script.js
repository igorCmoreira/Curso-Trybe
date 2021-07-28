// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let a = 1, b = 10, c = 15;
let resultado;

if ( a%2 === 0 || b%2 === 0 || c%2 === 0 ){
  resultado = true;
}else {
  resultado = false;
}

switch (resultado){
  case true:
    console.log("é par");
    break;
  case false:
    console.log("é impar");
    break;
}