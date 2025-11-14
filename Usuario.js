class Usuario {

  constructor( e, img) {
    this.x = 0;
    this.y = 350;
    this.t = 140;
    this.v = 10;
    this.c = 255;

    this.enemigo = e;
    this.img= img;
  }

  dibujar() {

    image (this.img, this.x, this.y, this.t, this.t);
  }

  mover() {
    if (keyCode === LEFT_ARROW ) {

      this.x -= this.v;
    }
    if (keyCode === RIGHT_ARROW ) {

      this.x += this.v;
    }
    if (this.x + this.t >= width && ganaste === false  ) {
      ganaste = true ;
    }
  }

  colisionar(juego) {
    for (let i = 0; i < 10; i++) {
      if (dist(this.x, this.y, this.enemigo[i].x, this.enemigo[i].y) < this.t /2) {
        intentos.sumar ();
        juego.reiniciar(); // reinicia todo el juego
        return; // corta el bucle
      }
    }
  }
}
