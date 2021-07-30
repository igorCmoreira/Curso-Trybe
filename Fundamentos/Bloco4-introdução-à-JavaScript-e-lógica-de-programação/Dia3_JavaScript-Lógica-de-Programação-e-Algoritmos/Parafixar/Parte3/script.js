// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:

let a = 2, b = 4, resultado = 0;
let operador = '*';

function sum (a,b){
  return a + b;
}
function mult(a,b){
  return a*b;
}
function sub (a,b){
  return a-b;
}
function div (a,b){
  if (b === 0){
    return "erro! valor invalido,a divisão não é possivel";
  }else{
    return a/b;
  }
}
function mod(a,b){
  if (b === 0){
    return "erro! valor invalido";
  }else{
    return a%b;
  }
}

switch (operador){
  case '+':
    resultado = sum(a,b);
    break;
  case '-':
    resultado = sub(a,b);
    break;
  case '/':
    resultado = div(a,b);
    break;
  case '*':
    resultado = mult(a,b);
    break;
  case '%': 
  resultado = mod(a,b);
  break;
  default:
    console.log('erro! operador não suportado');
}

console.log(resultado);
