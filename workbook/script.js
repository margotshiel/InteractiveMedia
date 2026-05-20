// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
    let cnv=createCanvas(windowWidth, windowHeight);
    // canvas.position(0,0);
    cnv.style('z-index', '-1');
    frameRate(35);
    // background(255, 255, 255);
    cnv.parent('p5-canvas-container');
}

function draw(){
    // background(255, 255, 255, 4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // line(width/2, height/2, mouseX, mouseY);
    stroke(255, 0, 0);
    strokeWeight(5);
}

// window.onload = function() {
//     // 1. Target the element you want to move
//     const myBox = document.getElementById("random-box");
    
//     // 2. Generate random percentage values for X and Y
//     const randomX = Math.floor(Math.random() * 80); 
//     const randomY = Math.floor(Math.random() * 80); 
    
//     // 3. Apply the random positions
//     myBox.style.position = "absolute";
//     myBox.style.left = randomX + "%";
//     myBox.style.top = randomY + "%";
// };