const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const overlay = document.getElementById('overlay');

const phrases = [
  "DID I DO THAT",
  "HASTA LA VISTA BABY",
  "YOU HAD ME AT HELLO",
  "BETTER LATE THAN NEVER",
  "AT THE END OF THE DAY"
];

const startButton = document.getElementsByClassName('btn__reset')[0];
startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});