var hero = {
    x: 300,
    y: 300
}

var enemies = [
    {x: 200, y: 100},
    {x: 300, y: 100},
    {x: 400, y: 100},
    {x: 500, y: 100},
    {x: 600, y: 100},
    {x: 700, y: 100},
    {x: 800, y: 100}
];

var bullets = [];

var score = 0;

function displayHero() {
    document.getElementById('hero').style.top = hero.y + "px";
    document.getElementById('hero').style.left = hero.x + "px";
}
displayHero();

function displayEnemies() {
    var output = '';
    for(var i=0; i < enemies.length; i++){
        output += "<div class='enemy1' style='top:" + enemies[i].y+ "px; left:" + enemies[i].x + "px;'></div>"
    }
    document.getElementById('enemies').innerHTML = output;
}
displayEnemies();

function displayBullets() {
    var output = '';
    for(var i=0; i < bullets.length; i++){
        output += "<div class='bullet' style='top:" + bullets[i].y+ "px; left:" + bullets[i].x + "px;'></div>"
    }
    document.getElementById('bullets').innerHTML = output;
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

function moveEnmies() {
    for(var i=0; i < enemies.length; i++){
       enemies[i].y += 5;

       if(enemies[i].y > 540){
        enemies[i].y = 0;
        enemies[i].x = Math.random() * 500;
       }
    }
}

function moveBullets() {
    for(var i=0; i < bullets.length; i++){
       bullets[i].y -= 5;

       if(bullets[i].y < 0){
         bullets[i] = bullets[bullets.length - 1];
         bullets.pop();
       }
    }
}

function detectColisionBullet() {
    collection = document.getElementsByClassName('enemy1');
    for(var i=0; i < bullets.length; i++){
        for(var j=0; j < enemies.length; j++){
            if(Math.abs(bullets[i].x - enemies[j].x) < 10 && Math.abs(bullets[i].y - enemies[j].y) < 10){
                console.log('bullet', i, ' and enemy', j, 'collided');
                score += 10;
                collection[j].style.backgroundPosition = '-70px -40px';
                var audio = new Audio('bomb-explosion.wav');
                audio.play();
                enemies[j].x = 0
                enemies[j].y = 0
                
            }
        }
    }
}

function detectColisionHero() {
    getHero = document.getElementById('hero');
    for(var i=0; i < enemies.length; i++){
        if(Math.abs(hero.x - enemies[i].x) < 5 && Math.abs(hero.y - enemies[i].y) < 5){
            score -= 500;
            console.log('Hero and enemy', i, 'collided');
            getHero.style.backgroundPosition = '-70px -40px';
            var audio = new Audio('bomb-explosion.wav');
            audio.play();
            clearInterval(refreshIntervalId);
        }
    }
}


function gameLoop() {
    displayHero();
    moveEnmies();
    displayEnemies();
    moveBullets();
    displayBullets();
    detectColisionBullet();
    detectColisionHero();
    displayScore();
}
refreshIntervalId = setInterval(gameLoop, 100);

document.onkeydown = function(a) {
    //console.log(a);
    if(a.key == "ArrowLeft"){
        hero.x -= 10;
    }
    else if(a.key == "ArrowRight"){
        hero.x += 10;
    }
    else if(a.key == "ArrowUp"){
        hero.y -= 10;
    }
    else if(a.key == "ArrowDown"){
        hero.y += 10;
    }
    else if(a.key == " "){
        bullets.push({x: hero.x + 6, y: hero.y - 15});
        displayBullets();
    }
}