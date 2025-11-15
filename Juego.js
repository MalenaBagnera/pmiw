class Juego {
  constructor(medi) {
    this.medi = medi;
    this.intentos = new Intentos(5); // contador de intentos
    this.reiniciar();

    this.ganaste = false;
    this.pantalla = "inicio";
    this.sonidoActivo = true;

    // Botones del juego
    this.botones = {};
    this.botones["reiniciarInicio"] = new Boton(320, 50, 200, 60, "Volver al inicio");
    this.botones["reiniciarPerdiste"] = new Boton(490, 400, 200, 60, "Volver al inicio");
    this.botones["reintentar"] = new Boton(150, 400, 200, 60, "Reiniciar");
    this.botones["creditos"] = new Boton(80, 380, 120, 50, "Créditos");
    this.botones["volver"] = new Boton(500, 400, 180, 60, "Volver atrás");

    this.fondos = fondos; 
  }

  reiniciar() {
    this.enemigos = [];
    for (let i = 0; i < 10; i++) {
      this.enemigos[i] = new Particula(random(1, 3), this.medi);
    }
    this.jugador = new Usuario(this.enemigos, mounstro, this.intentos);
  }

  dibujar() {
    this.jugador.dibujar();
    this.jugador.colisionar(this);
    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].actualizar();
      this.enemigos[i].dibujar();
      this.enemigos[i].reciclar();
    }
    this.intentos.mostrar();
  }

  teclear() {
    this.jugador.mover(this);
  }

  mostrarPantalla() {
    if (this.pantalla === "inicio") {
      this.dibujarInicio();
    } else if (this.pantalla === "tutorial") {
      this.dibujarTutorial();
    } else if (this.pantalla === "juego") {
      image(this.fondos["juego"], 0, 0, width, height);
      if (!this.ganaste) this.dibujar();
      else this.dibujarGanaste();
    } else if (this.pantalla === "perdiste") {
      this.dibujarPerdiste();
    } else if (this.pantalla === "ganaste") {
      this.dibujarGanaste();
    } else if (this.pantalla === "creditos") {
      this.dibujarCreditos();
    }
  }

  dibujarInicio() {
    image(this.fondos["inicio"], 0, 0, width, height);
    image(meg, 580, 20, 40, 40);

    textFont(fuente);
    textSize(60);
    fill(255, 255, 0);
    textAlign(CENTER, TOP);
    text("!ALERTA!", width / 2, 30);
    textSize(30);
    text("codigo 3312", width / 2, 90);
    textSize(20);
    fill(255, 255, 20);
    text("presiona ENTER para escapar", width / 2, 420);

    this.botones["creditos"].mostrar();
  }

  dibujarTutorial() {
    image(this.fondos["tutorial"], 0, 0, width, height);

    textFont(fuente);
    textSize(40);
    fill(0, 240, 255);
    textAlign(CENTER);
    text("Debes evacuar la planta", width / 2, 50);
    textSize(17);
    text("esta infestada de objetos humanos.", width / 2, 85);
    textSize(20);
    fill(255);
    text("objetivo: escapar de la planta", width / 2, 200);
    text("evitar: tocar las medias", width / 2, 230);
    text("intentos: 5", width / 2, 260);
    text("movimiento:(retroceder) ← → (avanzar)", width / 2, 290);
    fill(0, 240, 255);
    text("presiona ENTER para iniciar", width / 2, 420);
  }

  dibujarGanaste() {
    image(this.fondos["ganaste"], 0, 0, width, height);
    textFont(fuente);
    textSize(60);
    fill(0, 240, 255);
    textAlign(CENTER);
    text("¡Felicidades!", width / 2, 400);
    textSize(35);
    text("lograste salir de la planta", width / 2, 445);
    this.botones["reiniciarInicio"].mostrar();
  }

  dibujarPerdiste() {
    image(this.fondos["perdiste"], 0, 0, width, height);
    textFont(fuente);
    textSize(50);
    fill(0);
    textAlign(CENTER);
    text("¡Has perdido!", width / 2, 50);
    textSize(25);
    fill(255, 255, 0);
    text("Usaste los 5 intentos", width / 2, 90);
    this.botones["reintentar"].mostrar();
    this.botones["reiniciarPerdiste"].mostrar();
  }

  dibujarCreditos() {
    image(this.fondos["creditos"], 0, 0, width, height);
    fill(255, 255, 0);
    textAlign(CENTER);
    textFont(fuente);
    textSize(40);
    text("CRÉDITOS", 120, 50);
    textSize(20);
    text("Juego desarrollado por", width / 2, 200);
    text("Malena Bagnera y Carola Forneris", width / 2, 220);
    this.botones["volver"].mostrar();
  }

  manejarTecla(keyCode) {
    if (this.pantalla === "inicio" && keyCode === ENTER) {
      this.pantalla = "tutorial";
    } else if (this.pantalla === "tutorial" && keyCode === ENTER) {
      this.pantalla = "juego";
    } else if (this.pantalla === "juego") {
      this.teclear();
    }
  }

  manejarClic(mouseX, mouseY) {
    if (this.pantalla === "inicio") {
      if (this.botones["creditos"].estaSobre()) {
        this.pantalla = "creditos";
      }
    } 
    else if (this.pantalla === "juego") {
      if (this.botones["reiniciarInicio"].estaSobre()) {
        this.pantalla = "inicio";
        this.ganaste = false;
        this.intentos.reiniciar();
        this.reiniciar();
      }
    } 
    else if (this.pantalla === "perdiste") {
      if (this.botones["reintentar"].estaSobre()) {
        this.pantalla = "juego";
        this.ganaste = false;
        this.intentos.reiniciar();
        this.reiniciar();
      }
      if (this.botones["reiniciarPerdiste"].estaSobre()) {
        this.pantalla = "inicio";
        this.ganaste = false;
        this.intentos.reiniciar();
        this.reiniciar();
      }
    } 
    else if (this.pantalla === "ganaste") {
      if (this.botones["reiniciarInicio"].estaSobre()) {
        this.pantalla = "inicio";
        this.ganaste = false;
        this.intentos.reiniciar();
        this.reiniciar();
      }
    } 
    else if (this.pantalla === "creditos") {
      if (this.botones["volver"].estaSobre()) {
        this.pantalla = "inicio";
        this.ganaste = false;
        this.intentos.reiniciar();
        this.reiniciar();
      }
    }

    // Sonido 
    if (mouseX > 580 && mouseX < 620 && mouseY > 20 && mouseY < 60) {
      if (sonidoInicio && !sonidoInicio.isPlaying()) {
        sonidoInicio.loop();
        sonidoActivo = true;
      } else if (sonidoInicio) {
        sonidoInicio.pause();
        sonidoActivo = false;
      }
    }
  }
}
