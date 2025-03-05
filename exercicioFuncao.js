/* Exercício 3 - Funções 
Criar uma função que soma dois números e retorna esse número somado
Deve ser enviado por parâmetro os dois números a serem somados
Exemplo:
Número 1: 20
Número 2: 10
Soma: 30
*/

function soma(valor1, valor2) {
    let resultado = valor1 + valor2
    console.log('Número 1: ' + valor1)
    console.log('Número 2: ' + valor2)
    console.log('Soma: ' + resultado)
    return resultado
}
soma(25, 30)