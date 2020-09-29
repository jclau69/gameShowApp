var missed = 0;
var phrases = [
  'hold on to your hat',
  'birds of a feather flock together',
  'a turn up for the books','the world is your oyster',
  'by hook or by crook']

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonStartDiv = document.getElementById('overlay');

function getRandomPhraseAsArray(array){
const randomNumb = Math.floor(Math.random() * array) + 1;
return randomNumb;

}

function findAphraseInArray(array){

for(let i = 0; i < array.length; i++){

let phraseArray = array[i];

return phraseArray;
}

}

buttonStartDiv.addEventListener('click', (e) => {

let title = buttonStartDiv.firstElementChild;
title.style.display = 'none';
buttonStartDiv.style.display = 'none';

});
