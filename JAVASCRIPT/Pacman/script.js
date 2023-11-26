var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,3,2,1,1,3,1,1,3,1,1,1,2,1,1,3,1,3,2],
    [2,1,1,2,3,2,2,2,1,2,2,1,1,2,1,2,2,2,1,2],
    [2,1,1,2,1,2,1,2,1,2,1,3,1,2,1,2,3,2,1,2],
    [2,1,1,2,1,2,1,2,1,1,2,1,3,2,1,2,1,2,3,2],
    [2,3,1,2,2,2,1,2,1,1,2,1,1,2,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,3,2,1,2],
    [2,1,1,1,1,1,3,1,3,2,2,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,3,2],
    [2,1,3,2,1,2,2,2,3,1,2,3,1,2,1,2,2,2,1,2],
    [2,1,1,2,1,2,3,2,1,2,1,1,3,2,1,2,1,2,1,2],
    [2,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,2,2,1,2,1,1,2,3,1,2,2,2,1,2,1,2],
    [2,3,1,1,1,3,1,2,1,2,2,1,1,1,1,1,1,2,1,2],
    [2,1,1,1,1,1,3,1,1,2,2,3,1,1,1,1,3,1,1,2],
    [2,1,1,2,2,2,1,2,1,2,2,1,1,2,2,2,1,2,3,2],
    [2,1,1,1,3,1,1,2,1,2,2,1,1,1,1,3,1,2,1,2],
    [2,3,1,3,1,1,1,1,1,1,2,1,3,1,3,1,3,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,3,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacmans = [
    {x : 1,y : 1},
    {x : 18,y : 1}
];

var ghosts = [
    {x:3,y:6},
    {x:7,y:15},
    {x:10,y:8}
]

var moveDirct = {
    up: 0, //up
    down: 1,  //down
    left: 2,  //left
    right: 3   //right
   }

var score = 0;

function displayWorld(){
    var output = "";

    for(var i=0; i < world.length; i++){
        output += "<div class='row'>";
        for(var j=0; j < world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
                else if(world[i][j] == 3)
                output += "<div class='cherry'></div>";
            else if(world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += "</div>";
    }
    /*console.log(output);*/
    document.getElementById('world').innerHTML = output;
}   


function displayPacman(){
    content = "";
    for(var i = 0; i < pacmans.length; i++){
     content += "<div class='pacman'  style='left: "+ pacmans[i].x * 20 +"px; top: "+ pacmans[i].y * 20 +"px '></div>";
       }
       document.getElementById('pacmans').innerHTML = content;
    }

function displayGhost(){
    content = "";
    for(var i = 0; i < ghosts.length; i++){
     content += "<div class='ghost'  style='left: "+ ghosts[i].x * 20 +"px; top: "+ ghosts[i].y * 20 +"px '></div>";
       }
       document.getElementById('ghosts').innerHTML = content;
    
}

function moveGhost(){
    for(var i = 0; i < ghosts.length; i++){
    var changeDirection = Math.floor(Math.random() * 4);
    switch(changeDirection){
        case moveDirct.up:
          if((world[ghosts[i].y - 1][ghosts[i].x] != 2))  
            {ghosts[i].y = ghosts[i].y - 1;}
          break;
        case moveDirct.down:
          if(world[ghosts[i].y + 1][ghosts[i].x] != 2) 
           {ghosts[i].y = ghosts[i].y + 1;}
          break;
        case moveDirct.left:
          if(world[ghosts[i].y][ghosts[i].x - 1] != 2) 
           {ghosts[i].x = ghosts[i].x - 1;}
          break;
        case moveDirct.right:
          if(world[ghosts[i].y][ghosts[i].x + 1] != 2)
           {ghosts[i].x = ghosts[i].x + 1;}
          break;
     }
    }
}

function collusionDetection(){
    for(var i=0; i < pacmans.length; i++){
      for(var j=0; j < ghosts.length; j++){
            var pacmanClass = document.getElementsByClassName('pacman')
                if(pacmans[i].x - ghosts[j].x == 0 && pacmans[i].y - ghosts[j].y == 0){
                    pacmanClass[i].style.backgroundImage = "url('')";
                    pacmans[i].x=0;
                    pacmans[i].y=0;
                    console.log("The ghost ate the pacman");
                    clearInterval(gameLoopInterval);
            }   
        }
    }
}


function displayScore(){
    document.getElementById('score').innerHTML = score;
    
}

var gameLoopInterval = setInterval(function(){
    displayWorld(); 
    displayPacman();
    displayGhost();
    moveGhost();
    collusionDetection();
    displayScore();
    
   }, 200);  




document.onkeydown = function(e){
    console.log(e.key);
    for(var i=0; i < pacmans.length; i++){
    if(e.key == "ArrowUp" && world[pacmans[i].y-1][pacmans[i].x] != 2){
        pacmans[i].y --;
    }
    else if(e.key == "ArrowDown" && world[pacmans[i].y+1][pacmans[i].x] != 2){
        pacmans[i].y ++;
    }
    else if(e.key == "ArrowLeft" && world[pacmans[i].y][pacmans[i].x-1] != 2){
        pacmans[i].x --;
    }
    else if(e.key == "ArrowRight" && world[pacmans[i].y][pacmans[i].x+1] != 2){
        pacmans[i].x ++;
    }
    if(world[pacmans[i].y][pacmans[i].x] == 1 || world[pacmans[i].y][pacmans[i].x] == 3){
        world[pacmans[i].y][pacmans[i].x] = 0;
        score += 10;
        console.log(score);
        displayWorld();
        displayScore();
    }
    }
}
