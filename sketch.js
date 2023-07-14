var img;

function preload() {
  img = loadImage('pie_emoji.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(135,206,255); // clear the screen with a black background
  
  //text(frameCount, 20, 20 );
  
  if( frameCount > 3000 && frameCount < 8000 ) {
    textAlign(CENTER);
    textSize(10);
    text( "!yummypie", width/2, height/2 );
  }
  translate( width/2, height/2);
  for( var i = 0; i < 40; i++ ) {
    translate(i + (i*5), i + (i*5));
    rotate( ( PI / (4+(i/10)) ) + (frameCount/1000) );
    image(img, 20,20, 20 + (i*6), 20 + (i*6));
  }
  
}

