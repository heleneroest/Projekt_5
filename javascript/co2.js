var counter = document.getElementById('counter').getContext('2d');
var no = 0; 
var pointToFill = 4.72;
var cw = counter.canvas.width;
var ch = counter.canvas.height;
var diff;

function fillCounter(){
  diff = ((no/100) + Math.PI*2*10);

  counter.clearRect(0,0,cw,ch);

  counter.lineWidth = 20;

  counter.fillStyle = '#fff';

  counter.strokeStyle = '#c52c7f';

  counter.textAlign = 'center';

  counter.font = "40px monospace";

  counter.fillText(no,100,110);

  counter.beginPath();
  counter.arc(100,100,90,pointToFill,diff/10+pointToFill);

  counter.stroke();



  if(no>=10)
  {
    clearTimeout(fill);
  }
  no++;
}



var fill = setInterval(fillCounter,50);
