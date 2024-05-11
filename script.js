var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;

function Square() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(x, y, 100, 50);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// Adding Strings 

  ctx.font = "50px Tahoma";
  ctx.fillStyle = "purple";
  ctx.fillText("The value of pi is", 600, 100); 
  ctx.fillText("3.141592653589793238..", 200, y);  // moving text


//  Passing a variable with string or text
  let piQuestion = "What is the value of pi?";
  ctx.fillText(piQuestion, x, 400);







  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);