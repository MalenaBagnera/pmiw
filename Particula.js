class Particula {
  constructor(velocidad, med) {
    this.x = Math.floor(Math.random() * 800);
    this.y = -100;
    this.diam = 40;
    this.vel = velocidad;
    this.mostrar = true;
    this.med = med;
  }

  dibujar() {
    if (this.mostrar) image(this.med, this.x, this.y, this.diam, this.diam);
  }

  actualizar() {
    if (this.mostrar) this.y += this.vel;
  }

  reciclar() {
    if (this.y >= height + 100) {
      this.x = int(random(width));
      this.y = -100;
      this.diam = 40;
    }
  }
}
