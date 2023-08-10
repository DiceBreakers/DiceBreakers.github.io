/*
	Old Friends Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const OldFriendsArray = [
    "Mini Playlist - Queue up one song and share a reason you like it.",
    "Affirmations - Say something you admire about another person.",
    "Share a time you were embarrassed, or has become embarrassing with time.",
    "Share any happy thought or memory.",
    "Share a goal you'd like to accomplish at some point in your life.",
    "Self-Affirmation - Share one character trait about yourself that you're proud of.",
    "Share something you want to learn or improve at.",
    "Share something that made you laugh recently.",
]

var randomQ = OldFriendsArray[(Math.floor(Math.random() * (OldFriendsArray.length)))];

document.getElementById('qContainer').innerHTML = randomQ;