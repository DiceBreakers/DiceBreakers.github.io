/*
	A Silly Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const SillyArray = [
    "If you could have any animal as a pet, mythical or real, what would it be and why?",
    "Would you rather have spaghetti for hair or meatballs for eyes?",
    "If you could only eat one food for the rest of your life, what would it be?",
    "What's the weirdest dream you've ever had?",
    "If you were a superhero, what would your quirky superpower be?",
    "Would you rather have the ability to talk to squirrels or toasters?",
    "What's your favorite silly dance move that you do when nobody's watching?",
    "If you could travel anywhere in a time-traveling hot tub, where and when would you go?",
    "If you could swap lives with an inanimate object for a day, what would it be?",
    "Would you rather have a pet unicorn that farts rainbows or a pet dragon that sneezes glitter?",
    "If you could have any color for hair, other than a natural one, what would it be?",
    "What's a super strange talent or skill you have that not many people know about?",
    "If you could create a new holiday, what would it celebrate and how would people celebrate it?",
    "Would you rather be able to speak every language fluently or understand what animals are saying?",
    "What's the silliest joke you know that always makes you giggle?",
    "If you could live inside a movie or video game for a day, which one would it be?",
    "Would you rather have the ability to fly like a balloon or swim like a fish in the air?",
    "If you could be a character in a cartoon, which one would you choose and why?",
    "What's the craziest outfit you've ever worn or would like to wear?",
    "If you could invent a new holiday tradition, what would it involve?",

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
  shuffle(SillyArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return SillyArray[++count % SillyArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = SillyArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());