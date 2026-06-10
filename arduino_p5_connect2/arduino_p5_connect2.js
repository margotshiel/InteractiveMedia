let serial1;
let latestData = "waiting for data";

function setup() {
 createCanvas(windowWidth, windowHeight);

 serial1 = new p5.SerialPort();

 serial1.list();
 serial1.open('COM4');

 serial1.on('connected', serverConnected);

 serial1.on('list', gotList);

 serial1.on('data', gotData);

 serial1.on('error', gotError);

 serial1.on('open', gotOpen);

 serial1.on('close', gotClose);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial1.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString;
}

function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
 // Polling method
 /*
 if (serial.available() > 0) {
  let data = serial1.read();
  ellipse(50,50,data,data);
 }
 */
}
