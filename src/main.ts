// grabbing the value of options
const options = document.querySelector('.options')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
// images
const playerChoices = document.querySelector('.actions__player') as HTMLElement 
const aiChoices = document.querySelector('.actions__robot') as HTMLElement
const winner = document.querySelector('.winner')
// value
let playerValue : string;
let robotValue : string;

if(options) {
    options.addEventListener('click', (e) => {
        // registering click target
        const target = e.target as Element;
        if(target.id === 'rock') {
            rock?.classList.add('options__selected')
            playerChoices.style.backgroundImage = "url('./asset/rock.png')"
            playerValue = 'rock'
            paper?.classList.remove('options__selected')
            scissors?.classList.remove('options__selected')
        } else if (target.id === 'paper') {
            paper?.classList.add('options__selected')
            playerChoices.style.backgroundImage = "url('./asset/paper.png')"
            playerValue = 'paper'
            rock?.classList.remove('options__selected')
            scissors?.classList.remove('options__selected')
        } else if(target.id === 'scissors') {
            scissors?.classList.add('options__selected')
            playerChoices.style.backgroundImage = "url('./asset/scissors.png')"
            playerValue = 'scissor'
            rock?.classList.remove('options__selected')
            paper?.classList.remove('options__selected')
        }
        getAiChoices()
        determineWinner(playerValue,robotValue)
    })
}

// ai choices
function getAiChoices() {
    const optionsArray : string[] = ['rock','paper', 'scissors']
    const gettingAiOptions = optionsArray[Math.floor(Math.random() * optionsArray.length)]

    if(gettingAiOptions === 'rock') {
        robotValue = 'rock'
        aiChoices.style.backgroundImage = "url('./asset/rock.png')"
    } else if (gettingAiOptions === 'paper') {
        robotValue = 'paper'
        aiChoices.style.backgroundImage = "url('./asset/paper.png')"
    }  else if (gettingAiOptions === 'scissors') {
        robotValue = 'scissor'
        aiChoices.style.backgroundImage = "url('./asset/scissors.png')"
    }
}

// determine Winner
function determineWinner(playerVal : string, robotVal:string) {
    // draw
    if(playerVal === 'rock' && robotVal === 'rock' ) {
        if(winner) {
            winner.innerHTML = 'draw!'
        }
    } else if(playerVal === 'paper' && robotVal === 'paper' ) {
        if(winner) {
            winner.innerHTML = 'draw!'
        }
    } else if(playerVal === 'scissor' && robotVal === 'scissor' ) {
        if(winner) {
            winner.innerHTML = 'draw!'
        }
    }

    // winner
    if(playerVal === 'paper' && robotVal === 'rock') {
        if(winner) {
            winner.innerHTML = 'you win!'
        }
    } else if (playerVal === 'paper' && robotVal === 'scissor') {
        if(winner) {
            winner.innerHTML = 'you lose :(('
        }
    } else if (playerVal === 'rock' && robotVal === 'paper') {
        if(winner) {
            winner.innerHTML = 'you lose :(('
        }
    } else if (playerVal === 'rock' && robotVal === 'scissor') {
        if(winner) {
            winner.innerHTML = 'you win!'
        }
    } else if (playerVal === 'scissor' && robotVal === 'paper') {
        if(winner) {
            winner.innerHTML = 'you win!'
        }
    } else if (playerVal === 'scissor' && robotVal === 'rock') {
        if(winner) {
            winner.innerHTML = 'you lose :(('
        }
    }
}   