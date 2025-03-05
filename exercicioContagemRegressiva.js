function contagemRegressiva(numero){
        if(numero < 0 || numero == 0 ){
        console.log('Não é possível realizar a contagem regressiva de um número negativo ou igual a zero')
        return;
    }
    for (let contagem = numero; contagem != 0; contagem--)
        console.log(contagem)
}

contagemRegressiva(50)