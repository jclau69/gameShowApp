var score = 0;
var phrases = [
  'hold on to your hat',
  'birds of a feather flock together',
  'a turn up for the books',
  'the world is your oyster',
  'by hook or by crook',
  'got a lot of nerves',
  'just what the doctor ordered'
];

const qwerty = document.getElementById('qwerty');
const buttonStartDiv = document.getElementById('overlay');
const divPhrase = document.getElementById('phrase');
const ul = divPhrase.firstElementChild;
const listItem = ul.children;
const tries = document.querySelectorAll('.tries');
const img = document.querySelectorAll('.tries img');



function getRandomPhraseAsArray(arr){

// get a phrase from the Array and split it into characters.

for(let i = 0; i < arr.length; i++){

let randomNumb = Math.floor(Math.random() * (arr.length));
let phraseFound = arr[randomNumb];

return phraseFound.split('');


  }

    }

    function addToDisplay(arr) {

// add tag in the ul phrase

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

//check if the split letter match the letter parameter

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

  //reload the page directly without the first page

const buttonSelected = document.getElementsByTagName('button');


for(let i=0; i<buttonSelected.length; i++){

let resultButton = buttonSelected[i];

resultButton.className = '';
resultButton.disabled = false;

}
score = 0;
ul.textContent = '';

for(let i = 0; i< tries.length;i++){

  tries[i].className = 'tries';
  img[i].src = '../images/liveHeart.png';
}
}


function checkWin() {

  //add the display in case of losing or winning

const buttonStart = buttonStartDiv.lastElementChild;
const buttonReload = document.createElement('button');


const show = document.querySelectorAll('.show');
const letter = document.querySelectorAll('.letter');

if(letter.length === show.length) {


buttonStartDiv.firstElementChild.style.display = 'block';
buttonStartDiv.firstElementChild.textContent = 'Yeeeaaah you won!';
buttonStartDiv.firstElementChild.className = 'win';
buttonStartDiv.style.display = 'flex';

buttonStartDiv.removeChild(buttonStart);
buttonStartDiv.appendChild(buttonReload);
buttonReload.textContent = 'Play Again';
buttonReload.className = '.btn__reset';


 } else {

 if(score === 5){


     buttonStartDiv.firstElementChild.style.display = 'block';
     buttonStartDiv.firstElementChild.textContent = 'Oh no! you loose!';
     buttonStartDiv.firstElementChild.className = 'lose';
     buttonStartDiv.style.display = 'flex';

     buttonStartDiv.removeChild(buttonStart);
     buttonStartDiv.appendChild(buttonReload);
     buttonReload.textContent = 'Play Again';
     buttonReload.className = '.btn__reset';

   }

}
}


qwerty.addEventListener('click', (e) => {

  //check the score, decrease hearts and check winners

  const tries = document.querySelectorAll('.tries');
  const img = document.querySelectorAll('.tries img');


if(e.target.tagName === 'BUTTON'){


if(e.target.className !== 'chosen'){

  e.target.className = 'chosen';

}

if(e.target.className === 'chosen' && checkLetter(e.target.textContent)) {

checkWin();


} else {

tries[0].className = '';
img[0].src = "../images/lostHeart.png";
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

//reload page when button pressed

if(e.target.textContent === 'Play Again'){

  reload();

}

let title = buttonStartDiv.firstElementChild;
title.style.display = 'none';
buttonStartDiv.style.display = 'none';

addToDisplay(getRandomPhraseAsArray(phrases));



});
