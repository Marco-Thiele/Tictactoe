let fields = [];
let gameover = false;
let currentShape = 'cross';
let winner;

function fillShape(id) {
    if (!fields[id] && !gameover) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player2').classList.remove('player-inactive');
            document.getElementById('player1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player1').classList.remove('player-inactive');
            document.getElementById('player2').classList.add('player-inactive');
        }
        fields[id] = currentShape;
        functionsSart()
    }
}


function functionsSart(){
    draw();
    checkForWinnHorizontal();
    checkForWinnVertical();
    checkForWinnDiagonal();
    checkForDraw();
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');   
        }
    }
}

function checkForWinn() {
    if (!!winner) {
        console.log('Gewonnen', winner);
        gameover = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1000);
    }
}


function checkForWinnHorizontal() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3]
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[7]) {
        winner = fields[7]
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    checkForWinn();
}


function checkForWinnVertical() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-5').style.transform = 'scaleX(1)  rotate(90deg)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
        document.getElementById('line-4').style.transform = 'scaleX(1)  rotate(90deg)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)';
    }
    checkForWinn();
}


function checkForWinnDiagonal() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-7').style.transform = 'scaleX(1.5)  rotate(56deg)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-8').style.transform = 'scaleX(1.5)  rotate(-56deg)';
    }
    checkForWinn();
}


function checkForDraw() {
    if (fields.length == 9) {
        for (let i = 0; i < fields.length; i++) {
            if (!fields[i]) {
                return;
            }
        }
        gameover = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1000);
    }
}


function restart() {
    gameover = false;
    fields = [];
    winner = null;
    currentShape = 'cross';
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('player1').classList.remove('player-inactive');
    document.getElementById('player2').classList.add('player-inactive');
    restartTransform()
}


function restartTransform(){
    for (let i = 1; i < 9; i++) {
        document.getElementById(`line-` + i).style.transform = 'scaleX(0)';
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cross-` + i).classList.add('d-none');
        document.getElementById(`circle-` + i).classList.add('d-none');
    }
}



function playGame(){
    let firstplayer= document.getElementById('inputPlayer1').value;
    let secondplayer = document.getElementById('inputPlayer2').value;
    document.getElementById('player1Name').innerHTML= firstplayer;
    document.getElementById('player2Name').innerHTML= secondplayer;
    document.getElementById('playGameCard').classList.add('d-none');
    document.getElementById('playGameDiv').classList.remove('d-none');
}