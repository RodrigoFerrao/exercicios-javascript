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

/*
Exercício 2 - Estrutura de Decisão
Percorrer uma lista de cidades
Contendo: ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
Para cada item, verificar se a cidade Florianópolis está presente na lista
Caso esteja, adicionar uma mensagem de texto informando
Casõ não esteja, adicionar uma outra mensagem de texto informando
EX:
Execução: 1
Cidade: São Paulo
Encontrado / Não Encontrado
----------------
*/

const Cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife'];
Cidades.forEach((cidade, index) => {
    console.log('Execução: ' + (index + 1));
    console.log('Cidade: ' + cidade);
    if ((Cidades[index]) == 'Florianópolis') {
        console.log('Destino de Florianopólis encontrado');
    }
    else console.log('Destino de Florianópolis não encontrado');
    console.log('------------------')
});

