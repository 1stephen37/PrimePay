var canvas = document.querySelector('#mycanvas');

var ctx = canvas.getContext('2d');

var drawBg = () => {

    ctx.beginPath();
    
    ctx.fillStyle = "#231656";
    
    ctx.fillRect(0, 0, 1700, 1000);
    
    ctx.closePath();

} 

drawBg();

var x = 50;
var y = 50;
var dx = 3;
var dy = 1;
var radius = 40;
var isGameOver = false;

var drawBall = () => {
    ctx.beginPath();

    ctx.fillStyle = "#625FFB";

    ctx.arc(x, y, radius, 50, 1, 6.28);
    ctx.fill();


    ctx.closePath();
}

var bricks = {
    offsetX : 550,
    offsetY : 100,
    margin: 50,
    width: 100,
    height: 30,
    totalCow :3,
    totalCol : 5
}

var bricksList = [];

for (var i = 0; i < bricks.totalCow; i++) {
    for (var j = 0; j < bricks.totalCol; j++) { 
        bricksList.push({
            x : bricks.offsetX + j * (bricks.width + bricks.margin),
            y: bricks.offsetY + i * (bricks.height + bricks.margin),
            isBroken: false
        });
    }
}

var drawBricks = () => { 
    bricksList.forEach(function(ev) {
        if(!ev.isBroken) { 

        ctx.beginPath();    
        
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect( 
            ev.x , ev.y , bricks.width, bricks.height
        )
    
        ctx.closePath(); 
        };
    });

    

}

// drawBall();

// setInterval(function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBg();
//     drawBall();
//     x += 5;
//     y += 5;
// }, 200);

var condition = () => {
    if( x < radius || x > canvas.width - radius) {
        dx = -dx;
    }

    if(y < radius) {
        dy = -dy;

    }
}

var update = () => {

    x += dx;
    y += dy;
}

var line = {
    width: 300,
    height: 30,
    x: 0,
    y: canvas.height - 30,
    speed: 20, 
    left: false,
    right: false
}

var drawline = () => {
    ctx.beginPath();
    
    ctx.fillStyle = '#625FFB';
    ctx.fillRect( line.x, line.y , line.width, line.height);

    ctx.closePath();
}

document.addEventListener('keyup' ,function (event) {
    if(event.keyCode == 37) {
        line.left = false;
    } else if ( event.keyCode == 39) {
        line.right = false;
    }
});

document.addEventListener('keydown' ,function (event) {
    if(event.keyCode == 37) {
        line.left = true;
    } else if ( event.keyCode == 39) {
        line.right = true;
        
    }
});

var collide = () => {
    if(x + radius > line.x && x + radius <= line.x + line.width 
        && y +radius >= canvas.height - line.height) {
            dy = -dy;
    }
}

var updateLine = () => {
    if(line.left) {
        line.x -= line.speed;
    } else if(line.right) { 
        line.x += line.speed;
    }

    if(line.x < 0) {
        line.x = 0;
    } else if( line.x > canvas.width - line.width ) {
        line.x = canvas.width - line.width;
    }
}

var checkOver = () => {
    if( y > canvas.height - radius ) { 
        isGameOver = true;
    }
}

var gameOver = () => {
    console.log("game over");

}

var broken = () => { 
    bricksList.forEach( function (ev) {
        if(!ev.isBroken) {
            if( x <= ev.x && x <= ev.x + bricks.width 
                && y + radius >= ev.y && y - radius <= ev.y + bricks.height) {
                dy = -dy;
                ev.isBroken = true;
            }
        }
    });
}

var draw = () => {
    if(!isGameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBg();
            drawBall();
            drawline();
            drawBricks();
    
            condition();
            collide();
            
            update();
            updateLine(); 

            broken();
            
            checkOver();
    
        requestAnimationFrame(draw);

    } else {
        gameOver();
    }
};

draw();

