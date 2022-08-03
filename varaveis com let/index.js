//Variáveis: salvar rótulo ou valor na memória. Importante observar o fechamento da string para executar o valor ou usar concatenação.
let nome= 'João';

console.log(nome, 'nasceu em 1984.');
console.log('Em ,2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve um filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

let idade; //variável foi apenas declarada.
console.log(idade);
console.log('valor qualquer'); //inicializando a variável
idade= 30; //alterar valor da variável
console.log(30);
//variáveis com let não podem ser "redeclaradas";
//não criar com palavras reservadas(linguagem);
//variáveis precisam ter nomes significativos, facilita o entendimento em códigos maiores;
//não iniciar com números, letra minúsculas de preferência;
//não pode conter espaços ou traços, utilize camelCase;
//Case sensitive.
let nomeCompleto='Juliana Brandão';
let nomecompleto='Andre Brandão'
console.log(nomeCompleto)

//NÃO UTILIZE var, USE let.


//Exercício com variável
let varA='A'; //B
let varB='B'; //C
let varC='C'; //A 


[varA, varB, varC]=[varB, varC, varA];
console.log(varA, varB, varC);





