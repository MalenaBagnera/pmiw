let videojuego;
let media,mounstro,meg;
let fondos = [];
let ganaste = false;
let fuente ;
let pantalla = "inicio";
let intentos ;
let botones = [];
let sonidoInicio;
let sonidoActivo= true;

function preload() {
  fondos ["inicio"] = loadImage ( "data/inicio.png" );
  fondos ["tutorial"] = loadImage ( "data/tutorial.png" );
  fondos ["juego"] = loadImage ( "data/fondo.png" );
  fondos ["creditos"] = loadImage ("data/creditos.png");
   fondos ["ganaste"] = loadImage( "data/ganaste.png" );
  fondos ["perdiste"] = loadImage( "data/perdiste.png" );
  
  media = loadImage( "data/media.png" );
  mounstro = loadImage( "data/mounstro.png" );
  meg= loadImage ("data/meg.png");
  
  fuente = loadFont( "data/fuente.ttf" );
  sonidoInicio = loadSound ("data/alarma.mp3");
}

function dibujarInicio () {
  image(fondos ["inicio"], 0, 0, width, height);
  image (meg, 580, 20, 40, 40);
  textFont (fuente);
  textSize (60);
  fill (255, 255, 0);
  textAlign (CENTER, TOP);
  text ("!ALERTA!", width/2, 30);
  textSize (30);
  text ("codigo 3312", width/2, 90);
  textSize (20);
  fill (255, 255, 20);
  text ("presiona ENTER para escapar ", width/2, 420);
  botones ["creditos"].mostrar ();
}

function dibujarTutorial () {
  image(fondos ["tutorial"], 0, 0, width, height);

  textFont (fuente);
  textSize (40);
  fill(0, 240, 255);
  textAlign (CENTER);
  text ("Debes evacuar la planta", width/2, 38);
  textSize (17);
  text ("esta infestada de objetos humanos.", width/2, 85);
  text ("presiona ENTER para iniciar ", width/2, 420);
  textSize (20);
  fill (255);
  text ("objetivo: escapar de la planta", width/2, 200);
  text ("evitar: tocar las medias", width/2, 230);
  text ("intentos: 5", width/2, 260);
  text ("movimiento:(retroceder) ← → (avanzar)", width/2, 290)
}

function dibujarGanaste () {
  image(fondos ["ganaste"], 0, 0, width, height);
  textFont(fuente);
  textSize(60);
  fill(0, 240, 255);
  textAlign(CENTER);
  text("¡Felicidades!", width / 2, 400);
  textSize(35);
  text("lograste salir de la planta", width / 2, 445);
  botones ["reiniciarInicio"].mostrar ();
}

function dibujarPerdiste () {
  image (fondos ["perdiste"], 0, 0, width, height);
  textFont (fuente);
  textSize(50);
  fill(0);
  textAlign(CENTER);
  text("¡Has perdido!", width / 2, 50);
  textSize(25);
  fill(255, 255, 0);
  text("Usaste los 5 intentos", width / 2, 90);
  botones ["reintentar"].mostrar();
  botones ["reiniciarPerdiste"].mostrar ();
}

function dibujarCreditos () {
  image(fondos ["creditos"], 0, 0, width, height);
  fill(255, 255, 0);
  textAlign(CENTER);
  textFont(fuente);
  textSize(40);
  text("CRÉDITOS", 120, 50);
  textSize(20);
  text("Juego desarrollado por ", width / 2, 200);
  text("Malena Bagnera y Carola Forneri ", width / 2, 220);
  botones ["volver"].mostrar ();
}


function setup() {
  createCanvas(640, 480 );

  videojuego = new Juego( media );  //aca inicializo el objeto
  ganaste= false ;

  intentos = new Intentos (5);

  botones ["reiniciarInicio"] = new Boton(320, 50, 200, 60, "Volver al inicio");
  botones ["reiniciarPerdiste"] = new Boton(490, 400, 200, 60, "Volver al inicio");
  botones ["reintentar"] = new Boton (150, 400, 200, 60, "reiniciar");
  botones ["creditos"] = new Boton (80, 380, 120, 50, "creditos");
  botones ["volver"] = new Boton (500, 400, 180, 60, "Volver atras");


}

function draw() {
  if (pantalla === "inicio") {
    dibujarInicio ();
  } else if (pantalla === "tutorial") {
    dibujarTutorial();
  } else if (pantalla === "juego") {
    image(fondos ["juego"], 0, 0, width, height);

    if (ganaste === false) {
      videojuego.dibujar();
    } else {
      dibujarGanaste();
    }
  } else if (pantalla === "perdiste") {
    dibujarPerdiste();
  } else if (pantalla === "creditos") {
    dibujarCreditos ();
  }
}
function keyPressed() {
  //jugador.mover();
  videojuego.teclear();
  if (pantalla === "inicio" && keyCode === ENTER) {
    pantalla = "tutorial";
  } else if (pantalla === "tutorial" && keyCode === ENTER) {
    pantalla = "juego";
  } else if (pantalla === "juego") {
    videojuego.teclear();
  }
  loop();
}

function mousePressed() {

  if (pantalla === "inicio") {
    if (botones ["creditos"].estaSobre()) {
      pantalla = "creditos";
    }
  }
  if (pantalla === "juego") {
    if (botones ["reiniciarInicio"].estaSobre()) {  // reiniciar desde dentro del juego
      pantalla = "inicio";
      ganaste = false;
      intentos = new Intentos(5);
      videojuego = new Juego(media);
    }
  }
  if (pantalla === "perdiste") {
    if (botones ["reintentar"].estaSobre()) {
      pantalla = "juego";
      ganaste = false;
      intentos = new Intentos(5);
      videojuego = new Juego(media);
    }
    if (botones ["reiniciarPerdiste"].estaSobre()) {
      pantalla = "inicio";
      ganaste = false;
      intentos = new Intentos(5);
      videojuego = new Juego(media);
    }
  }

  if (pantalla === "ganaste") {
    if (botones ["volver"].estaSobre()) {
      pantalla = "inicio";
      ganaste = false;
      intentos = new Intentos(5);
      videojuego = new Juego(media);
    }
  }
  if (pantalla === "creditos") {
    if (botones ["volver"].estaSobre()) {
      pantalla = "inicio";
      ganaste = false;
      intentos = new Intentos(5);
      videojuego = new Juego(media);
    }
  }
if (mouseX > 580 && mouseX < 620 && mouseY > 20 && mouseY < 60) {
  if (sonidoInicio && !sonidoInicio.isPlaying()) {
    sonidoInicio.loop();  // activa el sonido
    sonidoActivo = true;
  } else if (sonidoInicio) {
    sonidoInicio.pause(); // pausa el sonido
    sonidoActivo = false;
  }
}
}
