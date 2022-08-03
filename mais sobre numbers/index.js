let num1=5;
let num2=10;
console.log(num1 + num2);

let num3=6;
let num4=20;
console.log(num3.toString() + num4); //   alterar number -> string .toString - temporário
console.log(typeof num3);
num3=num3.toString(); //   alteração permanente
console.log(typeof num3); 

let num5=10.567438;
console.log(num5.toFixed(2)); // arredondar, diminuir casas decimais; obs:anotações de . são temporárias
console.log(Number.isInteger(num5));

let num6=0.7;
let num7=0.1;
num6+=num7; //  0.8
num6+=num7; //  0.9
num6+=num7; //  1.0
num6+=num7; //  1.1 
num6+=num7; //  1.2  
num6+=num7; //  1.3
num6+=num7; //  1.4
num6+=num7; //  1.5
num6+=num7; //  1.6
num6+=num7; //  1.7
num6+=num7; //  1.8
num6+=num7; //  1.9
num6+=num7; //  2.0
num6=parseFloat(num6.toFixed(2)); //    parseFloat ou Number
console.log(num6);
console.log(Number.isInteger(num6));

let num8=0.7;
let num9=0.1;

num8 = ((num8 * 100) + (num9 * 100))/100; //    usando a operação
num8 = ((num8 * 100) + (num9 * 100))/100;
num8 = ((num8 * 100) + (num9 * 100))/100;
num8=Number(num8.toFixed(2))
console.log(num8);