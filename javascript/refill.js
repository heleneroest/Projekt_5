console.log(document.head);

//husk billeder
var myImage = document.getElementById('mainImage');
var imageArray = ["../billeder/matas-striber-refill.png", "https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/p960x960/62551503_2613060948725572_8675216025270091776_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=SaME-_e9HWMAX-Htuf1&_nc_ht=scontent-cph2-1.xx&_nc_tp=6&oh=086415c43d9b62506dd62cc9a70a439d&oe=5EBBFDDD", "https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/p960x960/70212935_2781466551885010_2341037495950508032_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=1_qmJsFfWmQAX_pEPLW&_nc_ht=scontent-cph2-1.xx&_nc_tp=6&oh=1170f799ab5cad0b19d75d1bd6e8a6b7&oe=5EBA0826"]; //image container//
var imageIndex = 1;

function changeImage(){
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex > 2) {imageIndex = 0;}
}
