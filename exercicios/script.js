// 1
let alterado1 = false;
function toggleTexto1() {
  const el = document.getElementById("mensagem1");
  el.textContent = alterado1 ? "Texto original" : "Olá, mundo!";
  alterado1 = !alterado1;
}

// 2
let corVermelha = false;
function toggleCor() {
  const el = document.getElementById("cor2");
  el.style.color = corVermelha ? "black" : "red";
  corVermelha = !corVermelha;
}

// 3
function criarParagrafo() {
  const container = document.getElementById("container3");
  const p = document.createElement("p");
  p.textContent = "Novo parágrafo";
  container.appendChild(p);
}

// 4
function removerElemento() {
  const el = document.getElementById("paraRemover");
  if (el) el.remove();
}

// 5
let fundoAmarelo = false;
function toggleFundo() {
  const el = document.getElementById("area5");
  el.style.backgroundColor = fundoAmarelo ? "" : "yellow";
  fundoAmarelo = !fundoAmarelo;
}

// 6
let classe6 = false;
function toggleClasse6() {
  const el = document.getElementById("paragrafo6");
  if (classe6) el.classList.remove("destaque");
  else el.classList.add("destaque");
  classe6 = !classe6;
}

// 7
let imgOriginal = true;
function toggleImagem() {
  const img = document.getElementById("imagem7");
  if (imgOriginal) {
    img.src = "isedans.svg";
  } else {
    img.src = "isuvs.svg";
  }
  imgOriginal = !imgOriginal;
}

// 8
function mostrarInput8() {
  const val = document.getElementById("input8").value;
  console.log("Valor do input:", val);
  alert("Valor do input: " + val);
}

// 9
let visivel9 = true;
function alternarVisibilidade() {
  const el = document.getElementById("texto9");
  el.style.display = visivel9 ? "none" : "block";
  visivel9 = !visivel9;
}

// 10
function adicionarItemLista() {
  const ul = document.getElementById("lista10");
  const li = document.createElement("li");
  li.textContent = "Novo item";
  ul.appendChild(li);
}

// 11
let temTitle11 = false;
function toggleTitulo11() {
  const el = document.getElementById("titulo11");
  if (temTitle11) el.removeAttribute("title");
  else el.setAttribute("title", "Este é um título");
  temTitle11 = !temTitle11;
}

// 12
let temClasse12 = true;
function toggleClasse12() {
  const el = document.getElementById("paragrafo12");
  if (temClasse12) el.classList.remove("destaque");
  else el.classList.add("destaque");
  temClasse12 = !temClasse12;
}

// 13
let movido13 = false;
function toggleMover() {
  const movel = document.getElementById("movel13");
  const origem = document.getElementById("origem13");
  const destino = document.getElementById("destino13");
  if (!movido13) {
    destino.appendChild(movel);
  } else {
    origem.appendChild(movel);
  }
  movido13 = !movido13;
}

// 14
let botaoAtivo14 = true;
function toggleBotao14() {
  const botao = document.getElementById("botao14");
  botao.disabled = !botao.disabled;
  botaoAtivo14 = !botaoAtivo14;
}

// 15
let alterado15 = false;
function toggleTexto15() {
  const el = document.querySelector(".texto15");
  el.textContent = alterado15 ? "Texto original" : "Texto alterado";
  alterado15 = !alterado15;
}

// 17 (função chamada pelo select do exercício 17)
function aplicarEstiloTexto(estilo) {
  const el = document.getElementById("texto17");
  el.style.fontWeight = "normal";
  el.style.fontStyle = "normal";
  el.style.textDecoration = "none";

  if (estilo === "bold") el.style.fontWeight = "bold";
  else if (estilo === "italic") el.style.fontStyle = "italic";
  else if (estilo === "underline") el.style.textDecoration = "underline";
}

// 18
function validarEmail(event) {
  event.preventDefault();
  const input = document.getElementById("email18");
  const erro = document.getElementById("erro18");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(input.value)) {
    erro.textContent = "";
    alert("Email válido!");
  } else {
    erro.textContent = "Email inválido!";
  }
}

// 19
function calcularSoma(event) {
  event.preventDefault();
  const n1 = document.getElementById("num1").value;
  const n2 = document.getElementById("num2").value;
  const res = document.getElementById("resultado19");

  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);

  if (isNaN(num1) || isNaN(num2)) {
    res.textContent = "Digite números válidos!";
    return;
  }
  res.textContent = `Resultado: ${num1 + num2}`;
}

// 20
function converterMaiusculas() {
  const input = document.getElementById("texto20");
  input.value = input.value.toUpperCase();
}
