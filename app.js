var missed = 0;
var phrases = [
  'hold on to your hat',
  'birds of a feather flock together',
  'a turn up for the books',
  'the world is your oyster',
  'by hook or by crook',
  'got a lot of nerves']

const qwerty = document.getElementById('qwerty');

const buttonStartDiv = document.getElementById('overlay');


function getRandom(){
  // get a random number.

const randomNumb = Math.floor(Math.random() * (phrases.length)) ;
return randomNumb;

}

function getRandomPhraseAsArray(){
// get a phrase from the Array and split it into characters.

for(let i = 0; i < phrases.length; i++){

 let result = getRandom(phrases.indexOf([i]));
 let phraseFound = phrases[result];
 let phraseSplit = phraseFound.split("");


 return phraseSplit;

}
  }

  function addPhraseToDisplay(){
    // do stuff any arr that is passed in, and add to `#phrase ul.
    const phraseDiv = document.getElementById('phrase');
    let ul = phraseDiv.firstElementChild;
    let li = document.createElement("li");

    for(let i = 0; i < getRandomPhraseAsArray().length; i++){

      return getRandomPhraseAsArray();

    }

    li.appendChild(characterSplit);
    ul.appendChild(li);

}

buttonStartDiv.addEventListener('click', (e) => {

let title = buttonStartDiv.firstElementChild;
title.style.display = 'none';
buttonStartDiv.style.display = 'none';

});
