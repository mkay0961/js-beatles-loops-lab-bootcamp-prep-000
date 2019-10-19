// add solution here




function theBeatlesPlay(players, instruments){
var array = [];
for (var i = 0; i<players.length; i++){
  array.push(players[i] + " plays " + instruments[i])
}
return array
}

function johnLennonFacts(){
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var newFacts= []
i = 0
while (i < facts.length){
   newFacts.push(facts[i] + "!!!")
  i++
}
console.log(newFacts)
return newFacts
}

function iLoveTheBeatles(num){
var array = [];
  do { array.push("I love the Beatles!")
  num++

} while (num < 15);
return array
}
