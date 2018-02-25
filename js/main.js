var cards = [
{	rank: "queen",
	suit: "hearts",
	cardImage: "images/gueen-of-hearts.png"
},
{	rank: "queen",
	suit: "diamonds",
	cardImage: "images/gueen-of-diamonds.png"
},
{	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{	rank: "king",
	suit: "diamonds",
	cardImage: "images/gueen-of-diamonds.png"
},
];
var cardsInPlay = [];
var checkForMatch = function(){
}

var flipCard = function(cardsId){
checkForMatch();
console.log("User flipped " + cards[cardsId].rank);
cardsInPlay.push(cards[cardsId].rank);
console.log(cards[cardsId].cardImage);
console.log(cards[cardsId].suit);
if (cardsInPlay.length === 2) {
if (cardsInPlay [0] === cardsInPlay [1]) {
	alert("You found a match!");
}
else {
	alert("sorry, try again");
}}
}
flipCard(0);
flipCard(2);
