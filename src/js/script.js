// ATIVAR LINKS DO MENU P/ ABA
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ATIVAR ITENS DO ORÇAMENTO
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa"); // verifica se a possui a classe "ativa"
  pergunta.setAttribute("aria-expanded", ativa);
}

function clickPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(clickPerguntas);

// GALERIA DE BICICLETA
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;

  const media = matchMedia("(min-width: 1000px)").matches; // Verifica o tamanho da tela como o Media Query do CSS

  if (media) {
    galeriaContainer.prepend(img); // Método para jogar o elemento para cima
  }
}

function clickGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(clickGaleria);

// ANIMAÇÃO
if (window.SimpleAnime) {
  new SimpleAnime();
}
