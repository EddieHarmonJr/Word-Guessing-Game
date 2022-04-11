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

//const test = ["i","t","o","l","d","y","o","u","s","o"];

const startButton = document.getElementsByClassName('btn__reset')[0];
startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});


const getRandomPhraseAsArray = (arr) => {
  let randomSplitArray = arr[Math.floor(Math.random() * arr.length)].split('');
  return randomSplitArray;
};

const phraseArray = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    const letter = arr[i];
    li.textContent = letter;
    phrase.appendChild(li);

    if (arr[i]!== "") {
      li.className = 'letter';
    }
  }

};


getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);