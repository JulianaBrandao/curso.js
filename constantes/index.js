//  constantes
//  não se pode modificar valor de uma constante;
//  não criar com palavras reservadas(linguagem);
//  constantes precisam ter nomes significativos, facilita o entendimento em códigos maiores;
//  não iniciar com números, letra minúsculas de preferência;
//  não pode conter espaços ou traços, utilize camelCase;
//  Case sensitive.
const nome= 'Juliana';
console.log(nome);

//  importante: progredir os valores e não alterar.
const primeiroNumero=50;
const segundoNumero=25;
const resultado= primeiroNumero / segundoNumero;
const resultadoDuplicado= resultado * 2;
let resultadoTriplicado= resultadoDuplicado * 3;

console.log(resultadoTriplicado);
//  operadores aritméticos + - * /

//  buscar tipo de dado
console.log(typeof primeiroNumero);

//  tipos de dados primitivos:
const sobrenome= 'Brandão'; // string;
const idade= 30; // number;
const alturaEmMetros=1.6; //   number;
let endereço; //    apenas declarada, tipo undefined, não aponta local na memória;
let numeroCPF= null; // Nulo, não aponta local na memória. Não é objeto
//   verdaiero ou falso, boolean= true, false (valor lógico). alterar fluxo da aplicação  
let a = [1, 2];
const b = a;
// = operador de atribuição
console.log(a, b);  
// valor de 'a' foi atribuído em 'b', dados por referência:o valor de ambos apontam para o mesmo local na memória.
a = 3;
console.log(a, b);
// valor de 'a' alterado, cont 'b' permanece


