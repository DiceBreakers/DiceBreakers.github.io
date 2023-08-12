/*
	Random Conversation Starters Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const RandomArray = [
    "What's something you've always wanted to learn or try, but haven't had the chance to?",
    "If you could have a conversation with any historical figure, who would it be and why?",
    "What's a place you feel most at peace or connected to nature?",
    "If you could instantly master any skill, what would it be and how would you use it?",
    "What's a small act of kindness you've experienced that made a big impact on you?",
    "If you could invite three people, living or deceased, to a dinner party, who would they be?",
    "What's a movie, book, or song that you could watch, read, or listen to over and over?",
    "If you could travel to any time period for a day, where and when would you go?",
    "What's a lesson you've learned from a difficult experience that you're grateful for?",
    "What's your favorite way to unwind and relax after a busy day?",
    "If you could have any job in the world for a week, just to try it out, what would it be?",
    "What's a personal goal you're currently working towards?",
    "If you could live in any fictional world, which one would you choose and why?",
    "What's the most interesting place you've ever been to or would like to visit?",
    "What's a quote or saying that you find inspiring or meaningful?",
    "If you could donate a large sum of money to a cause, which cause would you choose?",
    "What's something from your childhood that you wish was still around today?",
    "What's a life hack or productivity tip that you've found really helpful?",
    "If you could write a book about any topic, what would it be and why?",
    "What's an invention or technology that you think will shape the future?",
    "How are you similar to your parents? How are you different?",
    "When making group decisions, do you speak up or go along with others?",
    "Do you 'respect' authority? Why or why not?",
    "Do you enjoy the outdoors or indoors best?",
    "What's your favorite form of recreation? What do you like about it?",
    "Do you want to work harder, or take more time to relax?",
    "Which of your personality traits has helped you most in life?",
    "Are you more practical, or are you a dreamer?",
    "What vacation spots are on your bucket-list?",
    "What is something on your bucket-list that isn't about travel?",
    "Who gave you a compliment that you'll never forget? What did they say?",
    "Do you watch or read any news? Is it important to stay abreast of current events? Or is it an unnecessary stressor?",
    "Do you have a role model? What do you respect about them?",
    "Is change more scary or exciting?",
    "What does it mean to you to have self-esteem?",
    "What was the most fun you've ever had at work?",
    "With whom are you most yourself?",
    "What gives you hope for the future?",
    "What is your favorite movie? What do you like about it?",
    "If you could change something about your country's culture, what would it be and why?",
    "Are you more optimistic or realistic? Why?",
    "You just won a million dollars, but you have to donate it all to charity. What causes would you support?",

]

var randomQ = RandomArray[(Math.floor(Math.random() * (RandomArray.length)))];

document.getElementById('pContainer').innerHTML = randomQ;