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

