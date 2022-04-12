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

    if (arr[i]!== " ") {
      li.className = 'letter';
    }
  }
};


const checkLetter = (button) => {
  const allLetters = document.getElementsByClassName('letter');
  let matchedLetter = null;
  for (var i = 0; i < allLetters.length; i++) {
    if (allLetters[i].textContent === button) {
      allLetters[i].className += ' show';
      //allLetters[i].classList.add('show'); (look into this)
      matchedLetter = allLetters[i].textContent;
    }
  }
  return matchedLetter;
}


qwerty.addEventListener('click', (event) => {
  if(event.target.tagName === "BUTTON") {
    const match = checkLetter(event.target.textContent.toUpperCase());
    console.log(match);
  } 
})



getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
//checkLetter();