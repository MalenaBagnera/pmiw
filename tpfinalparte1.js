let imagenes =[];
let estado = 0;
let textos =[];
let miFuente;
let sonido;


function preload() {
  for (let i = 0; i < 18; i++) {
    imagenes [i] = loadImage ('data/p'+i+'.jpg')
    
  }
    textos = loadStrings('data/textos.txt');

   miFuente = loadFont ("data/miFuente.ttf");
   
   //sonido
   sonido = loadSound ('data/intro.mp3');
  }
 function setup() {
  createCanvas(640, 480);
  textFont(miFuente);
  sonido.setVolume(0.3);
  
  }

 function draw() {
  if (estado===0) {
    pantalla(imagenes[0],"",100,100, 450, 375, 150, 50, "Comenzar turno");
    boton(30, 375, 100, 50, "Creditos");
    let textoMusica = sonido.isPlaying() ? "Detener mÃºsica" : "Activar mÃºsica";
  boton(450, 150, 150, 40, textoMusica);
}
   
   if (estado===1) {
    pantalla(imagenes[1], textos[0], 50, 30, 100, 350, 200, 50, "Concentrarse en el grito");
        boton(350, 350, 200, 50, "Probar con una broma");
  }
        

  if (estado === 2) {
    pantalla(imagenes[2], textos[1], 50, 30, 100, 350, 200, 50, "Aceptar un juguete");
             boton(350, 350, 150, 50, "Volver a rugir");
  }

  if (estado === 3) {
    pantalla(imagenes[3], textos[2], 50, 30, 100, 350, 200, 50, "Seguir con la comedia");
                 boton(350, 350, 150, 50, "Volver al susto");
  }
  if (estado === 4) {
    pantalla (imagenes[4], textos[3], 50, 30, 100, 350, 210, 50, "Intentar un ultimo susto");
                 boton(350, 350, 200, 50, "Confesar el fracaso");
  
  }
 if (estado === 5) {
    pantalla (imagenes[5], textos[4], 50, 30, 50, 400, 250, 50, "Ir al comedor por un descanso");
    boton (350, 400, 250, 50, "Insistir con un tercer rugido");
 }
 if (estado === 6) {
    pantalla (imagenes[6], textos[5], 50, 30, 50, 400, 250, 50, "Hacer un baile absurdo"); 
    boton(350, 400, 250, 50, "Contar un chiste de monstruos");

}
if (estado === 7) {
    pantalla(imagenes[7], textos[6], 50, 30, 50, 400, 250, 50, "Escuchar el consejo"); 
    boton(350, 400, 250, 50, "Ignorar y seguir tu intuiciÃ³n");
    }
 if (estado === 8) {
    pantalla(imagenes[8], textos[7], 50, 30, 50, 400, 250, 50, "Mentir sobre el rendimiento");
    boton(350, 400, 250, 50, "Ser honesto sobre tu miedo");
      }
 if (estado === 9) {
    pantalla(imagenes[9], textos[8], 50, 30, 50, 400, 250, 50, "Preguntar por el secreto");
     boton (350,400,250,50, "Volver al piso de sustos")
    }
 if (estado === 10) {
    pantalla (imagenes[10], textos[9], 50, 30, 50, 400, 250, 50, "Imitar a tu jefe");  
      boton (350,400,250,50, "El slapstick clÃ¡sico")
 }
 if (estado === 11) {
    pantalla (imagenes[13], textos[12], 50, 30, 50, 400, 250, 50, "aceptar condiciones"); 
 }
 if (estado === 12) {
    pantalla (imagenes[14], textos[13], 50, 30, 50, 400, 200, 50, "volver al inicio"); 
    
}
if (estado === 13) {
    pantalla (imagenes[15], textos[14], 50, 30, 50, 400, 200, 50, "volver al inicio");
   
 }
    if (estado === 14) {
    pantalla (imagenes[16], textos[15], 50, 30, 50, 400, 200, 50, "volver al inicio");
    
    }

    if (estado === 15) {
    pantalla (imagenes[11], textos[10], 50, 30, 50, 400, 200, 50, "Siguiente");
    }

    if (estado === 16) {
    pantalla (imagenes[12], textos[11], 50, 30, 50, 400, 200, 50, "Seguir");
    }
  if (estado === 17) {
      textSize(20);
    pantalla (imagenes[17], textos[16], 50, 100, 50, 400, 200, 50, "Volver al inicio");
   
    
}

}


