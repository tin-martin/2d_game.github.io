
//width = 800, height = 800
let x = 10;
let y = 750; 
let x_vel = 5;
let y_vel = 5;
//default pos
ArrowRight = false;
ArrowLeft = false;
Jump = false
var t = 0;
function Player(){
    function drawPlayer(){
        ctx = canvas.context;
        window.addEventListener("keydown", function(event) { switch(event.code) {
            case "ArrowLeft":
                ArrowLeft = true;
                break;
            case "ArrowRight":
                ArrowRight = true;
            case "ArrowUp":
                Jump = true;
                console.log(Jump)
                
                
                
        }}, true);
        window.addEventListener("keyup", function(event) {
            switch(event.code) {
                case "ArrowLeft":
                    ArrowLeft = false;               
                case "ArrowRight":
                    ArrowRight = false;   
                
            }
        }, true);

        if (ArrowRight){
            x += x_vel;
        } else if (ArrowLeft){
            x -= x_vel;
        }
        if (Jump){
           y -= 10*(y_vel - 0.5*9.8);
        }

        
      
        ctx.clearRect(0,0,800,800);
        //del clear after from this 
        ctx.fillStyle = "red";
        ctx.fillRect(x,y,50,50);
        
    }
    drawPlayer();
}

function game(){
     Player();
 
    

 }









