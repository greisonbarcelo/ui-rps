let container = document.querySelector(".container"); 
let play = document.querySelector(".play"); 
let intro = document.querySelector(".intro"); 
let scoreBoard = document.querySelector(".scoreBoard");
let pScore = document.querySelector(".pScore");
let cScore = document.querySelector(".cScore");
let playAgain = document.querySelector(".playAgain");
let oneMore = document.querySelector(".oneMore");

play.addEventListener("click", () => {
    intro.classList.add("hideElement");
    container.classList.remove("hideElement");
    scoreBoard.classList.remove("hideElement");
});

oneMore.addEventListener("click", () => {
    playAgain.classList.add("hideElement");
    scoreBoard.classList.remove("hideElement");
    container.classList.remove("hideElement");
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
    paraRound.textContent = '';
    paraGame.textContent = '';
});


function getComputeChoice() {
    let choices = ["rock", "paper", "scissor"];
    return  choices[Math.floor(Math.random()*choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')) {
        playerScore += 1;
        paraRound.textContent = `You won! ${humanChoice} beats computer\'s ${computerChoice}.`;
        score.appendChild(paraRound);
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${computerScore}`;
        return 
    } else if ((computerChoice == 'rock' && humanChoice == 'scissor') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissor' && humanChoice == 'paper')) {
         computerScore += 1;
         paraRound.textContent = `You lost! ${computerChoice} beats your ${humanChoice}.`;
         score.appendChild(paraRound);
         pScore.textContent = `Player: ${playerScore}`;
         cScore.textContent = `Computer: ${computerScore}`;
        return 
    } else if (humanChoice == computerChoice) {
         paraRound.textContent = `It's a tie! You both picked ${humanChoice}.`;
         score.appendChild(paraRound);
         pScore.textContent = `Player: ${playerScore}`;
         cScore.textContent = `Computer: ${computerScore}`;
        return 
    } else {
        paraRound.textContent = `Your input \'${humanChoice}\' was invalid.`;
        score.appendChild(paraRound);
        return 
    }
}

let playerScore = 0;
let computerScore = 0;
pScore.textContent = `Player: ${playerScore}`;
cScore.textContent = `Computer: ${computerScore}`;

function declareWiner(playerScore,computerScore) {
    if(playerScore == 5) {
        scoreBoard.classList.add("hideElement");
        container.classList.add("hideElement");
        paraGame.textContent = `Player wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`;
        score.appendChild(paraGame);
        playAgain.classList.remove("hideElement");
        return 
    } else if (computerScore == 5) {
        scoreBoard.classList.add("hideElement");
        container.classList.add("hideElement");
        paraGame.textContent = `Computer wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`;
        score.appendChild(paraGame);
        playAgain.classList.remove("hideElement");
        return
    } 
    return 
}


// Define the getHumanChoice function Determine which button was clicked
function getHumanChoice(button) {
    if (button.classList.contains('rock')) {
        return 'rock';
    } else if (button.classList.contains('paper')) {
        return 'paper';
    } else if (button.classList.contains('scissor')) {
        return 'scissor';
    }
}

// Select all buttons
const buttons = document.querySelectorAll('.container>button');
// Update the event listener to use the getHumanChoice function
buttons.forEach(button => {
    button.addEventListener('click', () => {
    humanSelection = getHumanChoice(button);
    let computerSelection = getComputeChoice();
    console.log(`Computer: ${computerSelection} User: ${humanSelection}`);
       
    playRound(humanSelection, computerSelection);
    declareWiner(playerScore, computerScore);


    });
});


const score = document.querySelector(".score");
let paraRound = document.createElement("p");
let paraGame = document.createElement("p");

// function playGame() {
//     for(let i = 1; i <= 5; i++) {
        
//         let computerSelection = getComputeChoice();
//         console.log(`Computer: ${computerSelection} User: ${humanSelection}`);

//         playRound(humanSelection, computerSelection);
//     }
//     declareWiner(playerScore, computerScore);
    
// }





