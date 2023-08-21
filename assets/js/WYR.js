/*
	Would You Rather Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const WYRArray = [
    "Would you rather have the ability to fly or be invisible?",
    "Would you rather have a photographic memory or the ability to read minds?",
    "Would you rather be able to speak all languages fluently or play any musical instrument?",
    "Would you rather live in a world with no technology or a world with no nature?",
    "Would you rather have the ability to control fire or water?",
    "Would you rather have the ability to speak to animals or to understand and speak all human languages?",
    "Would you rather be incredibly wealthy but work a job you hate, or have a fulfilling job but struggle financially?",
    "Would you rather be able to control animals with your mind or control electronics with your mind?",
    "Would you rather live without the internet or without air conditioning/heating?",
    "Would you rather be the best player on a losing team or the worst player on a winning team?",
    "Would you rather always have to speak your mind or never be able to speak again?",
    "Would you rather live in a fantasy world with magic and mythical creatures or in a futuristic sci-fi world?",

]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  shuffle(WYRArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return WYRArray[++count % WYRArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = WYRArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());