//  Agora inverta o lado do triângulo. Por exemplo:

let symbol='*';
let print =' ';




for (let cont = 5; cont > 0; cont --){
 let index = cont-2;
  for (index; index > 0; index --){
    
    print= print + print;
  }
  
  print += symbol;
  console.log(print);
}