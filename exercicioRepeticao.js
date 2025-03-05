/* 
Exercício 1 - Estrutura de Repetição
Percorrer uma lista de nomes, contendo os noomes:
Eduardo, Fernando, Maria, João e Francisco
Registrar os seguintes dados:
Número da execução, começando em 1
Nome que está sendo executado com Separadores
EX: 
Execução:1
Nome: Eduardo
------------------ 
*/

const listaNomes = ['Eduardo', 'Fernando', 'Maria', 'João', 'Francisco'];
listaNomes.forEach((nome, index) => {
    console.log('Execução: ' + (index + 1))
    console.log('Nome: ' + nome)
    console.log('----------------')
})