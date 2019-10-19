// add solution here




function theBeatlesPlay(players, instruments){
var array = []

for (var i =0; i < players.length; i++){
    array.push(players[i] + " plays "+ instruments[i])
  }


return array;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

iLoveTheBeatles(num){
var beatles = []
  do {
  beatles.push("I love the beatles!" )
  num++
} while (num < 15)
console.log(beatles)
return beatles
}
