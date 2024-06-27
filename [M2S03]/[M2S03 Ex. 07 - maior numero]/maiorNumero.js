// Array de números
const numeros = [10, 56, 23, 89, 444, 45, 67];

function maiorNumero(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

// Obtém o maior número do array
const maior = maiorNumero(numeros);

// Imprime o maior número na tela
document.write(maior);