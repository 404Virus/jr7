
/** for some odd resone my code in java script wont work */
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const blockElements = document.querySelectorAll('[data-block]');
const  play_area = document.getElementById('play-area');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restart-Button');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let cicrleTurn

startGame();

restartButton.addEventListener('click', startGame)

function startGame() {
  cicrleTurn = false
  blockElements.forEach(cell => {
    block.classList.remove(X_CLASS)
    block.classList.remove(CIRCLE_CLASS)
    block.removeEventListener('click', handleClick)
    block.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}


function handleClick(e){
    const block = e.target
    const currentClass = cicrleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(block, currentClass);
    if (checkWin(currentClass)) {
      endGame(false)
    } else if (isDraw()) {
      endGame(true)
    } else {
      swapTurns()
      setPlayAreaHoverClass()
    }
  }
 
  function endGame(draw) {
    if (draw) {
      winningMessageTextElement.innerText = 'Draw!'
    } else {
      winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
  }

function isDraw() {
    return [...blockElements].every(block => {
    return block.classList.contains(X_CLASS) || block.classList.contains(CIRCLE_CLASS)
  })
   }

function placeMark(block, currentClass) {
    block.classList.add(currentClass);
}

function swapTurns() {
    cicrleTurn = !cicrleTurn;
}

function setPlayAreaHover() {
   play_area.classList.remove(CIRCLE_CLASS)
   play_area.classList.remove(X_CLASS)
    if(cicrleTurn) {
        play_area.classList.add(CIRCLE_CLASS)
    }else {
        play_area.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return blockElements[index].classList.contains(currentClass)
    })
  })
}