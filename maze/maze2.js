//Min første bane
let maze = [
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,1,1,1,1,1,3,1,0,0,1,1,1,1,1,0],
    [0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,3,0,0,1,0],
    [1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0],
    [1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0],
    [3,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0],
    [0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0],
    [0,1,0,1,0,1,1,0,1,2,1,1,1,0,1,0,1,1,1,0],
    [0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0],
    [0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0],
    [1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0],
    [0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0],
    [0,1,0,0,1,0,1,0,0,0,0,0,3,0,1,0,0,0,1,0],
    [1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0],
    [1,0,0,1,3,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0],
    [0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,-1,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0]
];

function toNewMaze(){
    setTimeout(function(){location.href = "maze3.html";}, 1000);
}

function diedMine(){
    setTimeout(function(){location.href = "../index.html";}, 500);
}

let tileSize = 25;

let wallColor = "#704A6E";
let goalColor = "#9EC1B3";
let mineColor = "#FE92D9";
let mazeColor = "#ECE1D5";
let playerColor = "#9A111A";


// LYDE 
function soundWalk(){
    let audio = new Audio('../sound/bird.mp3');
    audio.play();
}

function soundWall(){
    let audio = new Audio('../sound/boom.mp3');
    audio.play();
}

function soundMine(){
    let audio = new Audio('../sound/mine.mp3');
    audio.play();
}

function soundClapping(){
    let audio = new Audio('../sound/clapping.mp3');
    audio.play();
}