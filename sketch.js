//camelCase :  regra da primeira letra ser minúscula e as outras palavras levarem a primeira letra maiúscula, uma convenção do Javascript.

function setup() {
  createCanvas(500, 400); //largura x altura
  somDaTrilha.loop();
}

function draw() { //desenha os objetos
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




