function generateM(){

var middleS = [
  "images/middle-sym/middle1.svg",
  "images/middle-sym/middle2.svg",
  "images/middle-sym/middle3.svg",
];


var imags = middleS[Math.floor(Math.random()*middleS.length)];
document.getElementById('imags').innerHTML += '<img src = "images/middle-sym/m${x}.svg" style="width:100px;">';


}
