const playerChoice = prompt("Play 5 rounds! Rock, paper, or scissors?");
playerChoice.toUpperCase();
const computerChoice = computerPlay();

var round = 0;
var playerScore = 0;
var computerScore = 0;
var drawGame= 0;

//Plays 5 rounds of RPS
game();
game();
game();
game();
game();

function computerPlay() {
    const rpsRandom = ["Rock", "Paper", "Scissors"];
    return rpsRandom[Math.floor(Math.random() * rpsRandom.length)];
    /*Tests computer random choice
    console.log(computerChoice);
    */
}

function game() {
    playRound();
    
    function playRound() {
        //Condition for draw games
        if (playerChoice == computerChoice) {
            return "It's a draw!";
            round++;
            drawGame++;
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
                    "Draw game(s): " + drawGame;
        //Probably could add a repeat function here instead of calling 5 rounds?        
    }

    function alertFinalResult() {
        if (round == 5 && playerScore > computerScore) {
            alert("You won the game!")
        }
            else if (round == 5 && playerscore < computerScore) {
                alert("You lost the game.")
            }
            else if (round == 5 && playerscore == computerScore) {
                alert("The game is a draw.")
            }
    }
    alertFinalResult()
}