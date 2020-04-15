
function one(){
  document.getElementById("target").style.opacity ='1';
}
function c1(){
  document.getElementById("target1").style.opacity ='1';
}
function c2(){
  document.getElementById("target2").style.opacity ='1';
}
function c3(){
  document.getElementById("target3").style.opacity ='1';
}
function c4(){
  document.getElementById("target4").style.opacity ='1';
}
function c5(){
  document.getElementById("target5").style.opacity ='1';
}
function c6(){
  document.getElementById("target6").style.opacity ='1';
}

function myFunction(){
  var kunder = ["Hanne", " Line", " Søren"];
  document.getElementById("kundeliste").innerHTML = kunder;
}

function myFunction3(){
  var kunder = ["Hanne", " Line", " Søren"];
  var i, len, tekst;
  for (i = 1, len = kunder.length, tekst = ""; i <len+1; i++) {
    tekst += kunder[i] + " er kunde nummer " + i + "<br>";
}
document.getElementById("kundenummer").innerHTML = tekst;
}

function myFunction2() {
  var time = new Date().getHours();
  var hilsen;
  if (time < 18) {
    hilsen = "God dag";
  } else {
    hilsen = "God aften";
  }
  document.getElementById("enhilsen").innerHTML = hilsen;
}
