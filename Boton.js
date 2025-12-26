class Boton {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }

  mostrar() {

    if (this.estaSobre()) {
      fill(255, 255, 140); // amarillo claro
    } else {
      fill(255, 230, 0); // amarillo
    }

    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto, 10);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(this.texto, this.x, this.y);
  }

 
  estaSobre() {
    return (
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY < this.y + this.alto / 2
      );
  }
}
