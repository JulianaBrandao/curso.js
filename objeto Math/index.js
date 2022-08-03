let num1=9.54
let num2=Math.floor(num1);  //  arredonda para menos
console.log(num2);
let num3=Math.ceil(num1);   //  arredonda para mais
console.log(num3);
let num4=Math.round(num1);  //  arredonda para o mais próximo
console.log(num4);

console.log(Math.max(1, 2, 3, 4, 5));   //  encontrar o maior número de uma sequência
console.log(Math.min(1, 2, 3, 4, 5));   //  encontrar o menor número de uma sequência

console.log(Math.random()); //  gerar números aleatórios
const aleatório=Math.random() * (20 - 10) + 20;
console.log(aleatório); 
