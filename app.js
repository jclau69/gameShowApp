var missed = 0;
var phrases = [
  'hold on to your hat',
  'birds of a feather flock together',
  'a turn up for the books',
  'the world is your oyster',
  'by hook or by crook',
  'got a lot of nerves'];

const qwerty = document.getElementById('qwerty');
const buttonStartDiv = document.getElementById('overlay');
const divPhrase = document.getElementById('phrase');
const ul = divPhrase.firstElementChild;



function getRandomPhraseAsArray(arr){
// get a phrase from the Array and split it into characters.

for(let i = 0; i < arr.length; i++){

let randomNumb = Math.floor(Math.random() * (arr.length));
let phraseFound = arr[randomNumb];

return phraseFound.split('');


  }

    }

    function addToDisplay(arr) {

for(let i = 0; i < arr.length; i++){

const li = document.createElement('li');

ul.appendChild(li);
li.textContent = arr[i];


    if (arr[i] === ' '){

        li.className = 'space';

      } else{

        li.className = 'letter';
       }
    }
}

function checkLetter(charax){

const listItem = ul.children;


let match = [];

for (let i = 0; i<listItem.length;i++ ){

let listItemResult = listItem[i].textContent;

if (listItem.className === 'letter' && listItem === charax){

match.push(listItemResult);

  console.log(match);
} else{

  return null;
}
}
}


buttonStartDiv.addEventListener('click', (e) => {

let title = buttonStartDiv.firstElementChild;
title.style.display = 'none';
buttonStartDiv.style.display = 'none';

});
