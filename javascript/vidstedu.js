// Var som betyder variabler er dataværdier)
var myImage = document.getElementById('mainImage'); //mainImage for at koble sammen med HTML billede
var imageArray = ["../billeder/gettyimages-176165730.jpg", "../billeder/scan_003.jpg", "../billeder/scan_007.jpg"]; //Imagearray image container-> det er det de billeder vi bruger i slideshow)
var imageIndex = 1;   // tæller tallet placeringen af ​​billederne

//Function får billeder til at skifte
function changeImage(){
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++; //++ som er operatorer betyder increment, betyder at jeg har tilføjet billeder)
  if (imageIndex > 2) {imageIndex = 0;} // Det er kontrolstruktur -->

}
