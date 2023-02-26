function chechForWinnHorizontal(winner){
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-1').style.transform ='scaleX(1)'
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3]
        document.getElementById('line-2').style.transform ='scaleX(1)'
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[7]) {
        winner = fields[7]
        document.getElementById('line-3').style.transform ='scaleX(1)'
    }
    return winner
}


function chechForWinnVertical(winner){
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-5').style.transform ='scaleX(1)  rotate(90deg)'
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
        document.getElementById('line-4').style.transform ='scaleX(1)  rotate(90deg)'
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-6').style.transform ='scaleX(1) rotate(90deg)'
    }
    return winner
}


function chechForWinnDiagonal(winner){
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-7').style.transform ='scaleX(1.5)  rotate(56deg)'
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-8').style.transform ='scaleX(1.5)  rotate(-56deg)'
    }
    return winner
}
