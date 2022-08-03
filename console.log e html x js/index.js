console.log('hello');
//tipo de dado - string = texto entre ('') ou ("") ou (``)
console.log(12345) //tipo de dado - number
// separação decimal pode ocrrer com (. ou ,)

console.log('Meu nome é "Juliana". Estou praticanto JS às', 11, 'da manhã.'); 
//Exercício - números entre vírgulas.
/*Para mesclar js e html.Uma boa prática é escrever no body. No head, quando navegador idetifica script, executa 
        e demora para carregar o html. */ 
console.log('Este trecho será exibido no console do navegador.');

//função prompt retorna string; prefira código explícito
let num1= prompt('digite um número');
let num2= prompt('digite mais um número');

num1=Number(num1);
num2=Number(num2);

const adição=num1 + num2; 
alert(`O total é de: ${adição}`);

const produto=num1 * num2;
alert(`O produto é: ${produto}`); 


const quociente=num1 / num2;
alert(`O quociente é:${quociente}`);

//código explícito
alert(`A diferença é:${num1 - num2}`)











