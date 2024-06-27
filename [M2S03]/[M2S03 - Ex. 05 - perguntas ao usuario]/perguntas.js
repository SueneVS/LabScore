//Para carregar a página antes das perguntas
document.addEventListener('DOMContentLoaded', function() {

// Perguntas ao usuário
let nomeAluno = prompt("Qual o nome do aluno?");
let idadeAluno = prompt("Qual a idade do aluno?");
let serieAluno = prompt("Qual a série do aluno?");
let nomeEscola = prompt("Qual o nome da escola?");
let materiaFavorita = prompt("Qual a sua matéria favorita?");

// Confirmação dos dados
let confirmacao = confirm(`Confirma os dados inseridos?\n\n` +
  `Nome do Aluno: ${nomeAluno}\n` +
  `Idade do Aluno: ${idadeAluno}\n` +
  `Série do Aluno: ${serieAluno}\n` +
  `Nome da Escola: ${nomeEscola}\n` +
  `Matéria Favorita: ${materiaFavorita}`);

// Verifica se o usuário confirmou os dados
if (confirmacao) {
  // Exibe as informações na tela
    document.getElementById("nomeAluno").textContent = nomeAluno;
    document.getElementById("idadeAluno").textContent = idadeAluno;
    document.getElementById("serieAluno").textContent = serieAluno;
    document.getElementById("nomeEscola").textContent = nomeEscola;
    document.getElementById("materiaFavorita").textContent = materiaFavorita;
} else {
  // Caso o usuário não confirme, mostra uma mensagem
  alert("Dados não confirmados.");
}

});

