var centroXS = 382;
var centroYS = 190;
var raioS = 40;
var centroXE = 400;
var centroYE = 150;
var raio = 20;
var relogio = 0;
var imageminstruções;
var imagemcreditos;
var imageminiciar;
var tela = 0;
var robo = []
var contador = 0;
var tempo = 0;
var robo1
//tela = 1 instruções
//tela = 2 iniciar
//tela = 3 creditos
function telainiciar(){
  background(220);
  image(imageminiciar,0,0,470,260)
    image(robo1,190,70,150,190)
  image(mascote,50,70,150,190)
  if(mouseIsPressed && mouseX>centroXE && mouseX<centroXE+raio && mouseY>centroYE && mouseY<centroYE+raio){
    for(contador=1;contador<2;contador++){
  image(robo[contador%4],190,70,150,190);
      tempo++
    }
     }
  fill(255,0,0);
  ellipse(centroXE,centroYE,2*raio,2*raio);
    fill(0,255,0);
    square(382,190,40);
   fill(0,0,255);
   triangle(380, 110, 420, 110, 398, 60);
}

function telacreditos(){
  background(220);
  image(imagemcreditos,0,0,470,260)
  if(mouseIsPressed && mouseX>40 && mouseX<40+45 && mouseY>220 && mouseY<220+25){
      tela = 0
      stroke(200)
            fill(255);
    }
  rect(40, 220, 30, 25, 10);
  fill('#000040')
  noStroke()
   textSize(20);
text('🠔', 45, 240);
fill(0, 102, 153);
}
function telainstruções(){background(220);
  image(imageminstruções,0,0,470,260)
if(mouseIsPressed && mouseX>40 && mouseX<40+45 && mouseY>220 && mouseY<220+25){
      tela = 0
      stroke(200)
            fill(255);
    }
  rect(40, 220, 30, 25, 10);
  fill('#000040')
  noStroke()
   textSize(20);
text('🠔', 45, 240);
fill(0, 102, 153);}
function preload() {
  imagemmenu = loadImage('cenarios Engenheiro Mirim_Prancheta 1 cópia.png');
  imageminstruções = loadImage('Prancheta 7.png');
  imagemcreditos = loadImage('Prancheta 4.png');
  imageminiciar = loadImage('cenarios Engenheiro Mirim png-01.png');
  robo1 = loadImage('robo fixo-01.png');
  mascote = loadImage('mascote EM.png');
  robo[0] = loadImage('robo(1).png');
  robo[1] = loadImage('robo(2).png');
  robo[2] = loadImage('robo(3).png');
  robo[3] = loadImage('robo(4).png');
  robo[4] = loadImage('robo(5).png');
}
function setup() {
  createCanvas(470,260);
}
function draw() {
  //menu
  if (tela == 0) {
  background(220);
  image(imagemmenu,0,0,470,260)
    if(mouseX>200 && mouseX<200+85 && mouseY>210 && mouseY<210+25){
      stroke(200)
            fill(255);
    }
  rect(200, 210, 85, 25, 10);
    if(mouseIsPressed && mouseX>200 && mouseX<200+85 && mouseY>210 && mouseY<210+25){
      tela = 2
      stroke(200)
            fill(255);
   
  rect(200, 210, 85, 25, 10);
       }
  fill('#000040')
  noStroke()
   textSize(20);
text('Iniciar', 217, 230);
fill(0, 102, 153);
  fill('#000040')
  noStroke()
   textSize(20);
text('Iniciar', 217, 230);
fill(0, 102, 153);
    
    if(mouseIsPressed && mouseX>80 && mouseX<80+85 && mouseY>210 && mouseY<210+25){
      tela = 1
      stroke(200)
            fill(255);
    }
  rect(80, 210, 85, 25, 10);
  fill('#000040')
  noStroke()
   textSize(19);
text('Instrução', 83, 230);
fill(0, 102, 153);
    
    if(mouseIsPressed && mouseX>320 && mouseX<320+85 && mouseY>210 && mouseY<210+25){
      tela = 3
      stroke(200)
            fill(255);
    }
  rect(320, 210, 85, 25, 10);
  fill('#000040')
  noStroke()
   textSize(20);
text('Créditos', 325, 230);
fill(0, 102, 153);
    
  }
  //instruções
  if (tela == 1) {telainstruções();}
  //iniciar
  if (tela == 2) {telainiciar();}
  //
  if (tela == 3) {telacreditos();}
}