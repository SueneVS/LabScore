// Perguntas ao usuário
let nomeAluno = prompt("Qual o nome do aluno?");
let idadeAluno = prompt("Qual a idade do aluno?");
let serieAluno = prompt("Qual a série do aluno?");
let nomeEscola = prompt("Qual o nome da escola?");
let materiaFavorita = prompt("Qual a sua matéria favorita?");

// Confirmação dos dados
let confirmacao = confirm("Confirma os dados inseridos?");

// Verifica se o usuário confirmou os dados
if (confirmacao) {
  // Exibe as informações na tela
  document.write("<h3>Respostas do Aluno</h3>");
  document.write("<p><strong>Nome do Aluno:</strong> " + nomeAluno + "</p>");
  document.write("<p><strong>Idade do Aluno:</strong> " + idadeAluno + "</p>");
  document.write("<p><strong>Série do Aluno:</strong> " + serieAluno + "</p>");
  document.write("<p><strong>Nome da Escola:</strong> " + nomeEscola + "</p>");
  document.write("<p><strong>Matéria Favorita:</strong> " + materiaFavorita + "</p>");
} else {
  // Caso o usuário não confirme, mostra uma mensagem
  document.write("<p>Dados não confirmados.</p>");
}