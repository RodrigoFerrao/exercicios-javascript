/* Exercício 4 - Funções 
Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta.
Utilize essa função para converter diferentes strings.
*/

function stringToUpperCase(string){
    const newString = string.toUpperCase()
    return newString
}

strings = ['Boas Vindas', 'Testando', 'Aprovado'];
strings.forEach((str) =>{
    console.log(stringToUpperCase(str))
})