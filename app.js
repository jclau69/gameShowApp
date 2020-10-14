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
const listItem = ul.children;



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


let match = null;

for (let i = 0; i<listItem.length;i++ ){

let listItemResult = listItem[i];

if (listItemResult.className === 'letter' && listItemResult.textContent === letter){


match = listItemResult.textContent;

listItemResult.classList.add('show');
listItemResult.classList.add('transition');

}
}
return match;
}


function reload() {

const buttonSelected = document.getElementsByTagName('button');


for(let i=0; i<buttonSelected.length; i++){

let resultButton = buttonSelected[i];

resultButton.className = '';
resultButton.disabled = false;

}
score = 0;
ul.textContent = '';
}



function checkWin() {

const buttonStart = buttonStartDiv.lastElementChild;
const buttonReload = document.createElement('button');
  buttonReload.textContent = 'Play Again';
  buttonReload.className = '.btn__reset';

const show = document.querySelectorAll('.show');
const letter = document.querySelectorAll('.letter');

if(letter.length === show.length) {


   buttonStartDiv.firstElementChild.style.display = 'block';
   buttonStartDiv.firstElementChild.textContent = 'Yeeeaaah you won!';
   buttonStartDiv.firstElementChild.className = 'win';
   buttonStartDiv.style.display = 'flex';

buttonStartDiv.removeChild(buttonStart);
buttonStartDiv.appendChild(buttonReload);


 } else {

 if(score === 5){


     buttonStartDiv.firstElementChild.style.display = 'block';
     buttonStartDiv.firstElementChild.textContent = 'Oh no! you loose!';
     buttonStartDiv.firstElementChild.className = 'lose';
     buttonStartDiv.style.display = 'flex';

     buttonStartDiv.removeChild(buttonStart);
     buttonStartDiv.appendChild(buttonReload);

   }

}
}


qwerty.addEventListener('click', (e) => {

s
  const img = document.querySelectorAll('.tries img');


if(e.target.tagName === 'BUTTON'){


if(e.target.className !== 'chosen'){

  e.target.className = 'chosen';

}

if(e.target.className === 'chosen' && checkLetter(e.target.textContent)) {

checkWin();


} else {


img[0].src = "images/lostHeart.png";
score = score + 1;


}

if (score === 5) {

  checkWin();

}
if(e.target.className === 'chosen'){

e.target.disabled = true;

}
}
});




buttonStartDiv.addEventListener('click', (e) => {


if(e.target.textContent === 'Play Again'){

  reload();

}

let title = buttonStartDiv.firstElementChild;
title.style.display = 'none';
buttonStartDiv.style.display = 'none';

addToDisplay(getRandomPhraseAsArray(phrases));



});
