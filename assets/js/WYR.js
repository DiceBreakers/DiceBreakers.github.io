/*
	Would You Rather Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const WYRArray = [
    "Would you rather have the ability to fly or be invisible?",
    "Would you rather have a photographic memory or the ability to read minds?",
    "Would you rather be able to speak all languages fluently or play any musical instrument?",
    "Would you rather live in a world with no technology or a world with no nature?",
    "Would you rather have the ability to control fire or water?",
    "Would you rather have the ability to speak to animals or to understand and speak all human languages?",
    "Would you rather be incredibly wealthy but work a job you hate, or have a fulfilling job but struggle financially?",
    "Would you rather be able to control animals with your mind or control electronics with your mind?",
    "Would you rather live without the internet or without air conditioning/heating?",
    "Would you rather be the best player on a losing team or the worst player on a winning team?",
    "Would you rather always have to speak your mind or never be able to speak again?",
    "Would you rather live in a fantasy world with magic and mythical creatures or in a futuristic sci-fi world?",

]

var randomQ = WYRArray[(Math.floor(Math.random() * (WYRArray.length)))];

document.getElementById('pContainer').innerHTML = randomQ;


