/*
	New Friends Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const NewFriendsArray = [
    "Mini Playlist - Queue up one song and share a reason you like it.",
    "What is your favorite animal and why?",
    "What is your favorite place you've been?",
    "Share any happy thought or memory.",
    "Share a goal you'd like to accomplish at some point in your life.",
    "What is your favorite food?",
    "Share something you want to learn or improve at.",
    "Share something that made you laugh recently.",
    "What is your favorite band or musical artist?",
    "What is your favorite movie?",
    "What is your favorite thing you get to do regularly?",
    "Ignoring budget and responsibilities, what would be your ideal vacation?",
    "You wake up on a Saturday with no plans or obligations. What do you do?",
    "What was your least favorite vacation and why?",
    "What is the worst food you've ever eaten?",
    "What is your least favorite movie you can recall watching?",
    "What is your least favorite thing you have to do regularly?",
    "What is your favorite genre of music?",
    "What do you think is the most overrated restaurant?",
    "Who is your most despised character in a TV show or movie?",
    "What is your least favorite company in the world?",
    "What is your favorite activity that others might consider a waste of time?",
    "You just won a million dollars, but you have to donate it all to charity. What causes would you support?",
    "What's your favorite form of recreation? What do you like about it?",
]

var randomQ = NewFriendsArray[(Math.floor(Math.random() * (NewFriendsArray.length)))];

document.getElementById('pContainer').innerHTML = randomQ;