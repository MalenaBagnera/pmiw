class Juego {

  constructor(medi) {
    this.medi = medi;
    this.reiniciar();
    this.jugador = new Usuario(this.enemigos, mounstro);
  }

  reiniciar() {
    this.enemigos = [];
    for (let i = 0; i < 10; i++) {
      this.enemigos[i] = new Particula(random(1, 3), this.medi);
    }
    this.jugador = new Usuario(this.enemigos, mounstro);
  }

  dibujar() {
    this.jugador.dibujar();
    this.jugador.colisionar(this);
    for (let i = 0; i < 10; i++) {
      this.enemigos[i].actualizar();
      this.enemigos[i].dibujar();
      this.enemigos[i].reciclar();
    }
  }

  teclear() {
    this.jugador.mover();
  }
}
