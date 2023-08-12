/*
	Spiritual or Religious Conversation Starters Game by Dice Breakers.
	Not Licensed for any other use.
*/
"use strict";

const log = (v) => console.log(v);

const SpiritualArray = [
    "What role does religion or spirituality play in your life, and how has it shaped your beliefs and values?",
    "What do you find most comforting or inspiring about your faith or spiritual practice?",
    "Are there any rituals or practices that are particularly important to you, and why do they hold significance?",
    "How do you explore and seek understanding in moments of doubt or questioning within your faith?",
    "What do you think is the purpose or meaning of life from a religious or spiritual perspective?",
    "How do you think different religions and spiritual beliefs contribute to a diverse and interconnected world?",
    "What's a lesson or teaching from your faith that you find particularly meaningful?",
    "How do you reconcile your religious or spiritual beliefs with scientific discoveries and advancements?",
    "What's a spiritual experience you've had that has left a lasting impact on you?",
    "How do you view the relationship between religion, ethics, and morality in your life?",
    "How does your faith influence the way you engage with and serve your community?",
    "What do you believe happens after death, and how does that belief shape the way you live?",
    "How do you approach conversations about religion or spirituality with people who have different beliefs?",
    "What's a misconception about your religion or spirituality that you'd like to address?",
    "How do you find balance between your faith and the challenges of everyday life?",
    "What's a religious or spiritual text that has deeply resonated with you, and why?",
    "How do you see the role of prayer or meditation in connecting with the divine or finding inner peace?",
    "How has your spiritual journey evolved over the years, and what insights have you gained from it?",
    "How do you handle disagreements or differing beliefs within your own religious or spiritual community?",
    "How do you seek to cultivate compassion and understanding across different faiths and beliefs?",

]

var randomQ = SpiritualArray[(Math.floor(Math.random() * (SpiritualArray.length)))];

document.getElementById('pContainer').innerHTML = randomQ;