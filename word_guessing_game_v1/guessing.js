const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const hearts = document.getElementsByTagName('img');
const allLetters = document.getElementsByClassName('letter');
const title = document.querySelector('h2');
const startButton = document.getElementsByClassName('btn__reset')[0];


const phrases = [
  "DID I DO THAT",
  "HASTA LA VISTA BABY",
  "YOU HAD ME AT HELLO",
  "BETTER LATE THAN NEVER",
  "AT THE END OF THE DAY"
];

startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

const getRandomPhraseAsArray = (arr) => {
  let randomSplitArray = arr[Math.floor(Math.random() * arr.length)].split('');
  return randomSplitArray;
};

const phraseArray = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    const letter = arr[i];
    li.textContent = letter;
    phrase.appendChild(li);

    if (arr[i] !== " ") {
      li.className = 'letter';
    }
  }
};

const checkLetter = (button) => {
  let matchedLetter = null;
  for (let i = 0; i < allLetters.length; i++) {
    if (allLetters[i].textContent === button) {
      allLetters[i].className += ' show';
      //allLetters[i].classList.add('show'); (look into this)
      matchedLetter = allLetters[i].textContent;
    }
  }
  return matchedLetter;
}

qwerty.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
    const letterFound = checkLetter(event.target.textContent.toUpperCase());
    console.log(letterFound);
    event.target.className += ' chosen';
    event.target.disabled = true;

    if (letterFound === null) {

      missed += 1;
      hearts[missed - 1].src = "images/lostHeart.png";
    }
  }
  checkWin();
})

const checkWin = () => {
  let shownLetters = document.getElementsByClassName('show').length;

  if (missed >= 5) {
    overlay.className = 'lose';
    overlay.style.display = 'flex';
    title.textContent = 'SORRY. YOU DID NOT WIN THIS TIME.';
    resetGame();
  }

  if (shownLetters === allLetters.length) {
    overlay.className = 'win';
    title.textContent = 'YOU WIN!!!';
    overlay.style.display = 'flex';
    resetGame();
  }
}


const resetGame = () => {
  startButton.textContent = 'Play Again';
  missed = 0;

  for (let i = 0; i < hearts.length; i++) {
    hearts[i].src = "images/liveHeart.png";
  }



  // const chosenKeys = document.getElementsByClassName(' chosen');
  // for (let i = 0; i < chosenKeys.length; i++) {
  //   chosenKeys[i].classList.remove('chosen');
  // }


  //console.log(chosenKeys);

  for (let i = 0; i < allLetters.length; i++) {
    allLetters[i].classList.remove('show');
  }

  //addPhraseToDisplay(phraseArray);
}

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);