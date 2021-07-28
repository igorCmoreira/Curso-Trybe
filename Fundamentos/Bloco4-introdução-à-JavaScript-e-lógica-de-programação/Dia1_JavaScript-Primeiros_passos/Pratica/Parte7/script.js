// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let porcentagem = 80;

if (porcentagem < 0 || porcentagem > 100){
  console.log("erro!! valor da nota fora do esperado")
} else {
  if (porcentagem >= 90){
    console.log("A");
  }else if (porcentagem >= 80){
    console.log("B");
  }else if (porcentagem >= 70){
    console.log("c");
  }else if (porcentagem >= 60){
    console.log("D");
  }else if (porcentagem >= 50){
    console.log("E");
  }else if (porcentagem < 50){
    console.log("F");
  }
}