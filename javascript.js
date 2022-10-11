function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    // console.log(randomChoice);
    switch(randomChoice){
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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return ("It's a tie!")
    }else if (playerSelection == "rock"){
        if (computerSelection == "scisors"){
            return ("You win! Rock beats Scisors!");
        }else return ("You lose! Paper beats Rock!");
    }else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return ("You win! Paper beats Rock!");
        }else return ("You lose! Scisors beats Paper!");       
    }else if (computerSelection == "paper"){
        return ("You win! Scisors beats Paper!");
    }else return ("You lose! Rock beats Scisors!");
}

function game(){
    let result; 
    let playerScore = computerScore = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Choose one: Rock, Paper or Scisors!");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log("Round "+(i+1)+"! "+result);
        if (result.substring(4,7) === "win")
            playerScore++;
        else if (result.substring(4,8) === "lose")
            computerScore++;

        console.log(playerScore +" - "+computerScore);
    }
    switch(true){
        case (playerScore > computerScore):
            console.log("Player wins!");
            break;
        case (playerScore < computerScore):
            console.log("Computer wins!");
            break;
        default:
            console.log("It's a tie!");
    }
    
}

game();
