/*
	Musical Conversation Starters Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const MusicArray = [
    "If you could immediately become proficient with any single instrument, what would you choose?",
    "What is your favorite song from a genere you normally don't listen to?",
    "What's your all-time favorite song, and what do you love about it?",
    "If you could have any musician or band perform a private concert for you, who would you choose?",
    "What's a song that always puts you in a good mood, no matter how you're feeling?",
    "If you could learn to play any musical instrument overnight, which one would you pick?",
    "What's the first concert you ever attended, and what memories do you have from it?",
    "Are there any lyrics from a song that deeply resonate with you or have a special meaning?",
    "How do you discover new music and artists? Do you have a favorite way to explore music?",
    "If your life had a theme song, what would it be and why?",
    "What's a genre of music you haven't explored much but would like to learn more about?",
    "What's the most memorable live music performance you've seen, and why did it stand out?",
    "If you could travel back in time to any musical era, which one would you choose and why?",
    "What's a song that never fails to make you dance, even if you're in public?",
    "Do you have a favorite music video that you find visually captivating or creatively inspiring?",
    "If you could collaborate with any artist on a song, who would you choose and what style would the song be?",
    "How has music influenced your emotions and helped you through challenging times?",
    "What's your go-to karaoke song, and do you have any memorable karaoke experiences?",
    "What's an album that you can listen to from start to finish without skipping a single track?",
    "Are there any songs or albums that bring back nostalgic memories from your past?",
    "How do you use music to set the mood for different occasions, like studying, exercising, or relaxing?",
    "If you could attend any music festival in the world, which one would it be and what artists would you want to see?",
    "Do you have a go-to song when you want to have a good cry? If so, what is it?",

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
  shuffle(MusicArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return MusicArray[++count % MusicArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = MusicArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());