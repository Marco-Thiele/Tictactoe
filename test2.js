function checkForWinn() {
    let winner;
    
    const winConditions = [
      [0, 1, 2, 'line-1', 'scaleX(1)'],
      [3, 4, 5, 'line-2', 'scaleX(1)'],
      [6, 7, 8, 'line-3', 'scaleX(1)'],
      [0, 3, 6, 'line-5', 'scaleX(1) rotate(90deg)'],
      [1, 4, 7, 'line-4', 'scaleX(1) rotate(90deg)'],
      [2, 5, 8, 'line-6', 'scaleX(1) rotate(90deg)'],
      [0, 4, 8, 'line-7', 'scaleX(1.5) rotate(56deg)'],
      [2, 4, 6, 'line-8', 'scaleX(1.5) rotate(-56deg)']
    ];
  
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c, lineId, transform] = winConditions[i];
      if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
        winner = fields[a];
        document.getElementById(lineId).style.transform = transform;
      }
    }
    if (!!winner) {
      console.log('Gewonnen', winner);
      gameover = true
      setTimeout(function(){
        document.getElementById('gameOver').classList.remove('d-none');
        document.getElementById('restart-btn').classList.remove('d-none');
      }, 1000)
    }
  }