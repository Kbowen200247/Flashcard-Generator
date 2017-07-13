var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");


console.log();
console.log("----- Basic Card -----");
console.log(firstPresident.front);
console.log(firstPresident.back);
console.log("----------------------");

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log();
console.log("----- Cloze Card -----");
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);
console.log("----------------------");

var brokenCloze = new ClozeCard(" This doesn't work ", " oops ");
