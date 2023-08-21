/*
	Journal Topic Generator Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const JournalArray = [
    "What are three things you're grateful for today?",
    "How did you feel when you woke up this morning?",
    "What's been on your mind lately that you want to explore further?",
    "Describe a moment from today that made you smile.",
    "What's a goal you're currently working towards, and what steps are you taking to achieve it?",
    "Write about a challenge you've faced recently and how you overcame it.",
    "Reflect on a mistake you've made and the lessons you've learned from it.",
    "If you could give advice to your future self, what would it be?",
    "What's a quote or passage that resonates with you right now, and why?",
    "Describe a place you find calming or inspiring and why it has that effect on you.",
    "Write a letter to your younger self, offering words of encouragement and support.",
    "How do you envision your ideal day from start to finish?",
    "What's a habit you'd like to develop or break, and why is it important to you?",
    "Explore a childhood memory that still holds significance for you.",
    "What's a creative project or hobby that brings you joy, and how can you make more time for it?",
    "Reflect on a recent interaction with someone that left an impact on you.",
    "What's a fear or limiting belief that you want to overcome?",
    "Write about a book, movie, or song that has influenced your perspective.",
    "How do you want to grow or evolve as a person in the next year?",
    "Describe a dream or aspiration that you're hesitant to pursue, and explore why that might be.",

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
  shuffle(JournalArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return JournalArray[++count % JournalArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = JournalArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());