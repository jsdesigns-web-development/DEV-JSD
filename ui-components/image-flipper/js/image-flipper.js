// File: image-flipper.js
// Company: JS Designs
// URL: https://jsdesigns.site
// Author: Brian Jason
// Email: brian@jsdesigns.site

function fileNames() {
  return [
    "attach51213_20190820_183236.jpg",
    "attach51214_20190820_183236.jpg",
    "attach51215_20190820_183236.jpg",
    "attach51216_20190820_183237.jpg",
    "attach51218_20190820_183237.jpg",
    "attach51219_20190820_183240.jpg",
    "attach51220_20190820_183240.jpg",
    "attach51221_20190820_183240.jpg",
    "attach51222_20190820_183439.jpg",
    "attach51223_20190820_183439.jpg",
    "attach51224_20190820_183439.jpg",
    "attach51225_20190820_183441.jpg",
    "attach51226_20190820_183441.jpg",
    "attach51227_20190820_183441.jpg",
    "attach51228_20190820_183602.jpg",
    "attach51229_20190820_183602.jpg",
    "attach51230_20190820_183602.jpg",
    "attach51231_20190820_183605.jpg",
    "attach51232_20190820_183605.jpg",
    "attach51233_20190820_183609.jpg",
    "attach51234_20190820_183609.jpg",
    "attach51235_20190820_183609.jpg",
    "attach51236_20190820_183616.jpg",
    "attach51237_20190820_183616.jpg",
    "attach51238_20190820_183616.jpg"
  ];
}

function directoryPath() {
  return "img/"
}

var imgPosition = 0;

function changeImg(desiredPosition){
  if(desiredPosition < 0){
    desiredPosition = fileNames().length - 1;
  }

  if (desiredPosition > fileNames().length - 1){
    desiredPosition = 0;
  }

  var filePath = "" + directoryPath() + fileNames()[desiredPosition];
  $("#displayImage").addClass('load');
  document.getElementById("displayImage").src = filePath;
  $("#displayImage").removeClass('load');
  imgPosition = desiredPosition;
}

function backImg(){
  var targetPosition = imgPosition - 1;
  changeImg(targetPosition);
}

function nextImg(){
  var targetPosition = imgPosition + 1;
  changeImg(targetPosition);
}
