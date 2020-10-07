var score = 0;
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

function checkLetter(letter){

const listItem = ul.children;

let match = null;

for (let i = 0; i<listItem.length;i++ ){

let listItemResult = listItem[i];

if (listItemResult.className === 'letter' && listItemResult.textContent === letter){


match = listItemResult.textContent;

listItemResult.classList.add('show');

}
}
return match;
}

addToDisplay(getRandomPhraseAsArray(phrases));

qwerty.addEventListener('click', (e) => {

  const divScoreBoard = document.getElementById('scoreboard');
  const ol = divScoreBoard.firstElementChild;
  const oldLiChild = ol.firstElementChild;
  const newLi = document.createElement('li');
  var newImgLi = document.createElement('img');




if(e.target.className !== 'chosen'){

  e.target.className = 'chosen';

}
if(e.target.className === 'chosen' && checkLetter(e.target.textContent)) {


score = score + 1;



} else {

ol.removeChild(oldLiChild);
ol.appendChild(newImgLi);
newImgLi.style.height = "35px";
  newImgLi.style.width = "30px";
  newImgLi.src = "../images/lostHeart.png";



}

});

function checkWin() {

const listUlItems = ul.children;

for(let i = 0; i < listUlItems.lenght; i++){


}

}

buttonStartDiv.addEventListener('click', (e) => {

let title = buttonStartDiv.firstElementChild;
title.style.display = 'none';
buttonStartDiv.style.display = 'none';

});
