class Usuario {
  constructor(enemigos, img, intentos) {
    this.x = 0;
    this.y = 350;
    this.t = 140;
    this.v = 17;  
    this.enemigo = enemigos;
    this.img = img;
    this.intentos = intentos;
  }

  dibujar() {
    image(this.img, this.x, this.y, this.t, this.t);
  }

  mover(juego) {
     if (keyIsDown(LEFT_ARROW)) this.x -= this.v;
  if (keyIsDown(RIGHT_ARROW)) this.x += this.v;

  if (this.x + this.t >= width && !juego.ganaste) {
    juego.ganaste = true;
    juego.pantalla = "ganaste"; 
  }
  }

  colisionar(juego) {
    for (let i = 0; i < this.enemigo.length; i++) {
      let p = this.enemigo[i];
      if (dist(this.x, this.y, p.x, p.y) < this.t / 2) {
        this.intentos.sumar(juego); // suma intento y revisa si pierde
        if (this.intentos.cantidad < this.intentos.maximo && juego.pantalla === "juego") {
          juego.reiniciar();
        }
        return; 
      }
    }
  }
}
