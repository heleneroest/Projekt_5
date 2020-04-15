var counter = document.getElementById('counter').getContext('2d');
var no = 0; // Starting point
var pointToFill = 4.72; // Point from where toy want to fill the circle
var cw = counter.canvas.width; // Return canvas width
var ch = counter.canvas.height; // Return canvas height
var diff; // Find the different between current value (no) and trageted value (100)

function fillCounter(){
  diff = ((no/100) + Math.PI*2*10);

  counter.clearRect(0,0,cw,ch); //Clear canvas every time when function is call

  counter.lineWidth = 20; // Sixe of stroke

  counter.fillStyle = '#fff'; // Color that you want to fill in the counter/circle

  counter.strokeStyle = '#c52c7f'; //Stroke Color

  counter.textAlign = 'center';

  counter.font = "40px monospace"; //Set font size and face

  counter.fillText(no,100,110); // fillText(text,x,y)

  counter.beginPath();
  counter.arc(100,100,90,pointToFill,diff/10+pointToFill); // arc(x,y,radius,start,stop)

  counter.stroke(); // To fill stroke

  // Now add condition

  if(no>=10)
  {
    clearTimeout(fill); // Fill is a variable that call the funcion fillcounter()
  }
  no++;
}

// Now call the function

var fill = setInterval(fillCounter,50); // Call the fillCounter function after every 50MS
