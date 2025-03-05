/* Exercício 4 - Funções 
Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar.
Exemplo:
O Número 6 é Par
O Número 7 é impar
*/

function checkEvenOdd(number) {
    if (number % 2 == 0) {
        console.log(`O número ${number} é Par`);
    }
    else {
        console.log(`O número ${number} é Ímpar`);
    }
}
checkEvenOdd(12);
checkEvenOdd(13);