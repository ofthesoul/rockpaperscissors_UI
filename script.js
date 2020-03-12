
    let computerSelection = ""; //each players selection to be filled in later.
    let playerSelection = "";
    let roundCount = 0; //round starts at 0
    let playerScore = 0; //establish both players scores as 0
    let computerScore = 0;

    function computerPlay() { //function to get computers selection and output it
      let choiceArray = ["rock", "paper", "scissors"];
      let computerSelection = choiceArray[(Math.random() * choiceArray.length) | 0];
      document.getElementById('combatlog').innerHTML += '<br>Computer selected ' + computerSelection + '...';
      return computerSelection;
    }
    
    function playerPlay(selection) { //function to get input from user for their selection and output it
    if (roundCount !== 4) {
        let playerSelection = selection;
        document.getElementById('combatlog').innerHTML += '<br>You selected ' + playerSelection + '...';
        playRound(playerSelection);
        }
    else if (roundCount === 4)  {
        let playerSelection = selection;
        document.getElementById('combatlog').innerHTML += '<br>You selected ' + playerSelection + '...';
        playRound(playerSelection);
        gameOver();
        }
    }

    function tieScore() { //adding +1 to each score in a tie for fun
      playerScore++
      computerScore++
    }

    function winScore(winner){ //add +1 to the winners score
      if (winner === 'computer') {
        computerScore++;
        }   
        else {
          playerScore++;
        }
    }
    
    function playRound(playerSelection) { //comparing the selections and declaring a winner and adding corresponding points
      computerSelection = computerPlay();
      if (playerSelection === computerSelection) {   // tie 
        document.getElementById('combatlog').innerHTML += '<br>It\'s a tie!';
        tieScore(); }
          else if (playerSelection === 'rock' && computerSelection === 'paper') { //  cpu paper vs rock
            document.getElementById('combatlog').innerHTML += '<br>Computer Wins the Round!';
            winScore("computer"); }

            else if (playerSelection === 'rock' && computerSelection === 'scissors') { //  cpu scissors vs rock
            document.getElementById('combatlog').innerHTML += '<br>You Win the Round!';
            winScore("player"); }

            else if (playerSelection === 'paper' && computerSelection === 'rock') { //  cpu rock vs paper
            document.getElementById('combatlog').innerHTML += '<br>You Win the Round!';
            winScore("player"); }

            else if (playerSelection === 'paper' && computerSelection === 'scissors') { //  cpu scissors vs paper
            document.getElementById('combatlog').innerHTML += '<br>Computer Wins the Round!';
            winScore("computer"); }

            else if (playerSelection === 'scissors' && computerSelection === 'paper') { //  cpu paper vs scissors
            document.getElementById('combatlog').innerHTML += '<br>You Win the Round!';
            winScore("player"); }

            else if (playerSelection === 'scissors' && computerSelection === 'rock') { //  cpu rock vs scissors
            document.getElementById('combatlog').innerHTML += '<br>Computer Wins the Round!';
            winScore("computer"); }
            roundCount++;
            document.getElementById('roundCount').innerHTML = 'Round: ' + roundCount;
            document.getElementById('playerScore').innerHTML = "Player Score: " + playerScore;
            document.getElementById('computerScore').innerHTML = "Computer Score: " + computerScore;
      }

    function gameOver() { //compare scores and announce winner, reset variables
        if (playerScore === computerScore) {
            document.getElementById('combatlog').innerHTML += '<br>Game Over...';
            document.getElementById('combatlog').innerHTML += '<br>You\'re both winners :) Select again to play another game.';
            roundCount = 0;
            playerScore = 0;
            computerScore = 0;
        }
        else if (playerScore < computerScore) {
            document.getElementById('combatlog').innerHTML += '<br>Game Over...';
            document.getElementById('combatlog').innerHTML += '<br>Computer Won! Select again to play another game.';
            roundCount = 0;
            playerScore = 0;
            computerScore = 0
        }
        else if (playerScore > computerScore) {
            document.getElementById('combatlog').innerHTML += '<br>Game Over...';
            document.getElementById('combatlog').innerHTML += '<br>You Won! Select again to play another game.';
            roundCount = 0;
            playerScore = 0;
            computerScore = 0
        }
    }

    // buttons is a node list. It looks and acts much like an array. // i kept these notes here for my own ref.
    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {                       
        button.addEventListener('click', (e) => {     // and for each one we add a 'click' listener
        playerPlay(button.value);
     });
    });
    
//     function game() { //run playround 5 times and determine highest score after those rounds //NO LONGER USED
//       var i;
//       for (i = 0; i < 5; i++) {
//       playerSelection = playerPlay()
//       console.log("You picked", playerSelection)
//       computerSelection = computerPlay()
//       console.log("Computer picked", computerSelection)
//       console.log(playRound(playerSelection, computerSelection));
//       console.log("Your score is ", playerScore, "& Computer's score is ", computerScore);
//         }
//     if (playerScore === computerScore) {console.log("Both Win!")}
//       else if (playerScore > computerScore) {console.log("You Win!")}
//       else if (computerScore > playerScore) {console.log("Computer Wins!")}
//       return;
//   }

