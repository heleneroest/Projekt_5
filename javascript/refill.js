console.log(document.head);

//husk billeder
var myImage = document.getElementById('mainImage');
var imageArray = ["../billeder/matas-striber-refill.png", "../billeder/matas-striber-refill-3.png", "../billeder/matas-striber-refill-2.png"]; //image container//
var imageIndex = 1;

function changeImage(){
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex > 2) {imageIndex = 0;}
}
