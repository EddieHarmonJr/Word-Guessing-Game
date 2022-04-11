const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const overlay = document.getElementById('overlay');

const startButton = document.getElementsByClassName('btn__reset')[0];
startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});