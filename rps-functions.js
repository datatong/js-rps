function computerPlay() {
    const computerRps = ["Rock", "Paper", "Scissors"];
    var computerRandom = Math.floor(Math.random() * computerRps.length);
    }

function playRound(playerRps, computerRps) {
    //Still must make playerRps input case-insensitive.
    const computerRps = computerPlay();
    const playerRps = input("Rock, paper, or scissors?");

    if (playerRps = computerRps) {
        return "It's draw game!";
    }

    if (playerRps = "Rock" && computerRps = "Scissors") {
        return "You win! Rock beats scissors.";
    }
        else if (playerRps = "Paper" && computerRps = "Rock") {
            return "You win! Paper beats rock.";
        }
        else if (playerRps = "Scissors" && computerRps = "Paper") {
            return "You win! Scissors beats rock.";
        }

    if (playerRps = "Scissors" && computerRps = "Rock") {
        return "You lose! Rock beats scissors.";
    }
        else if (playerRps = "Rock" && computerRps = "Paper") {
            return "You lose! Paper beats rock.";
        }
        else if (playerRps = "Paper" && computerRps = "Scissors") {
            return "You lose! Scissors beat paper.";
        }
        else {
            alert("Invalid input. Try again.");
        }
}