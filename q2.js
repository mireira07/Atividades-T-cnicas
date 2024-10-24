// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, 
// seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência 
// ou pode ser previamente definida no código;

// Função para contar a ocorrência de 'a' e 'A' em uma string
function countLetterA(str) {
    let count = 0;
    
    // Loop por cada caractere da string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }
    
    return count;
}

// Defina a string de entrada (pode ser obtida por input ou pré-definida)
let inputString = prompt("Informe uma string:");

// Verificar se a string contém a letra 'a' ou 'A' e contar suas ocorrências
let count = countLetterA(inputString);

if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
} else {
    console.log("A letra 'a' não aparece na string.");
}
