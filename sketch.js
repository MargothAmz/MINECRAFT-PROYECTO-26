var playerPaddle, computerPaddle, ball, edges
var paddle1, paddle2, ballImage, bg;
var edges;

function preload(){
    paddle1=loadImage("B1.png")
    paddle2=loadImage("B2.png")
    ballImage=loadImage("Ball2.png")
    bg=loadImage(" ")
}
    
function setup(){
  playerPaddle = createSprite(350, 200, 10, 70);
  computerPaddle = createSprite(20, 200, 10, 70);
  ball = createSprite(200,200,10,10);
  playerPaddle.addImage("B1",paddle1);
  playerPaddle.scale=0.4;
  computerPaddle.addImage("B2",paddle2);
  computerPaddle.scale=0.4;
  ball.addImage("Ball2.png", ballImage);
  ball.scale=0.4;
    
  
  
    edges=createEdgeSprites();
    
  
  
  
}

function draw(){
  background( );
  
 // Agregar el código adecuado para mostrar el mensaje en la pantalla
    
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
    
// Agregar el código para mover la paleta
    

// Agregar el nombre clave adecuado en el código keyDown
   if(keyDown( )){
          
     ball.velocityX = 6;
     ball.velocityY = 6; 
  
  drawSprites();
}
