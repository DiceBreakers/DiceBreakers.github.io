/*
	Active Prompts Game by Dice Breakers.
	Not Licensed for any other use.
*/



"use strict";

const log = (v) => console.log(v);

const ActiveArray = [

    "5 Minute Yoga Flow.",
    "Go for a walk",
    "Drink some water.",
    "Do 5 pushups.",
    "Do a somersault.",
    "Pet a dog.",
    "Hug a friend.",
    "High fives all around.",
    "Do 10 Jumping Jacks.",
    "Do 5 bodyweight squats.",
    "Hold a plank for as long as you can.",
    "Do 10 arm circles, forward and backward.",
    "Touch your toes, or get as close as you can.",
    "Dance to one of your favorite songs!",
    "Read a book!",
    "Cook or bake something you've been craving.",
    "Clean one room.",
    "Meditate for a little bit.",
    "Arts and Crafts - Create something!",
    "Listen to a forgotten playlist and see what memories come back.",

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
  shuffle(ActiveArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return ActiveArray[++count % ActiveArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = ActiveArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());