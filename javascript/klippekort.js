
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

function myFunction() {
  var person = {fname:"John", lname:"Doe", age:25};

  var text = "";
  var x;
  for (x in person) {
    text += person[x] + " ";
  }
  document.getElementById("demo").innerHTML = text;
}
