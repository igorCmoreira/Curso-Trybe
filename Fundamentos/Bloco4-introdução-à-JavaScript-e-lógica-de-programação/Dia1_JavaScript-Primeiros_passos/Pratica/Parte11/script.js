// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let impostoDeRenda = 0, INSS = 0, salarioBruto = 3000, slarioMenosINSS = 0;


if (salarioBruto < 1556.94){
  
  INSS = (salarioBruto/100)*8;

} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
  
  INSS = (salarioBruto/100)*9;

} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
  
  INSS = (salarioBruto/100)*11;

} else if (salarioBruto > 5189.82){
  
  INSS = 570.88;
}

slarioMenosINSS = salarioBruto - INSS; 

if (slarioMenosINSS < 1903.98){
  impostoDeRenda = 0;
}else if (slarioMenosINSS > 1903.98 &&  slarioMenosINSS <= 2826.65){
  impostoDeRenda = (slarioMenosINSS/100)* 7.5;
  impostoDeRenda -=142.80;
}else if (slarioMenosINSS > 2826.66 &&  slarioMenosINSS <= 3751.05){
  impostoDeRenda = (slarioMenosINSS/100)* 15;
  impostoDeRenda -= 354.80;
}else if (slarioMenosINSS > 3751.06 &&  slarioMenosINSS <= 4664.68){
  impostoDeRenda = (slarioMenosINSS/100)* 22.5;
  impostoDeRenda -= 636.13;
}else if (slarioMenosINSS > 4664.99){
  impostoDeRenda = (slarioMenosINSS/100)* 27.5;
  impostoDeRenda -= 869.36;
}

console.log(slarioMenosINSS-impostoDeRenda);