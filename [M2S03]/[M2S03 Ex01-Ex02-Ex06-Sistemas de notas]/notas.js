// Função que calcula a média das notas
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Capturar o nome da matéria
let nomeMateria = prompt("Digite o nome da matéria:");

// Solicitar as 4 notas ao usuário
let notas = [];
let i = 0;
while (i < 4) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota);
    i++;
}

// Criar o objeto com o nome da matéria e as notas
let materia = {
    nomeMateria: nomeMateria,
    notas: notas
};
//console.log(materia);

// Calcular a média das notas
let media = calcularMedia(materia.notas);

// Exibir o resultado
document.write(`Matéria: ${materia.nomeMateria}<br>`);
document.write(`Notas: ${materia.notas.join(", ")}<br>`);
document.write(`Média: ${media.toFixed(2)}<br>`);

document.write(media >= 7 ? "Parabéns, você passou! Sua média foi: " + media : "Infelizmente, você está de recuperação. Sua média foi: " + media);




