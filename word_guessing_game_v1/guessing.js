const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const hearts = document.getElementsByTagName('img');
const allLetters = document.getElementsByClassName('letter');


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

//This adds an event listener to the keyboard
qwerty.addEventListener('click', (event) => {
  if(event.target.tagName === "BUTTON") {
    const letterFound = checkLetter(event.target.textContent.toUpperCase());
    console.log(letterFound);
    event.target.className += ' chosen';
    event.target.disabled = true;

    if (letterFound === null) {

      missed += 1;
      //console.log(missed);
      hearts[missed - 1].src = "images/lostHeart.png";
    }
  } 
  checkWin();
})

const checkWin = () => {
  let shownLetters = document.getElementsByClassName('show').length;

    if (missed >= 5) {
      console.log("YOU LOSE")
    }


  if (shownLetters === allLetters.length) {
    overlay.className = 'win';
    overlay.style.display = 'show';
    //console.log(allLetters.length);
    //console.log('The number of letters in the phrase and the number of letters showing are the same.')
  }





  //console.log(`This is the number of letters with the class show: `);
}

//checkWin();

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
//checkLetter();