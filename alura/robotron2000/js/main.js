const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica");
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};
const robo = document.querySelector("#robotron");
const listaCores = [
  "img/robotron.png",
  "img/robotron-preto.png",
  "img/robotron-branco.png",
  "img/robotron-amarelo.png",
  "img/robotron-rosa.png",
  "img/robotron-vermelho.png",
];
let i = 1;

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  });
});

robo.addEventListener("click", () => {
  mudaCor();
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-" && peca.value > 0) {
    peca.value = parseInt(peca.value) - 1;
  } else if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
  console.log(pecas[peca]);

  estatistica.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}

function mudaCor() {
  if (i < listaCores.length) {
    robo.src = listaCores[i];
    i++;
  } else {
    i = 0;
  }
}
