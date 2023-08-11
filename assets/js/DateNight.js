/*
	Romance Questions Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const DateNightArray = [
    "Mini Playlist - Queue up one song and share a reason you like it.",
    "Affirmations - Say something you admire about another person.",
    "Share a time you were embarrassed, or has become embarrassing with time.",
    "Share any happy thought or memory.",
    "Share a goal you'd like to accomplish at some point in your life.",
    "Self-Affirmation - Share one character trait about yourself that you're proud of.",
    "Share something you want to learn or improve at.",
    "Share something that made you laugh recently.",
    "Share one personal life experience that changed you.",
    "What is one world event that affected you?",
    "Share a happy sad memory. A meaningful time you had mixed emotions, or that was one emotion when you experienced it and has shifted over time",
    "Share a personal growth story you're proud of.",
    "Share something you struggle with and would like to work on.",
    "Share a personal fear.",
    "How would you describe your moral code?",
    "What is your nearest to death experience?",
    "1 Minute Yoga Flow",
    "Go for a walk",
    "Stay hydrated",
    "Do 5 pushups",
    "Do a somersault",
    "Pet a dog",
    "Hug a friend",
    "High fives all around",
]

var randomQ = DateNightArray[(Math.floor(Math.random() * (DateNightArray.length)))];

document.getElementById('pContainer').innerHTML = randomQ;