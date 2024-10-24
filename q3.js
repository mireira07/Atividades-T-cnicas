// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; 
// enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// Variáveis dos valores
let indice = 12
let soma = 0
let k = 1

// Função para calcular conforme a questão.
function calculo(){
    if(k < indice){
    k = k + 1
    soma = soma + k
    console.log(soma);
    }
}

// Exibir o valor da variável soma.
calculo(k)