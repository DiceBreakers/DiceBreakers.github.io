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
    "Hold one plank for as long as you can.",
    "Do 10 arm circles, forward and backward.",
    "Touch your toes, or get as close as you can.",
    "Put on a song and dance!",
    "Read a book!",
    "Cook or bake something you've been craving.",
    "Clean one room.",
    "Meditate for a little bit.",
    "Arts and Crafts - Create something!",
    "Listen to a forgotten playlist and see what memories come back.",

]

var randomQ = ActiveArray[(Math.floor(Math.random() * (ActiveArray.length)))];

function shuffle(ActiveArray) {
    let currentIndex = ActiveArray.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [ActiveArray[currentIndex], ActiveArray[randomIndex]] = [
        ActiveArray[randomIndex], ActiveArray[currentIndex]];
    }
  
    return ActiveArray;
  }
  
  // Used like so
 // var arr = [2, 11, 37, 42];
  shuffle(ActiveArray);
  console.log(ActiveArray);

  document.getElementById('pContainer').innerHTML = randomQ;