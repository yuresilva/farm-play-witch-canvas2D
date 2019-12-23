let canvas = document.getElementById("meu-canvas");
let papel = canvas.getContext("2d");

let fundo = {
  url: "./imgs/fundo.png"
};

let vaca = {
  url: "./imgs/vaca.png"
};

let frango = {
  url: "./imgs/frango.png"
};

let porco = {
  url: "./imgs/porco.png"
};

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;

vaca.imagem = new Image();
vaca.imagem.src = vaca.url;

frango.imagem = new Image();
frango.imagem.src = frango.url;

porco.imagem = new Image();
porco.imagem.src = porco.url;

fundo.imagem.addEventListener("load", carregaFundo);

vaca.imagem.addEventListener("load", carregaVaca);

frango.imagem.addEventListener("load", carregaFrango);

porco.imagem.addEventListener("load", carregaPorco);

function carregaFundo() {
  papel.drawImage(fundo.imagem, 0, 0);
}

function carregaVaca() {
  let numeroVacas = numeroAleatorio(2, 10);

  for (let i = 0; i < numeroVacas; i++) {
    let xA = numeroAleatorio(100, 400);
    let yA = numeroAleatorio(100, 400);
    papel.drawImage(vaca.imagem, xA, yA);
  }
}
function carregaFrango() {
  let numeroFrango = numeroAleatorio(2, 8);

  for (let i = 0; i < numeroFrango; i++) {
    let xA = numeroAleatorio(120, 380);
    let yA = numeroAleatorio(120, 380);
    papel.drawImage(frango.imagem, xA, yA);
  }
}

function carregaPorco() {
  let numeroPorco = numeroAleatorio(2, 5);

  for (let i = 0; i < numeroPorco; i++) {
    let xA = numeroAleatorio(150, 300);
    let yA = numeroAleatorio(150, 300);
    papel.drawImage(porco.imagem, xA, yA);
  }
}

function numeroAleatorio(x, y) {
  return Math.floor(Math.random() * (y - x) + 1) + x;
}

let z = 10;

for (let i = 0; i < z; i++) {
  console.log(numeroAleatorio(100, 200));
}
