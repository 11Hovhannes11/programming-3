let socket = io();
var n = 20
var m = 20
var side = 20;


function setup() {
   frameRate(5);
   createCanvas(n* side, m * side);
   background('#acacac');
}

function drawful(matrix) {

   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

         if (matrix[y][x] == 1) {
            fill("green");
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 0) {
            fill("#acacac");
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 2) {
            fill("yellow");
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 3) {
            fill("orange");
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 4) {
            fill("rgb(91, 68, 50)");
            rect(x * side, y * side, side, side);
         }
         else if (matrix[y][x] == 5) {
            fill("red");
            rect(x * side, y * side, side, side);
            
         }
         else if (matrix[y][x] == 6) {
            fill("rgb(255, 219, 151)");
            rect(x * side, y * side, side, side);
            
         }
      }
   }

}
socket.on("matrix", drawful)
