/*
Juliana Brandão tem 30 anos, pesa 60kg
tem 1.6 de altura e seu IMC é de 23.4
Juliana nasceu em 1992
*/
const nome='Juliana';
const sobrenome='Brandão';
const idade=30;
const peso=60;
const alturaEmMetros=1.6;
let indicemassacorporal=peso/(alturaEmMetros * alturaEmMetros);
let anoNascimento= 2022 - idade;
//nas operações, identificar com valores dados às variáveis e cosntantes. 

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}Kg,`);
console.log(`tem ${alturaEmMetros} de altura e seu imc é de ${indicemassacorporal}`);
console.log(`${nome} nasceu em ${anoNascimento} + .`)
// ${} usado para retomar variável e constante em uma string. Template string.



