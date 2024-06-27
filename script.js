// Função para solicitar informações do aluno
function solicitarInformacoesAluno() {
  let nomeAluno = prompt("Qual o nome do aluno?");
  let idadeAluno = prompt("Qual a idade do aluno?");
  let serieAluno = prompt("Qual a série do aluno?");
  let nomeEscola = prompt("Qual o nome da escola?");
  let materiaFavorita = prompt("Qual a sua matéria favorita?");

  let confirmacao = confirm(`Confirma os dados inseridos?\n\n` +
      `Nome do Aluno: ${nomeAluno}\n` +
      `Idade do Aluno: ${idadeAluno}\n` +
      `Série do Aluno: ${serieAluno}\n` +
      `Nome da Escola: ${nomeEscola}\n` +
      `Matéria Favorita: ${materiaFavorita}`);

  if (confirmacao) {
      document.getElementById("nomeAluno").textContent = nomeAluno;
      document.getElementById("idadeAluno").textContent = idadeAluno;
      document.getElementById("serieAluno").textContent = serieAluno;
      document.getElementById("nomeEscola").textContent = nomeEscola;
      document.getElementById("materiaFavorita").textContent = materiaFavorita;
      adicionarAlunoLista(nomeAluno); // Adiciona o aluno à lista
  } else {
      alert("Dados não confirmados.");
  }
}

// Função para adicionar um novo aluno à lista de alunos
function adicionarAlunoLista(nomeAluno) {
  let listaAlunos = document.querySelector(".lista-alunos ul");
  let novoAluno = document.createElement("li");
  novoAluno.textContent = nomeAluno;
  listaAlunos.appendChild(novoAluno);
}


// Array para armazenar todas as notas adicionadas
let notasAdicionadas = [];

// Função para calcular a média das notas
function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

// Array para armazenar todas as médias calculadas
let mediasCalculadas = [];

// Função para adicionar uma nova linha na tabela de notas
function adicionarLinha() {
  let nomeMateria = prompt("Digite o nome da matéria:");
  let notas = [];
  let i = 0;
  while (i < 4) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota);
    i++;
  }

  let media = calcularMedia(notas);

   // Adiciona a média ao array de médias calculadas
  mediasCalculadas.push(media);

  // Adiciona as notas ao array de notas adicionadas
  notasAdicionadas.push(...notas);

  let tbody = document.querySelector("#tabela-notas tbody");
  let placeholderRow = tbody.querySelector("#placeholder-row");
  if (placeholderRow) {
    tbody.removeChild(placeholderRow);
  }

  let newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${nomeMateria}</td>
      <td>${notas[0]}</td>
      <td>${notas[1]}</td>
      <td>${notas[2]}</td>
      <td>${notas[3]}</td>
      <td>${media.toFixed(2)}</td>
  `;

  tbody.appendChild(newRow);

  atualizarMediaGeral();
  atualizarMaiorMedia();
}

// Função para calcular a média geral de todas as notas adicionadas
function calcularMediaGeral() {
  if (notasAdicionadas.length === 0) {
    return 0; // Retorna 0 se não houver notas adicionadas
  }

  let soma = 0;
  for (let i = 0; i < notasAdicionadas.length; i++) {
    soma += notasAdicionadas[i];
  }
  return soma / notasAdicionadas.length;
}

// Função para atualizar a média geral na interface
function atualizarMediaGeral() {
  let mediaGeral = calcularMediaGeral();
  document.querySelector("#media-geral").textContent = `A média geral do aluno é ${mediaGeral.toFixed(2)}`;

  let mensagem = mediaGeral >= 7 ? 
        `Parabéns, você passou! Sua média foi: ${mediaGeral.toFixed(2)}` : 
        `Infelizmente, você está de recuperação. Sua média foi: ${mediaGeral.toFixed(2)}`;
  document.querySelector("#mensagem").textContent = mensagem;
}

function maiorNumero(arr) {
  let maior = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maior) {
          maior = arr[i];
      }
  }
  return maior;
}

// Função para atualizar a maior média na interface
function atualizarMaiorMedia() {
    if (mediasCalculadas.length > 0) {
        let maiorMedia = maiorNumero(mediasCalculadas);
        document.getElementById("maior-media").textContent = `A maior média entre as matérias é ${maiorMedia.toFixed(2)}`;
    }
}

// Adicionar evento ao botão "Adicionar Linha"
let addLinhaButton = document.getElementById("add-linha");
addLinhaButton.addEventListener("click", adicionarLinha);

// Chamar a função para solicitar informações do aluno ao carregar o script
window.addEventListener("load", solicitarInformacoesAluno);