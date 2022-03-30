const $board = document.querySelector('#board');
const $squares = document.querySelectorAll('.square');
const $modal = document.querySelector('.modal');
const COMBOS = ['012', '345', '678', '036', '147', '258', '048', '246'];
const CONFIG = {
  win: { text: '¡HAS GANADO!', color: 'green' },
  lose: { text: '¡HAS PERDIDO!', color: 'red' },
  tie: { text: '¡EMPATE!', color: 'gray' }
};
let freeSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let playerPositions = '';
let botPositions = '';
let isEndgame = false;
let difficulty = 'hard';

function move(e, position) {
  e.innerHTML = 'X';
  playerPositions += position + ' ';
  removeSquarePosition(position);
  checkGame(playerPositions);
  if (!isEndgame) {
    bot();
  }
}

function bot() {
  let position;
  setTimeout(() => {
    switch (difficulty) {
      case 'easy':
        position = getRandomPosition();
        break;
      case 'normal':
        position = 'normal'
        break;
      case 'hard':
        position = getLogicalPosition();
        break;
    }
  
    botPositions += position + ' ';
    removeSquarePosition(position);
    checkGame(botPositions);
    $squares[position].innerHTML = 'O'; 
  }, 500);
}

function getRandomPosition() {
  return freeSquares[Math.floor(Math.random() * freeSquares.length)];
}

function getLogicalPosition() {
  let position = '';
    COMBOS.forEach(c => {
      const regExp = new RegExp(`(${c[0]}|${c[1]}|${c[2]}).*(${c[1]}|${c[2]}|${c[0]})`)
      const playerCombo = regExp.test(playerPositions);
      const botCombo = regExp.test(botPositions);
      if (botCombo) {
        freeSquares.forEach(n => {
          if (c.indexOf(n) !== -1) {
            position = n;
          }
        });
      } else if (playerCombo) {
        freeSquares.forEach(n => {
          if (c.indexOf(n) !== -1) {
            position = n;
          }
        });
      }

      if(position) return true;
    })

  return position || getRandomPosition();;
}

function checkPossiblecombo() {
  COMBOS.map(c => {
    const regExp = new RegExp(`(${c[0]}|${c[1]}|${c[2]}).*(${c[1]}|${c[2]}|${c[0]})`)
    const combo = regExp.test(playerPositions);
    if (combo) {
      freeSquares.forEach(n => {
        if (c.indexOf(n) !== -1) {
          position = n;
        }
      });
    }
  })
}

function removeSquarePosition(position) {
  const i = freeSquares.indexOf(position);
  i !== -1 && freeSquares.splice(i, 1);
} 

function checkGame(player) {
  const combo = COMBOS.map(c => {
    const regExp = new RegExp(`(${c[0]}|${c[1]}|${c[2]}).*(${c[1]}|${c[2]}|${c[0]}).*(${c[2]}|${c[0]}|${c[1]})`)
    return regExp.test(player);
  }).includes(true);
  const tie = !freeSquares.length;

  if (combo || tie) {
    let result
    if (combo) {
      result = player === playerPositions ? 'win' : 'lose';
    } else {
      result = 'tie';
    }
    $modal.innerHTML = CONFIG[result].text;
    $modal.style.color = CONFIG[result].color;
    $board.classList.add('disabled');
    $modal.classList.remove('hide');
    isEndgame = true;
  }
}

function reset() {
  freeSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  playerPositions = '';
  botPositions = '';
  $squares.forEach(e => e.innerHTML = '');
  $board.classList.remove('disabled');
  $modal.classList.add('hide');
  isEndgame = false;
}