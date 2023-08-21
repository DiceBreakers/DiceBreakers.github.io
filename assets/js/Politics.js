/*
	Politics Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const PoliticsArray = [
    "What does being an active citizen mean to you, and how do you engage in your community?",
    "What political issue do you feel most passionately about, and why?",
    "How do you stay informed about current events and political news?",
    "What values or principles guide your political beliefs and opinions?",
    "How do you think the government can work to address issues like climate change or inequality?",
    "Do you think it's important for young people to be involved in politics, and if so, how can they make a difference?",
    "How do you handle disagreements with someone who has opposing political views?",
    "What do you think is the role of social media in shaping political discussions and opinions?",
    "How can people from different political backgrounds find common ground and work together?",
    "What's a political decision or event from history that you believe has had a lasting impact on society?",
    "How do you feel about voting and participating in elections, and what motivates you to do so?",
    "Do you believe in term limits for politicians? Why or why not?",
    "How do you think countries should handle immigration and border policies?",
    "What's your opinion on the role of government in providing social services like healthcare and education?",
    "How can we encourage more diversity and representation in political leadership?",
    "Do you think there's a balance between individual rights and government authority? If so, where should that balance be?",
    "How do you think technology and the internet have influenced political discourse and activism?",
    "What do you believe is the biggest challenge facing our society today, and how can it be addressed?",
    "How can citizens hold their elected officials accountable for their actions and decisions?",
    "What's a political change you'd like to see in the world in the next decade?",

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
  shuffle(PoliticsArray);

var orderRoll = (function() {
  var count = -1;
  return function() {
    return PoliticsArray[++count % PoliticsArray.length];
  }
}());

var repeatRoll = (function() {
  var copy;
  return function() {
    if (!copy || !copy.length) copy = PoliticsArray.slice();
    return copy.splice(Math.random() * copy.length | 0, 1);
  }
}());