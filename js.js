let socket = io();
var n = 30
var m = 25
var side = 30;


function setup() {
   frameRate(5);
   createCanvas(n * side, m * side);
   background('#acacac');
}
var obj = [
   {
      grass: "rgb(0, 192, 0)",
      grasseater: "yellow",
      predator: "rgb(167, 101, 0)",
      hunter: "rgb(113, 94, 72)",
      fire: "rgb(253, 53, 20)",
      fireman: "rgb(114, 148, 255)"
   },
   {
      grass: "rgb(157, 227, 0)",
      grasseater: "rgb(255, 225, 102)",//
      predator: "rgb(128, 66, 0)",
      hunter: "rgb(91, 68, 50)",
      fire: "red",
      fireman: "rgb(114, 148, 255)"//
   },
   {
      grass: "rgb(255, 155, 0)",
      grasseater: "rgb(217, 196, 0)",
      predator: "rgb(183, 141, 95)",
      hunter: "rgb(140, 110, 84)",
      fire: "rgb(228, 64, 46)",
      fireman: "rgb(114, 148, 255)"
   },
   {
      grass: "rgb(244, 243, 244)",
      grasseater: "rgb(255, 240, 50)",
      predator: "rgb(255, 225, 189)",
      hunter: "rgb(194, 163, 116)",
      fire: "rgb(255, 187, 160)",
      fireman: "rgb(114, 148, 255)"
   }
]

function drawful(matrix) {

   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
         if (counter > 3) {
            counter = 0;
         }
         if (matrix[y][x] == 1) {
            fill(obj[counter].grass);
            rect(x * side, y * side, side, side);
            
         }
         else if (matrix[y][x] == 0) {
            fill("#acacac");
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 2) {
            fill(obj[counter].grasseater);
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 3) {
            fill(obj[counter].predator);
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 4) {
            fill(obj[counter].hunter);
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 5) {
            fill(obj[counter].fire);
            rect(x * side, y * side, side, side);

         }
         else if (matrix[y][x] == 6) {
            fill(obj[counter].fireman);
            rect(x * side, y * side, side, side);
         }
      }
   }
}
var h2 = document.getElementById("NOge");
h2.addEventListener("click", pause)

var h = document.getElementById("run");
h.addEventListener("click", runFun)

var runFlag = true;

function runFun() {
   runFlag = false;
   socket.emit("run", runFlag)
}

var pause = false;
function pause() {
   pause = true;
   socket.emit("pause", pause)
}

var h1 = document.getElementById("weather");
var counter = 1;
var season = ["Summer", "Autumn", "Winter", "Spring"]
h1.innerHTML = season[0]
let exanak = setInterval(() => {
   if (counter > 3) {
      counter = 0;
   } else {
      h1.innerHTML = season[counter]
      counter++;
   }

}, 6000)

socket.on("matrix", drawful)
