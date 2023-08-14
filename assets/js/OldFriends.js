/*
	Old Friends Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const OldFriendsArray = [
    "Mini Playlist - Queue up one song and share a reason you like it.",
    "Affirmations - Say something you admire about another person.",
    "Share a time you were embarrassed or has become embarrassing with time.",
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
    "What would you do differently if you could start over?",
    "Is there a habit you would like to develop? Or one you would like to break?",
    "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
    "Given the choice of anyone in the world, whom would you want as a dinner guest?",
    "What would constitute a 'perfect' day for you?",
    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
    "If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, what would you want to know?",
    "What do you value most in a friendship?",
    "What's your biggest regret in life, and how has it shaped you?",
    "What's the most challenging experience you've had with mental health, if you're comfortable sharing?",
    "Have you ever held a grudge against someone, and why?",
    "What's the most embarrassing thing you've ever done or experienced?",
    "Can you describe a time when you felt judged or misunderstood by others?",
    "What's a secret you've never told anyone before?",
    "Have you ever had a near-death experience or a moment that made you question your mortality?",
    "What's a lie you've told that you feel guilty about?",
    "What's the most difficult choice you've had to make that affected someone else's life?",
    "Have you ever had a falling out with a close friend or family member? What happened?",
    "Can you share a time when you felt truly lost or uncertain about your future?",
    "What's something you've never forgiven yourself for, and how does it still affect you?",
    "Have you ever been in love with someone who didn't feel the same way about you?",
    "What's a habit or addiction you struggle with, if you're comfortable discussing it?",
    "Have you ever faced legal trouble or been involved in a situation that had legal consequences?",
    "What's the most hurtful thing someone has said to you, and how did you cope with it?",
    "Can you recall a time when you were unfaithful or dishonest in a relationship?",
    "What's a time when you felt envious or jealous of someone else's success or happiness?",
    "Have you ever had a falling out with a close friend? What happened and how did it impact you?",
    "What's a belief or opinion you hold that goes against societal norms or your family's expectations?",

]

var randomQ = OldFriendsArray[(Math.floor(Math.random() * (OldFriendsArray.length)))];

document.getElementById('pContainer').innerHTML = randomQ;

