//VARIABLES
let playerScore, compScore, gamePlaying;

pScore = 0;
cScore = 0;
newGameBtn = document.querySelector('.btn--new');
gamePlaying = true;
const options = document.querySelectorAll('.options button')
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const hands = document.querySelectorAll('.hands img');
var winningScore = 3;


function playMatch (){
    
    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        });
    })

    //computer options
    const computerOptions = ['rock','paper','scissors'];
    options.forEach(option => {
        option.addEventListener("click", function(){
            //computer random choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            setTimeout(() => {
                //put compareHands here
            compareHands(this.textContent, computerChoice)
            //update images
            playerHand.src = `./img/${this.textContent}.png`
            computerHand.src = `./img/${computerChoice}.png`
            }, 2000)

            // animation
            playerHand.style.animation = "shakePlayer 2s ease"
            computerHand.style.animation = "shakeComputer 2s ease"
            
        })  
    })
    }


//compare hands

function compareHands (playerChoice, computerChoice){
    if(gamePlaying){
    //update text
    let winner = document.querySelector('.winner');
    //checking for a tie
    if (playerChoice === computerChoice){
        winner.textContent = "It's a TIE!";
        return;
    }

    //checking for rock

    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            winner.textContent = "Player WINS!"
            pScore++
            updateScore();
            return;
        } else {
            winner.textContent = "Computer WINS!"
            cScore++
            updateScore();
            return;
        }
    }
    //check for paper
    if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = "Computer WINS!"
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Player WINS!"
            pScore++;
            updateScore();
            return;
        }
    }

    //check for scissors
    if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            winner.textContent = "Computer WINS!"
            cScore++
            updateScore();
            return;
        } else {
            winner.textContent = "Player WINS!"
            pScore++
            updateScore();
            return;
        }
    }
}
}
//UPDATE SCORES
function updateScore (){
    const playerScore = document.querySelector('.player-score p')
    const computerScore = document.querySelector('.computer-score p')
    playerScore.textContent = pScore;
    computerScore.textContent =cScore;

    if (cScore === winningScore){
        document.querySelector('.intro h1').textContent = 'Computer Wins This Match!'
        gamePlaying = false;
        document.querySelector('.computer-hand').style.visibility = 'hidden'
        document.querySelector('.player-hand').style.visibility = 'hidden'
        return;
    } else if (pScore === winningScore ){
        document.querySelector('.intro h1').textContent = 'Player Wins This Match!'
        gamePlaying = false;
        document.querySelector('.computer-hand').style.visibility = 'hidden'
        document.querySelector('.player-hand').style.visibility = 'hidden'
        return;
    }
}


if (gamePlaying === true){
    playMatch();
} 


//NEW GAME FUNCTION
function newGame (){
    gamePlaying = true;
    pScore = 0;
    cScore = 0;
    document.querySelector('.intro h1').textContent = 'Rock, Paper & Scissors'
    document.querySelector('.winner').textContent = 'Choose an Option'
    playerHand.src = './img/rock.png'
    computerHand.src = './img/rock.png'
    document.querySelector('.computer-hand').style.visibility = 'visible'
    document.querySelector('.player-hand').style.visibility = 'visible'
    updateScore();
}

newGameBtn.addEventListener('click',newGame);

