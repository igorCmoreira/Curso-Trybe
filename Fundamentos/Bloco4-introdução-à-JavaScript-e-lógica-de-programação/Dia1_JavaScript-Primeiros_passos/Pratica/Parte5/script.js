// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let a = 2, b = 178, c = 1;
let eTriangulo = false;

if (a <= 0 || b <= 0 || c <= 0){
  
  eTriangulo = false;

}else if( a+b+c === 180){
   
  eTriangulo = true;

  } else {
  eTriangulo = false;
  }


  switch (eTriangulo){
    case true:
      console.log("é um triangulo");
      break;
    case false:
      console.log("não é um triangulo");
      break;
  }