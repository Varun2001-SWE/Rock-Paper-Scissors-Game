// ROCK PAPER SCISSORS GAME

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".result");
const score_counter = document.querySelector(".score");
const game_result = document.querySelector(".game_result");
const playAgain = document.querySelector(".again");
const computer_choice = document.querySelector(".computer_choice");
const cpu = document.querySelector(".cpu");

function getRandomvalues(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice(){
    if(getRandomvalues(0,3) === 0){
        return 'rock'
    }else if(getRandomvalues(0,3) === 1){
        return 'paper'
    }else {
        return 'scissors'
    }
}

console.log(getComputerChoice());

let humanChoice = '';

let rock_btn = rock.addEventListener("click", () => {
        humanChoice = 'rock';
    });

let paper_btn = paper.addEventListener("click", () => {
        humanChoice = 'paper';
    });

let scissors_btn = scissors.addEventListener("click", () => {
        humanChoice = 'scissors';
    });



let computerScore = 0, humanScore = 0;



function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        return `It's a tie`;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        return 'You win! Rock beats Scissors';
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        return 'You win! Paper beats Rock';
    } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore++;
        return 'You win! Scissors beats Paper';
    } else {
        computerScore++;
        return `You lost! ${computerChoice} beat ${humanChoice} . Your score is ${humanScore}, Computer score is ${computerScore}`;
    } 
}


let computerSelection;

function cpuChoice(){
    switch(computerSelection){
        case 'rock':
            cpu.textContent = "✊";
            console.log('asdas')
            break
        case 'paper':
            cpu.textContent = '✋';
            break
        case 'scissors':
            cpu.textContent = '✂️';
            break
    }
}
function playGame() {
        if(humanScore === 5 || computerScore === 5) {
            game_result.textContent = `Game Over!!`
            return;
        }
        let humanSelection = humanChoice;
        let computerSelection = getComputerChoice();
        console.log(`the computer chose ${computerSelection}`);
        cpu.textContent = ` ${computerSelection}`;
        cpuChoice(computerSelection);
        const result = playRound(humanSelection, computerSelection);
        results.textContent = "Result : "+ result;
        score_counter.textContent =`Your score is ${humanScore} and Computerscore is ${computerScore} ...    `;
        if(humanScore != 5 && computerScore != 5){
            return game_result.textContent = "Keep playing. First one to score 5 points is the winner";
        } 
}


rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);
playAgain.addEventListener("click", ()=> {
    location.reload();
});





/////////////////////////////////////


// function getHumanChoice(){
//     if (rock === 'rock' || paper === 'paper' || scissors === 'scissors'){
//         return question;
//     }
//         else {
//         alert('Please enter a valid choice');
//         return getHumanChoice();
//     }
// }


// function playRound(humanChoice, computerChoice){
//     if (humanChoice == computerChoice) {
//         return `It's a tie`;
//     } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
//         humanScore++;
//         return 'You win! Rock beats Scissors' + ` Your score is ${humanScore}`;
//     } else if (humanChoice == 'paper' && computerChoice == 'rock') {
//         humanScore++;
//         return 'You win! Paper beats Rock' + ` Your score is ${humanScore}`;
//     } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
//         humanScore++;
//         return 'You win! Scissors beats Paper' + ` Your score is ${humanScore}`;
//     } else {
//         computerScore++;
//         return `You lost! ${computerChoice} beat ${humanChoice} . Your score is ${humanScore}, Computer score is ${computerScore}`;
//     }
// }


// function playGame() {
//     for(i=0; i < 5; i++){
//         alert(`Round ${i}`);
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         const result = playRound(humanSelection, computerSelection);
//         alert(result);
//     }
//     alert(`your score is ${humanScore} and Computerscore is ${computerScore} ...    `)
// }


// playGame()

// console.log(playRound(humanSelection, computerSelection));


// console.log(getHumanChoice());
// console.log(getComputerChoice());
// console.log(getRandomvalues(0,3));