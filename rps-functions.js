const playerChoice = prompt("Play 5 rounds! Rock, paper, or scissors?");
playerChoice.toUpperCase();
const computerChoice = computerPlay();
console.log(game());

function computerPlay() {
    const rpsRandom = ["Rock", "Paper", "Scissors"];
    return rpsRandom[Math.floor(Math.random() * rpsRandom.length)];
    //console.log(computerChoice);
}

function game() {
    var round = 0;
    var playerScore = 0;
    var computerScore = 0;
    var tieGame= 0;
    console.log(playRound());

    function playRound() {
        //Condition for draw games
        if (playerChoice == computerChoice) {
            return "It's a draw game!";
            round++;
            tieGame++;
        }
        //Condition for user wins
        if (playerChoice == "ROCK" && computerChoice == "Scissors") {
            return "You win! Rock beats scissors.";
            round++;
            playerScore++;
        }
            else if (playerChoice == "PAPER" && computerChoice == "Rock") {
                return "You win! Paper beats rock.";
                round++;
                playerScore++;
            }
            else if (playerChoice == "SCISSORS" && computerChoice == "Paper") {
                return "You win! Scissors beats rock.";
                round++;
                playerScore++;
            }
        //Condition for computer wins 
        if (playerChoice == "SCISSORS" && computerChoice == "Rock") {
            return "You lose! Rock beats scissors.";
            round++;
            computerScore++;
        }
            else if (playerChoice == "ROCK" && computerChoice == "Paper") {
                return "You lose! Paper beats rock.";
                round++;
                computerScore++;
            }
            else if (playerChoice == "PAPER" && computerChoice == "Scissors") {
                return "You lose! Scissors beat paper.";
                round++;
                computerScore++;
            }
            else {
                alert("Invalid input. Try again.");
            }
        
        return `Round ${round} completed!`;
        return "Player: " + playerScore + '\n'
                    "Computer: " + computerScore + '\n'
                    "Tie: " + tieGame;        
    }

    function alertFinalResult() {
        if () {}
    }
}