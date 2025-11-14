class Intentos {

  constructor(maximo) {
    this.maximo = maximo;
    this.cantidad = 0;
  }

  sumar() {
    this.cantidad++;
    if (this.cantidad >= this.maximo) {
      pantalla = "perdiste";
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
