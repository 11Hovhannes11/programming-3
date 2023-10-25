var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("../programming-3"));
app.get("/", function (req, res) {
   res.redirect("ht.html");
});
server.listen(3000, function () {
   console.log("App is running on port 3000");
});

let random = require("./random");
let Grass = require('./g')
let GrassEater = require('./ge')
let Predator = require('./prd')
let Hunter = require('./hnt')
let Fire = require('./fire')
let Fireman = require('./fman')

matrix = [];
grassArr = [];
grassEaterArr = [];
predatorArr = [];
hunterArr = [];
fireArr = [];
firemanArr = [];
var n = 30
var m = 30

for (let i = 0; i < n; i++) {
   matrix.push([]);
   for (let j = 0; j < m; j++) {
      matrix[i].push(0);
   }
}


function createGame() {
   function characters(index, count) {
      for (let a = 0; a < count; a++) {
         var v = Math.floor(random(n))
         var w = Math.floor(random(m))
         matrix[v][w] = index
      }
   }
   characters(1, 100)
   characters(2, 50)
   characters(3, 20)
   characters(4, 5)
   characters(5, 2)
   characters(6, 3)

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
         else if (matrix[y][x] == 6) {
            var frm = new Fireman(x, y, 1);
            firemanArr.push(frm);

         }
      }
   }
}


function drawGame() {
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
   for (var i in firemanArr) {
      firemanArr[i].eat();
   }
   io.emit("matrix", matrix)
}

createGame()

let intervalID;

function startGame() {
   clearInterval(intervalID)
   createGame()
   intervalID = setInterval(() => {
      drawGame()
   }, 250)
}
io.on("connection", (socket) => {
   socket.emit("matrix", matrix)
   startGame()
})

