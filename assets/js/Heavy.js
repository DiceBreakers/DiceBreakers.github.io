/*
	Heavy Questions Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const HeavyArray = [
    "What is the most important lesson you've learned from a challenging experience in your life?",
    "If you could have a conversation with your younger self, what advice would you give?",
    "What do you believe is the purpose or meaning of life?",
    "If you had unlimited resources, how would you contribute to making the world a better place?",
    "What's a belief or perspective you've held in the past that you've since changed, and what led to that change?",
    "If you could only be remembered for one thing, what would you want it to be?",
    "What's a fear that you've overcome, and how did you manage to do it?",
    "If you had to describe yourself using three words, what would they be, and why?",
    "What's something you've always wanted to do but haven't had the courage to pursue yet?",
    "What's a book, movie, or piece of art that has profoundly impacted your life and why?",
    "How do you define happiness, and what does it take for you to feel truly happy?",
    "If you could travel back in time and witness any historical event, what would it be and why?",
    "What's the most valuable lesson you've learned from a failure or mistake you've made?",
    "What's a difficult choice you've had to make that ended up shaping your life?",
    "What does success mean to you, and do you feel you've achieved it?",
    "If you could have a conversation with a famous philosopher or thinker, who would it be and what would you discuss?",
    "What's a habit or behavior you're trying to change, and what steps are you taking to make that change?",
    "If you had only one year left to live, how would you spend that time?",
    "What's something you're grateful for, even though it might be a small or overlooked aspect of your life?",
    "What's a concept or idea that you find difficult to understand or accept, and why do you think that is?",
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
  shuffle(HeavyArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return HeavyArray[++count % HeavyArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = HeavyArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());