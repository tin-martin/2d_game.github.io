
//width = 800, height = 800
let x = 10;
let y = 750; 
let x_vel = 5;
let y_vel = 6.25;
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
            if(y_vel > -6.5){
                y -= y_vel;
                y_vel -= 0.25; 
            }
        }else if (isJump){                       
            isJump = false;
            y_vel = 6.25;  
        }
 
        if (y === 680 && isJump === true){
            onGround = true;
             isJump = false;
             y_vel = 6.25;
        }
        
    }
    function drawPlayer(){
        ctx.clearRect(0,0,800,800);
        //del clear after from this 
        ctx.fillStyle = "red";
        ctx.fillRect(x,y,25,25);
    }
    updatePlayer();
    drawPlayer();
}

function Platform(){
    function drawPlatform(){
        //del clear after from this 
        ctx.fillStyle = "black";
        ctx.fillRect(0,700,800,25);
        ctx.fillStyle = "red";
        ctx.fillRect(0,700,800,2);

   } 
   drawPlatform();
}

function Map(){
    
}


function game(){
    Player();
    Platform();
    

 }









