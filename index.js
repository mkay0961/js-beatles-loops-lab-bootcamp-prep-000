// add solution here

function theBeatlesPlay(musicians, instruments){
 players = []
 for (var i=0 ; players.Length; i++){
   players.push(musicians[i] + "plays" + instruments[i])
 }
   return players;
}

function johnLennonFacts(){
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var newFacts = [];
var i = 0;
while (i < newFacts.Length) {
  newFacts.push(facts[i] + "!!!")
  i++;
}
return newFacts
}
