let canvas = {
   canvas: document.createElement("canvas"),
   start: function () {
       this.canvas.width = 800;
       this.canvas.height = 800;
       this.context = this.canvas.getContext("2d");
       document.body.insertBefore(this.canvas, document.body.childNodes[0]);
       this.coinInterval = 0;
       this.game = setInterval(game, 20);
      let ctx = canvas.context;
   },
   stop : function() {
       clearInterval(this.game);
   }
}
var c = canvas;
var ctx = c.getContext("2d");
ctx.fillRect(20, 20, 150, 100);

const playerColor = "rgb(118,150,86)";
const screenColor = "rgb(0,0,0)";
const coinColor = "rgb(221,175,12)";
const textColor = "rbg(255,255,255,0.5)";

function game() {
   canvas.coinInterval++;
   let ctx = canvas.context;
}

function updateCoin() {
}







window.addEventListener("keydown", function(event) {   switch(event.code) {
       case "KeyS":
       case "ArrowDown":
           //Movement logic down
           break;
       case "KeyW":
       case "ArrowUp":
           //Movement logic up
           break;
       case "KeyA":
       case "ArrowLeft":
           //Movement logic left
           break;
       case "KeyD":
       case "ArrowRight":
           //Movement logic right
           break;
   }
}, true);

window.addEventListener("keyup", function(event) {
   switch(event.code) {
       case "KeyS":
       case "ArrowDown":
       case "KeyW":
       case "ArrowUp":
           //Movement logic vertical stop
           break;
       case "KeyA":
       case "ArrowLeft":
       case "KeyD":
       case "ArrowRight":
           //Movement logic horizontal stop
           break;
   }
}, true);
