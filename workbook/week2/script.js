function setup() {
    canvas=createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    // background(255, 255, 255);
}

function draw(){
    // background(255, 255, 255, 4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width/2, height/2, mouseX, mouseY);
    stroke(0);
    strokeWeight(1);
}