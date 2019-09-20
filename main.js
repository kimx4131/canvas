let canvas = document.querySelector('#canvas');
let canvasContext = canvas.getContext('2d'); //Fortæller at det er et 2d element

let x;
let y;

let player = -1;
let playerPostion;

function grid(){
    for(y=0; y < maze.length; y++){
        for(x=0; x < maze[y].length; x++){
            
            if(maze[y][x] == 1){ //WALL
                canvasContext.fillStyle = wallColor;
                canvasContext.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
            } else if(maze[y][x] == 2){ //MÅL
                canvasContext.fillStyle = goalColor;
                canvasContext.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
            } else if(maze[y][x] == 3){ //MINE
                canvasContext.fillStyle = mazeColor;
                canvasContext.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);

                canvasContext.strokeStyle=mineColor;
                canvasContext.lineWidth=5;

                canvasContext.beginPath();
                canvasContext.arc(x*tileSize+(tileSize/2), y*tileSize+(tileSize/2), tileSize/3, 0, 2*Math.PI);
                canvasContext.stroke();
                
            } else if(maze[y][x] == 0){ //BANE/VEJ
                canvasContext.fillStyle = mazeColor;
                canvasContext.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
            }  else if(maze[y][x] == player){ //PLAYER/SPILLER
                playerPostion = {y,x}; //genne og kigger på hvorhenne playeren er på pladen
                console.log(playerPostion.y + " " + playerPostion.x);

                canvasContext.fillStyle = mazeColor;
                canvasContext.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);

                canvasContext.strokeStyle=playerColor;
                canvasContext.lineWidth=5;

                canvasContext.beginPath();
                canvasContext.arc(x*tileSize+(tileSize/2), y*tileSize+(tileSize/2), tileSize/3, 0, 2*Math.PI);
                canvasContext.stroke();
            } 
        }
    }
}

//Funktioner til Switch angående piltaster
function keyLeft(){
    if (maze[playerPostion.y][playerPostion.x -1] == 0){ // hvis feltet i mazen er 0, så kan spiller gå på den 
        maze[playerPostion.y][playerPostion.x -1] = -1; //nye position. Ændre et 0 til -1
        maze[playerPostion.y][playerPostion.x] = 0; //gammle position. Ændre -1 til 0
        soundWalk();
    } else if (maze[playerPostion.y][playerPostion.x -1] == 3){
        soundMine();
        diedMine();
    } else if (maze[playerPostion.y][playerPostion.x -1] == 2){
        soundClapping();
        toNewMaze();
    }  else{
        soundWall();
    }
};

function keyUp(){
    if (maze[playerPostion.y -1][playerPostion.x] == 0){ // hvis feltet i mazen er 0, så kan spiller gå på den 
        maze[playerPostion.y -1][playerPostion.x] = -1; //nye position. Ændre et 0 til -1
        maze[playerPostion.y][playerPostion.x] = 0; //gammle position. Ændre -1 til 0
        soundWalk();
    }else if (maze[playerPostion.y -1][playerPostion.x] == 3){
        soundMine();
        diedMine();
    } else if (maze[playerPostion.y -1][playerPostion.x] == 2){
        soundClapping();
        toNewMaze();
    } else {
        soundWall();
    }
};

function keyRight(){
    if (maze[playerPostion.y][playerPostion.x +1] == 0){ // hvis feltet i mazen er 0, så kan spiller gå på den 
        maze[playerPostion.y][playerPostion.x +1] = -1; //nye position. Ændre et 0 til -1
        maze[playerPostion.y][playerPostion.x] = 0; //gammle position. Ændre -1 til 0
        soundWalk();
    }else if (maze[playerPostion.y][playerPostion.x +1] == 3){
        soundMine();
        diedMine();
    } else if (maze[playerPostion.y][playerPostion.x +1] == 2){
        soundClapping();
        toNewMaze();
    } else {
        soundWall();
    }
};

function keyDown(){
    if (maze[playerPostion.y +1][playerPostion.x] == 0){ // hvis feltet i mazen er 0, så kan spiller gå på den 
        maze[playerPostion.y +1][playerPostion.x] = -1; //nye position. Ændre et 0 til -1
        maze[playerPostion.y][playerPostion.x] = 0; //gammle position. Ændre -1 til 0
        soundWalk();
    }else if (maze[playerPostion.y +1][playerPostion.x] == 3){
        soundMine();
        diedMine();
    } else if (maze[playerPostion.y +1][playerPostion.x] == 2){
        soundClapping();
        toNewMaze();
    } else {
        soundWall();
    }
};


//Lytter på om der bliver klikket på knapper. Har en annonym funktion
window.addEventListener("keydown", function(event){
    console.log(event.keyCode);

    //Switch som lytter til om der bliver klikket på piltasterne og udføre en funktion ud fra hvad der klikkes på
    switch(event.keyCode){
        case 37: //venstre
            keyLeft();
            grid();
            break;

        case 38: //up
            keyUp();
            grid();
            break;

        case 39: //højre
            keyRight();
            grid();
            break;

        case 40: //ned
            keyDown();
            grid();
            break;

        default: 
            break;
    }

});

grid();


