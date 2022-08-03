//  operadores aritméticos, de atribuição e incremento

/* 
aritméticos 
()
** potenciação-
* multiplicação; 
/ divisão % resto da divisão;
+ adição e concatenação(depende do tipo de dado); 
- subtração;  
*/

const num1 = 5;
const num2 = 5;
console.log(num1 + num2); 
//concatenação dado do tipo string
const num3 = '5';
console.log(num2 + num3);
console.log(num1 ** num2);

/* operador de incremento;
   não utilizar com constantes;
   uando pós contador++, executa primeiro o comando depois a incremento;
   uando pré ++contador, executa primeiro incremento, depois comando. 
*/
let contador=1; 
contador++;  
console.log(contador);  //incrementação

let operador=4
++operador;
console.log(operador); 
--operador;             //operador decremento = inverso
console.log(operador);
const step=3;          // operadores de incremento trabalham  1 em 1 ; incrementação acima de 1;
operador= operador + step;
console.log(operador);
operador*=step;    //operadores de atribuição
console.log(operador);

/* observar quando for string, pode ocorrer NAN - not a number;
usar parseInt() para retornar número inteiro;
parseFloat p/ decimais
ou ainda mais fácil, usar number
*/
const num4=5;
const num5='5 pães';
console.log(num4 * num5);
const num6=5;
const num7= parseInt('5 pães');
console.log(num6 * num7);
console.log(typeof num7);
const num8= 10;
const num9= '1.6';
console.log(num8 + num9);
const num10=10;
const num11=parseFloat('1.6');
console.log(num10 * num11);










