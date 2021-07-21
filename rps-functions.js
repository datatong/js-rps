var round = 0;
var playerScore = 0;
var computerScore = 0;
var drawGame= 0;

function computerPlay() {
    const rpsChoices = ["Rock", "Paper", "Scissors"];
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

//Plays 5 rounds of RPS. Any invalid input will not return the final results.
game();
game();
game();
game();
game();

function game() {
    var playerChoice = prompt("Play 5 rounds! Rock, Paper, or Scissors?");
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();    
    var computerChoice = computerPlay();

    //checks computer's random choice
    console.log(`Computer's choice: ${computerChoice}`);
    //checks round outcome and score
    console.log(playRound());
    //checks round completed and score
    console.log(`Round ${round} completed! \nPlayer: ${playerScore} \nComputer: ${computerScore} \nDraw game(s): ${drawGame}`);
    
    function playRound() {
        //Condition for draw games
        if (playerChoice == computerChoice) {
            round++;
            drawGame++;
            return "It's a draw!"
        }
        //Condition for user wins
        if (playerChoice == "Rock" && computerChoice == "Scissors") {
            round++;
            playerScore++;
            return "You win! Rock beats scissors.";
        }
            else if (playerChoice == "Paper" && computerChoice == "Rock") {
                round++;
                playerScore++;
                return "You win! Paper beats rock.";
            }
            else if (playerChoice == "Scissors" && computerChoice == "Paper") {
                round++;
                playerScore++;
                return "You win! Scissors beats rock.";
            }
        //Condition for computer wins 
        if (playerChoice == "Scissors" && computerChoice == "Rock") {
            round++;
            computerScore++;
            return "You lose! Rock beats scissors.";
        }
            else if (playerChoice == "Rock" && computerChoice == "Paper") {
                round++;
                computerScore++;
                return "You lose! Paper beats rock.";
            }
            else if (playerChoice == "Paper" && computerChoice == "Scissors") {
                round++;
                computerScore++;
                return "You lose! Scissors beat paper.";
            }
            else {
                alert("Invalid input. Try again.");
                return "Player choice invalid. Try again!";
            }  
    }

    console.log(alertFinalResult());
    //Currently only alerts when player wins.
    function alertFinalResult() {
        if (round == 5 && playerScore > computerScore) {
            alert("You won the game!");
            return "You won the game!";
        }
        if (round == 5 && playerscore < computerScore) {
            alert("You lost the game.");
            return "You lost the game!";
        }
        if (round == 5 && playerscore == computerScore) {
            alert("The game is a draw.");
            return "The game is a draw.";
        }
        if (round < 5) {
            return "To the next round...";
        }
    }
}