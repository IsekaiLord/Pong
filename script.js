var uto1 = document.getElementById("uto1");
var uto2 = document.getElementById("uto2"); 
var labda = document.getElementById("labda");
var uto1Y = 300;
var uto2Y = 300;

var uto1legomb = false;
var uto1felgomb = false;
var uto2legomb = false;
var uto2felgomb = false;
var labdaXSeb = 0;
var labdaYSeb = 0;
var labdaX = 0;
var labdaY = 0;

uto1.style.left = "40px";
uto2.style.left = "750px";

document.addEventListener("keydown", function(event){
    if(event.key == "s") uto1legomb = true;
    if(event.key == "w") uto1felgomb = true;
    if(event.key == "ArrowDown") uto2legomb = true;
    if(event.key == "ArrowUp") uto2felgomb = true;
});

document.addEventListener("keyup", function(event){
    if(event.key == "s") uto1legomb = false;
    if(event.key == "w") uto1felgomb = false;
    if(event.key == "ArrowDown") uto2legomb = false;
    if(event.key == "ArrowUp") uto2felgomb = false;
}); 



function loop(){
    if(uto1legomb == true) uto1Y += 5;
    if(uto1felgomb == true) uto1Y -= 5;
    if(uto2legomb == true) uto2Y += 5;
    if(uto2felgomb == true) uto2Y -= 5; 

    labdaX += labdaXSeb;
    labdaY += labdaYSeb;    

    // Ball collision with top and bottom
    if (labdaY < 0 || labdaY > 600) {
        labdaYSeb = -labdaYSeb;
    }
    
    // Ball collision with paddles
    // Left paddle (uto1)
    if (labdaX < 10 && labdaY >= uto1Y - 50 && labdaY <= uto1Y + 50) {
        labdaXSeb = Math.abs(labdaXSeb); // Force ball to move right
    }   
    // Right paddle (uto2)
    if (labdaX > 700 && labdaY >= uto2Y - 50 && labdaY <= uto2Y + 50) {
        labdaXSeb = -Math.abs(labdaXSeb); // Force ball to move left
    }
    
    // Ball collision with sides (scoring)
    if (labdaX < 0 || labdaX > 750) {
        startLabda();
    }

    uto1.style.top = uto1Y-50 + "px";
    uto2.style.top = uto2Y-50 + "px";
    labda.style.left = labdaX - 5 + 50 + "px";
    labda.style.top = labdaY - 5 + "px";
    window.requestAnimationFrame(loop);
}

function startLabda(){
    labdaX = 350;
    labdaY = 300;
    labdaXSeb = (Math.random()*3+2) * (Math.round(Math.random()) * 2 - 1);
    labdaYSeb = (Math.random()*3+2) * (Math.round(Math.random()) * 2 - 1);
}

startLabda();
loop();