function mousePressed() { 
  if (estado === 0 && overMouse(450, 150, 150, 40)) {
  if (sonido.isPlaying()) {
    sonido.stop();
  } else {
    sonido.play();
  }
}
  
 
  if (estado === 0 && overMouse(450, 375, 150, 50)) {
    estado = 1; 
  }
 if (estado === 0 && overMouse(30, 375, 100, 50)) {
    estado = 17; 
  }
  else if (estado === 1 && overMouse(100, 350, 200, 50)) {
    estado = 2;
  }
 else if (estado === 1 && overMouse(350, 350, 200, 50)) {
    estado = 3;
}

 else if (estado === 2 && overMouse(100, 350, 200, 50)) {
  estado = 4; 
 }
 
 else if (estado === 2 && overMouse(350, 350, 150, 50)) {
    estado = 5; 
  }

  else if (estado === 3 && overMouse(100, 350, 200, 50)) {
  estado = 6;

}
else if (estado === 3 && overMouse(350, 350, 150, 50)) {
  estado = 7;
}
 else if (estado === 4 && overMouse( 100, 350, 200, 50)) {
  estado = 8; 
}
 else if (estado === 4 && overMouse(350, 350, 200, 50 )) {
  estado = 12; 
 }
 else if (estado === 5  && overMouse(50, 400, 250, 50 )) {
  estado = 9; 
 }
else if (estado ===5  && overMouse(350, 400, 250, 50)) {
  estado = 2; 
}
else if (estado === 6  && overMouse(50, 400, 250, 50 )) {
  estado = 10;
}
else if (estado === 6  && overMouse(350, 400, 250, 50 )) {
  estado = 16;
}
else if (estado === 7  && overMouse(50, 400, 250, 50 )) {
  estado = 10;
}
else if (estado === 7  && overMouse(350, 400, 250, 50 )) {
  estado = 2;
}
else if (estado === 8  && overMouse(50, 400, 250, 50 )) {
  estado = 11;
  }
else if (estado === 8  && overMouse(350, 400, 250, 50 )) {
  estado = 12;
}
else if (estado === 9  && overMouse(50, 400, 250, 50 )) {
  estado = 10;
}
else if (estado === 9  && overMouse(350, 400, 250, 50 )) {
  estado = 2;
}
else if (estado === 10  && overMouse(50, 400, 250, 50 )) {
  estado = 15;
}
else if (estado === 10 && overMouse(350, 400, 250, 50 )) {
  estado = 16;
  
  }
else if (estado === 11 && overMouse(50, 400, 250, 50 )) {
  estado = 12;

}
else if (estado === 12 && overMouse(50, 400, 250, 50 )) {
  estado = 0;
  }
else if (estado === 13 && overMouse(50, 400, 250, 50 )) {
  estado = 0;
}
else if (estado === 15 && overMouse(50, 400, 250, 50 )) {
  estado = 13;
}
else if (estado === 16 && overMouse(50, 400, 250, 50 )) {
  estado = 14;
  }
else if (estado === 14 && overMouse(50, 400, 250, 50 )) {
  estado = 0;
  }
else if (estado === 17 && overMouse(50, 400, 250, 50 )) {
  estado = 0;
}
}




function boton(posX, posY, tamX, tamY, textoB) { 
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(255, 0, 255);
  } else {
    fill(200, 120, 0, 100);
  }
  rect(posX, posY, tamX, tamY, tamY/4);
  fill(100, 255, 0);
  textSize (15);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}

function pantalla (imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0, width, height);
  fill(255);
  text(texto, posX, posY, width-100,height-350);
  boton(posXB, posYB, tamXB, tamYB, textoB);

}
