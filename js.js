var matrix = [];
var n = 24*1.5
var m = 36*1.5
var side = 20;   
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var hunterArr = [];
var fireArr = [];
for (let i = 0; i < n; i++) {
   matrix.push([]);
   for (let j = 0; j < m; j++) {
      matrix[i].push(0);
   }   
}

function characters(index,count) {
   for (let a = 0; a < count; a++) {
      var v = Math.floor(random(0,n))
      var w = Math.floor(random(0,m))
      matrix[v][w] = index
   }
}


function setup() {
   characters(1,250)
   characters(2,150)
   characters(3,100)
   characters(4,10)
   frameRate(5);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');
   for (var y = 0; y < matrix.length; ++y) {
      for (var x = 0; x < matrix[y].length; ++x) {
         if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
         }
         else if (matrix[y][x] == 2) {
            var gre = new GrassEater(x, y, 1);
            grassEaterArr.push(gre);
         }
         else if (matrix[y][x] == 3) {
            var prd = new Predator(x, y, 1);
            predatorArr.push(prd);
         }
         else if (matrix[y][x] == 4) {
            var hnt = new Hunter(x, y, 1);
            hunterArr.push(hnt);
         }
         else if (matrix[y][x] == 5) {
            var fir = new Fire(x, y, 1);
            fireArr.push(fir);
         }
      }
   }

}

function draw() {

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
            fill("rgb(255, 0, 0)");
            rect(x * side, y * side, side, side);
         }
      }
   }

   for (var i in grassArr) {
      grassArr[i].mul();
   }
   for (var i in grassEaterArr) {
      grassEaterArr[i].eat();
   }
   for (var i in predatorArr) {
      predatorArr[i].eat();
   }
   for (var i in hunterArr) {
      hunterArr[i].eat();
   }
   for (var i in fireArr) {
      fireArr[i].eat();
   }
}
console.log("aaaaaa")