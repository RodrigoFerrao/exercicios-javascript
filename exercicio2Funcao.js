/* Exercício 4 - Funções 
Criar uma função que exiba umua mensagem de boas-vindas ao usuário quando a página for carregada.
Utilize essa função para personalizar a experiência do usuário
Exemplo:
Seja Bem-vindo Paulo Oliveira, seu último acesso foi em 31/12/2024
*/

function welcomeUser(name, lastName, lastAccess) {
    console.log(`Seja Bem-vindo, ${name} ${lastName}, seu último acesso foi em ${lastAccess}`)
}
welcomeUser('Rodrigo', 'Ferrão', '06/01/2025')