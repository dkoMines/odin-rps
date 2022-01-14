
function computerMove(){
    let cpuMove = Math.floor(Math.random()*3);
    switch (cpuMove) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            alert(`Computer Move Function is broken. Selected ${cpuMove}`);
    }
}

function gameRound(player1, player2) {
    if (player1===player2){
        return 3;
    }
    else if (player1 == "rock" && player2=="scissors" || player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "rock"){
        return 1;
    }
    return 2;
}

function updateScore() {
    document.getElementById("hScore").innerHTML = hscore
    document.getElementById("cScore").innerHTML = cscore
    if (hscore > 4 || cscore > 4){
        endGame()
    }
}


function endGame(){
    if (hscore > 4){
        alert("You won!");
    } else {
        alert("Computer won!")
    }
    hscore = 0
    cscore = 0
    updateScore()
}

function playerMove(humanMove){
    // alert(`Player Selected ${sel}`)
    cpuMove = computerMove()
    document.getElementById("hselect").innerHTML = humanMove
    document.getElementById("cselect").innerHTML = cpuMove
    winner = gameRound(humanMove,cpuMove)
    console.log(winner)
    switch (winner){
        case 1:
            document.getElementById("winner").innerHTML = "Human Wins!";
            hscore ++;
            updateScore();
            break;
        case 2:
            document.getElementById("winner").innerHTML = "Computer Wins!";
            cscore ++;
            updateScore();
            break;
        case 3:
            document.getElementById("winner").innerHTML = "Its a Tie!";
            break;
        default:
            document.getElementById("winner").innerHTML = "Something broke";
    }
}

let hscore = 0, cscore = 0;
