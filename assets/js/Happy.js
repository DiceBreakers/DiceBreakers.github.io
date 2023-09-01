/*
	Happy Thoughts Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const HappyArray = [
    "Mini Playlist - Queue up one song and share a reason you like it.",
    "Affirmations - Say something you admire about another person.",
    "Share any happy thought or memory.",
    "Share a goal you'd like to accomplish at some point in your life.",
    "Self-Affirmation - Share one character trait about yourself that you're proud of.",
    "What's a toy or game from your childhood that you still remember fondly?",
    "Do you have a favorite movie or TV show from when you were a kid that you still enjoy watching?",
    "What was your go-to snack or treat when you were younger that you sometimes still enjoy now?",
    "What's a song that instantly takes you back to a specific time or place in your past?",
    "What's a book or series you loved reading as a child or teenager?",
    "Can you recall a memorable family vacation or trip from your childhood?",
    "What's a trend or fad from the past that you were really into, whether it's fashion, music, or something else?",
    "Do you have a cherished memory from a holiday celebration or family gathering when you were younger?",
    "What's a place you used to visit often that you would love to revisit for a dose of nostalgia?",
    "Is there a specific smell or scent that brings back strong memories of your past?",
    "What was your favorite school subject or activity when you were growing up?",
    "Do you have a memorable story about a pet or animal from your childhood?",
    "What's a game or activity you used to do with friends that you have fond memories of?",
    "What was the first big purchase you made with your own money as a child or teenager?",
    "Can you recall a funny or embarrassing moment from your youth that still makes you smile?",
    "What's a trend or habit from your childhood that you see coming back in popularity now?",
    "Is there a specific food or meal that reminds you of family gatherings or special occasions?",
    "Do you have a favorite childhood holiday tradition that you still carry on today?",
    "What's a piece of technology from your past that seems outdated now but was a big deal back then?",
    "What's a lesson or piece of advice from your parents or grandparents that you still hold dear?",
    "Share something that made you laugh recently.",
    "Pet a dog",

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
  shuffle(HappyArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return HappyArray[++count % HappyArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = HappyArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());