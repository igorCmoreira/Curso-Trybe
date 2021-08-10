// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let symbol = '*';
let print ='';

for (let index = 0 ; index < 5; index ++  ){
  print = print + symbol; 
}
for (let contP = 0; contP < 5; contP++ ){
  console.log(print);
}