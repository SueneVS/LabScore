function imprimirNomes(alunos) {
    alunos.forEach(function(nome) {
        document.write(nome + "<br>");
    });
}

// Array de nomes de alunos
const nomesAlunos = ["Ana", "Carlos", "Bianca", "Pedro", "Maria"];

// Chama a função e passa o array de nomes
imprimirNomes(nomesAlunos);