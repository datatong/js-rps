function computerPlay() {
    const rpsRandom = ["Rock", "Paper", "Scissors"];
    const computerChoice = rpsRandom[Math.floor(Math.random() * rpsRandom.length)];
    console.log(computerChoice);


    function playRound(playerChoice, computerChoice) {
        /*var playerChoice = input("Rock, paper, or scissors?");
        const computerChoice = computerPlay();*/

        if (playerChoice = computerChoice) {
            return "It's a draw game!";
        }
        //Condition for user wins
        if (playerchoice = "Rock" && computerChoice = "Scissors") {
            return "You win! Rock beats scissors.";
        }
            else if (playerChoice = "Paper" && computerChoice = "Rock") {
                return "You win! Paper beats rock.";
            }
            else if (playerChoice = "Scissors" && computerChoice = "Paper") {
                return "You win! Scissors beats rock.";
            }
        //Condition for computer wins 
        if (playerChoice = "Scissors" && computerChoice = "Rock") {
            return "You lose! Rock beats scissors.";
        }
            else if (playerChoice = "Rock" && computerChoice = "Paper") {
                return "You lose! Paper beats rock.";
            }
            else if (playerChoice = "Paper" && computerChoice = "Scissors") {
                return "You lose! Scissors beat paper.";
            }
            else {
                alert("Invalid input. Try again.");
            }
    }
}
playerChoice = input("Rock, paper, or scissors?");
const computerChoice = computerPlay();