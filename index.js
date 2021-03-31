
//width = 800, height = 800
let x = 10;
let y = 750; 
let x_vel = 5;
let y_vel = 10;
//default pos
let ArrowRight = false;
let ArrowLeft = false;
let isJump = false;
let onGround = true;


function Player(){
    function updatePlayer(){
        ctx = canvas.context;
        window.addEventListener("keydown", function(event) { switch(event.code) {
            case "ArrowLeft":
                ArrowLeft = true;
                break;
            case "ArrowRight":
                ArrowRight = true;
                break;
            case "ArrowUp": 
                if (!(isJump)){
                    isJump = true;
                    onGround = false;
                }                
                break;     
        }}, true);
        window.addEventListener("keyup", function(event) {
            switch(event.code) {
                case "ArrowLeft":
                    ArrowLeft = false;   
                    break;            
                case "ArrowRight":
                    ArrowRight = false;    
                    break; 
                case "ArrowUp":
                    break;
            }
        }, true);
        if (ArrowRight){
            x += x_vel;
        } else if (ArrowLeft){
            x -= x_vel;
        }
        
        //console.log(onGround, isJump)
        if (isJump && !(onGround)){
            if(y_vel > -11){
                y -= y_vel;
                y_vel -= 1; 
            }
        }else if (isJump){                       
            isJump = false;
            y_vel = 10;  
        }
        if (isJump){

            //for (i = 0; i < platforms.length+1; i++) {
              //  platforms[i].y = platform_y
              //  platforms[i].x = platform_x
              //  if (y === platform_y || y === platform_x){
                //  onGround = true;
                //  isJump = false;
                //  y_vel = 1;
              //}
              //}
            if (y === 695){
                onGround = true;
                isJump = false;
                y_vel = 10;
            }
        }
    }
    function drawPlayer(){
        ctx.clearRect(0,0,800,800);
        //del clear after from this 
        ctx.fillStyle = "red";
        ctx.fillRect(x,y,15,15);
    }
    updatePlayer();
    drawPlayer();
}

function Platform(){
    //del clear after from this 
    ctx.fillStyle = "black";
    ctx.fillRect(0,710,10,10);
}

function Map(){
    this.row1 = [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]; 
    this.row2 = [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x];
    this.row3 = [x,x,x,x,x,x,x,x,x,x,x,x,x,x,o,o,x,x,x];
    this.row4 = [x,x,x,x,x,x,x,x,x,o,o,x,x,x,x,x,x,x,x];
    this.row5 = [x,x,o,o,o,o,o,o,x,x,x,x,x,x,x,x,x,x,x];
    this.row6 = [x,x,x,x,x,x,x,x,x,x,x,u,u,u,x,x,x,x,x];
    
    // u = lava, x = nothing, o = platform
    
}


function game(){
    Player();
    Platform();
    

 }









