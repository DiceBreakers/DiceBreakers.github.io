/*
	Kids Questions Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const KidsArray = [

    "If you could have any superpower, what would it be and how would you use it?",
    "What's your favorite thing to do when you have free time?",
    "If you could design your own dream world, what would it look like?",
    "If you could be any animal for a day, which one would you choose and why?",
    "What's the silliest joke you know that always makes you laugh?",
    "If you were a character in a story, what kind of adventure would you want to go on?",
    "What's your favorite thing about school or your favorite subject to learn about?",
    "What's something you're really good at and proud of?",
    "If you could make a new rule that everyone in the world had to follow, what would it be?",
    "What's the best thing about having friends? What do you like to do with them?",
    "If you could have any pet in the world, what would it be and what would you name it?",
    "What's your favorite book or story, and why do you like it so much?",
    "If you could have a magical adventure with your favorite movie character, what would you do together?",
    "What's the most exciting place you've ever been to, or where would you like to go on a big adventure?",
    "If you could talk to animals, which one would you want to have a conversation with first?",
    "What's your favorite thing to do with your family or the people you care about?",
    "If you could travel back in time, which historical period would you visit and why?",
    "What's something that always makes you feel better when you're sad or upset?",
    "What's a question you've always wanted to ask a grown-up?",
    "If you could have a magical treehouse, what kind of rooms would it have inside?",
    "What's your favorite type of weather and why do you like it?",
    "If you could spend a day with a famous person, who would it be and what would you do?",
    "What's something that always makes you laugh, no matter how many times you see or hear it?",
    "If you could have any job in the world when you grow up, what would it be and why?",
    "If you could choose any animal to be your best friend, which one would you pick and why?",
    "What's the best way to make a new friend, and what do you like to do with your friends?",
    "If you had a time machine, where and when would you travel to first?",
    "What's your favorite thing to learn about in school, and what's the coolest thing you've learned?",
    "If you could build anything you wanted out of LEGOs, what would it be?",
    "What's the tastiest meal you know how to make or would like to learn how to make?",
    "If you could have a robot that could do one chore for you, which chore would you choose?",
    "What's a place you've always wanted to visit, and what would you want to do there?",
    "If you could talk to any imaginary creature, like a unicorn or dragon, what would you ask it?",
    "What's the most exciting thing you've ever done or would like to do someday?",
    "If you could decorate your own dream room, what colors and things would you include?",
    "What's your favorite part of the day and why?",
    "If you could be a character in your favorite video game, who would you be and what would you do?",
    "What's something you think grown-ups don't understand about being a kid?",
    "If you could make a rule that your parents had to follow, what would it be?",

]

var randomQ = KidsArray[(Math.floor(Math.random() * (KidsArray.length)))];

document.getElementById('pContainer').innerHTML = randomQ;


