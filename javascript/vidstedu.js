console.log(document.head);

var myImage = document.getElementById('mainImage');
var imageArray = ["../billeder/gettyimages-176165730.jpg", "../billeder/scan_003.jpg", "../billeder/scan_007.jpg"]; //image container//
var imageIndex = 1;

function changeImage(){
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex > 2) {imageIndex = 0;}

}
