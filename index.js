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

let ctx = canvas.context;

function drawPlayer(x,y,width,height) { 
         ctx.beginPath();
         ctx.rect(x,y,width,height);
         ctx.fillStyle = 'brown';
         ctx.fill();
      }

function game() {
   this.x = 100
   this.y = 100
   this.width = 150
   this.height = 150
   vel = 10
   drawPlayer(this.x, this.y, this.width, this.height)
   
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
           this.x -= vel
           break;
       case "KeyD":
       case "ArrowRight":
           this.x += vel
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
}
game()





