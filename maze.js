//Min første bane
let maze = [
    [-1,1,0,0,0,1,0,0,0,3],
    [0,1,0,1,0,0,0,1,0,1],
    [0,1,0,1,1,1,1,1,0,0],
    [0,0,0,0,1,3,1,3,1,0],
    [1,1,1,0,1,0,0,0,1,0],
    [0,0,0,0,1,0,1,0,0,0],
    [0,1,1,1,1,0,1,1,1,1],
    [0,1,3,0,0,0,1,0,0,0],
    [0,0,1,0,1,1,1,0,2,0],
    [3,1,0,0,0,0,0,0,0,1],

];

function toNewMaze(){
    setTimeout(function(){location.href = "maze/maze2.html";}, 1000);
}

function diedMine(){
    setTimeout(function(){location.href = "index.html";}, 500);
}

let tileSize = 50;

let wallColor = "#605519";
let goalColor = "#C3BCD4";
let mineColor = "#662B01";
let mazeColor = "#F0F0E8";
let playerColor = "#C3BCD4";


// LYDE 
function soundWalk(){
    let audio = new Audio('sound/bird.mp3');
    audio.play();
}

function soundWall(){
    let audio = new Audio('sound/boom.mp3');
    audio.play();
}

function soundMine(){
    let audio = new Audio('sound/mine.mp3');
    audio.play();
}

function soundClapping(){
    let audio = new Audio('sound/clapping.mp3');
    audio.play();
}



