/*
O seu nome é: 
O seu nome tem: 
A segunda letra do seu nome é 
As últimas 3 letras do seu nome são 
As palavras do seu nome são 
Seu nome com letras maiúsculas 
Seu nome com letras minúsculas 
*/

const nome=prompt('Digite seu nome completo');
document.body.innerHTML =`O seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML +=`O seu nome tem: <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML +=`A segunda letra do seu nome é <strong>${nome.charAt(1)}</strong><br />`;
document.body.innerHTML +=`As últimas 3 letras do seu nome são <strong>${nome.slice(-3)}</strong><br />`;
document.body.innerHTML +=`As palavras do seu nome são <strong>${nome.split(' ')}</strong><br />`
document.body.innerHTML +=`Seu nome com letras maiúsculas <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML +=`Seu nome com letras minúsculas <strong>${nome.toLowerCase()}</strong><br />`;

