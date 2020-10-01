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
const divPhrase = document.getElementById('phrase');
const ul = divPhrase.firstElementChild;



function getRandom(){
  // get a random number.

const randomNumb = Math.floor(Math.random() * (phrases.length)) ;
return randomNumb;

}

function getRandomPhraseAsArray(arr){
// get a phrase from the Array and split it into characters.




for(let i = 0; i < phrases.length; i++){

 let result = getRandom(arr.indexOf([i]));
 let phraseFound = arr[result];


 return phraseFound


  }

    }

 // let resultPhrase = getRandomPhraseAsArray(phrases);

  function checkLetter(){

    const keyRow = document.getElementsByClassName('keyrow');
    const buttonText = keyRow.children;
    const li = document.createElement('li');

    let array = getRandomPhraseAsArray(phrases);
    let liListItems = li.textContent = array;
    var match = [];

    if(liListItems === buttonText.textContent) {

      match.push('buttonText');
    }

return match;




  }

buttonStartDiv.addEventListener('click', (e) => {

let title = buttonStartDiv.firstElementChild;
title.style.display = 'none';
buttonStartDiv.style.display = 'none';

});
