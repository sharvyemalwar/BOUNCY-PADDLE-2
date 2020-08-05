var ball,img,paddle,img2;
function preload() {
  /* preload your images here of the ball and the paddle */
  img = loadAnimation("paddle.png");
  img2 = loadAnimation("ball.png");
}
function setup() {
  createCanvas(400, 400);
  
   /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(350,200,50,50);
  paddle.addAnimation("paddle.png",img);
  /* assign the images to the sprites */
  ball = createSprite(200,200,50,50);
  ball.addAnimation("ball.png",img2);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  //ball.collide(edges);
  
 

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 randomVelocity();
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges[0]);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y= paddle.y-20; 
    paddle.collide(edges[0]);
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y= paddle.y+20; 
    paddle.collide(edges[0]);
  } 
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  var randomN;
  randomN= (1,3);
  ball.velocityY = randomN;
  
  ball.velocityY = -randomN;
  ball.bounceOff(paddle, explosion);

function explosion(ball, paddle) {
  ball.remove();
  paddle.score++;
}
}

