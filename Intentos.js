class Intentos {
  constructor(maximo) {
    this.maximo = maximo;
    this.cantidad = 0;
  }

  sumar(juego) {
    this.cantidad++;
    if (this.cantidad >= this.maximo) {
      juego.pantalla = "perdiste"; // ahora sí cambia la pantalla dentro del juego
    }
  }

  reiniciar() {
    this.cantidad = 0;
  }

  mostrar() {
    textFont(fuente);
    textSize(20);
    fill(255);
    textAlign(LEFT);
    text("Intentos: " + this.cantidad + " / " + this.maximo, 20, 30);
  }
}
