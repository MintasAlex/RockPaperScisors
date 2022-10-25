const btns = document.querySelectorAll('button');
const resultDisplay = document.querySelector(".result");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const roundDisplay = document.querySelector("#round");
let playerScore = computerScore = round = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return ("rock");
            break;
        case 1:
            return ("paper");
            break;
        case 2:
            return ("scisors");
            break;
        default:
            return ("rock");
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return ("It's a tie!")
    } else if (playerSelection == "rock") {
        if (computerSelection == "scisors") {
            return ("You win! Rock beats Scisors!");
        } else return ("You lose! Paper beats Rock!");
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ("You win! Paper beats Rock!");
        } else return ("You lose! Scisors beats Paper!");
    } else if (computerSelection == "paper") {
        return ("You win! Scisors beats Paper!");
    } else return ("You lose! Rock beats Scisors!");
}

const gameContainer = document.querySelector('#game');
const gameOverMsg = document.createElement('h2');
const resetGameBtn = document.createElement('button');

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    updateDisplay();
    resultDisplay.textContent="Choose one:";
    gameContainer.removeChild(gameOverMsg);
    gameContainer.removeChild(resetGameBtn);
}

function gameOver(playerScore, computerScore){
    if (playerScore > computerScore) {
        gameOverMsg.textContent="You won!";
    }else {
        gameOverMsg.textContent="You lost!";
    }

    resetGameBtn.textContent="Play again!";
    resetGameBtn.addEventListener('click', () => {
        resetGame();
    });
    

    gameContainer.appendChild(gameOverMsg);
    gameContainer.appendChild(resetGameBtn);
    
}

function updateDisplay(){
    roundDisplay.textContent = "Round: " + round;
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
}

function game(playerSelection) {
    let result;
    round++;
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    resultDisplay.textContent = result;
    if (result.substring(4, 7) === "win") {
        playerScore++;
    } else if (result.substring(4, 8) === "lose") {
        computerScore++;
    }
    updateDisplay();

    if (playerScore == 5 || computerScore == 5){
        gameOver(playerScore,computerScore);
    }
}

btns.forEach(btn => btn.addEventListener('click', () => {
    game(btn.textContent);
}));






