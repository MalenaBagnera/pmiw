//https://youtu.be/bWiaAHqoeI0
let videojuego;
let media, mounstro, meg;
let fondos = [];
let fuente;
let sonidoInicio;


function preload() {
  fondos["inicio"] = loadImage("data/inicio.png");
  fondos["tutorial"] = loadImage("data/tutorial.png");
  fondos["juego"] = loadImage("data/fondo.png");
  fondos["creditos"] = loadImage("data/creditos.png");
  fondos["ganaste"] = loadImage("data/ganaste.png");
  fondos["perdiste"] = loadImage("data/perdiste.png");

  media = loadImage("data/media.png");
  mounstro = loadImage("data/mounstro.png");
  meg = loadImage("data/meg.png");

  fuente = loadFont("data/fuente.ttf");
  sonidoInicio = loadSound("data/alarma.mp3");
}

function setup() {
  createCanvas(640, 480);
  videojuego = new Juego(media);
}

function draw() {

  videojuego.mostrarPantalla();
}

function keyPressed() {
  videojuego.manejarTecla(keyCode);
}

function mousePressed() {
  videojuego.manejarClic(mouseX, mouseY);
}
