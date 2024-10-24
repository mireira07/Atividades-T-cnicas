// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
// sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//  escreva um programa na linguagem que desejar onde, informado um número, ele calcule a 
//  sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1, temp;
    
    // Continuar gerando a sequência até que o valor seja maior ou igual ao número
    while (a <= num) {
        if (a === num) {
            return true;
        }
        temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

// Função para gerar a sequência de Fibonacci até um valor máximo
function generateFibonacci(limit) {
    let sequence = [0, 1];
    let a = 0, b = 1;
    let next = a + b;
    
    while (next <= limit) {
        sequence.push(next);
        a = b;
        b = next;
        next = a + b;
    }
    
    return sequence;
}

// Defina um número de entrada (pode ser modificado ou obtido por entrada do usuário)
let num = parseInt(prompt("Informe um número:"));

// Gerar a sequência de Fibonacci até o número informado
let sequence = generateFibonacci(num);

// Verificar se o número pertence à sequência e exibir a mensagem correspondente
if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
}

// Exibir a sequência de Fibonacci gerada até o número informado
console.log(`Sequência de Fibonacci até ${num}: ${sequence.join(", ")}`);
