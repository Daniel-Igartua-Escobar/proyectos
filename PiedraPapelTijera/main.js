const $scoreboard = document.querySelector('#scoreboard');
const $markerPlayer = document.querySelector('#markerPlayer');
const $markerBot = document.querySelector('#markerBot');
const $result = document.querySelector('#result');
const $icon = document.querySelector('#icon');

const items = [
  { name: 'piedra', win: 'tijera', url: 'images/piedra.png' },
  { name: 'papel', win: 'piedra', url: 'images/papel.png' },
  { name: 'tijera', win: 'papel', url: 'images/tijera.png' }
];

let result = 'Empate';
let icon = 'piedra';

function counter() {
  let value = 0;

  return {
    increment() { value++ },
    decrement() { value-- },
    reset() { value = 0},
    value() { return value }
  }
};

var playerCounter = counter();
var botCounter = counter();

function getRandomNumber() {
  return Math.floor(Math.random()*3)
}

function updateScoreboard() {
  $markerPlayer.textContent = playerCounter.value();
  $markerBot.textContent = botCounter.value();
  $result.setAttribute('result', result);
}

function changeIcon() {
  $icon.setAttribute('src', items[getRandomNumber()].url);
}

function checkPlay(e) {
  const loading = setInterval(changeIcon, 150);
  loading;
  const methods = {
    Pierde() { botCounter.increment(); },
    Gana() { playerCounter.increment() },
    Empate() {
      botCounter.increment();
      playerCounter.increment();
    }
  };

  const player =items.find(item => item.name === e);
  const bot = items[getRandomNumber()];

  result = player.name === bot.name ? 'Empate' : player.win === bot.name ? 'Gana' : 'Pierde';
  setTimeout(() => {
    clearInterval(loading);
    $icon.setAttribute('src', bot.url);
    methods[result]();
    updateScoreboard();
  }, 1000);
}

function restarGame() {
  playerCounter.reset();
  botCounter.reset();
  result = 'Empate';
  updateScoreboard();
}