var round = 0;
var playerScore = 0;
var computerScore = 0;
var drawGame= 0;

function computerPlay() {
    const rpsChoices = ["Rock", "Paper", "Scissors"];
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

//Plays 5 rounds of RPS
game();
game();
game();
game();
game();

function game() {
    var playerChoice = prompt("Play 5 rounds! ROCK, PAPER, or SCISSORS?");
    //playerChoice.toUpperCase();
    var computerChoice = computerPlay();

    console.log(`Computer's choice: ${computerChoice}`);

    console.log(playRound());

    console.log(`Round ${round} completed!
Player: ${playerScore}
Computer: ${computerScore}
Draw game(s): ${drawGame}`);

console.log(alertFinalResult());
    
    function playRound() {
        //Condition for draw games
        if (playerChoice == computerChoice) {
            round++;
            drawGame++;
            return "It's a draw!"
        }
        //Condition for user wins
        if (playerChoice == "ROCK" && computerChoice == "Scissors") {
            round++;
            playerScore++;
            return "You win! Rock beats scissors.";
        }
            else if (playerChoice == "PAPER" && computerChoice == "Rock") {
                round++;
                playerScore++;
                return "You win! Paper beats rock.";
            }
            else if (playerChoice == "SCISSORS" && computerChoice == "Paper") {
                round++;
                playerScore++;
                return "You win! Scissors beats rock.";
            }
        //Condition for computer wins 
        if (playerChoice == "SCISSORS" && computerChoice == "Rock") {
            round++;
            computerScore++;
            return "You lose! Rock beats scissors.";
        }
            else if (playerChoice == "ROCK" && computerChoice == "Paper") {
                round++;
                computerScore++;
                return "You lose! Paper beats rock.";
            }
            else if (playerChoice == "PAPER" && computerChoice == "Scissors") {
                round++;
                computerScore++;
                return "You lose! Scissors beat paper.";
            }
            else {
                alert("Invalid input. Try again.");
            }  
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
            else return "To the next round..."
    }
}