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
var i = 0

  do (num<15){
  beatles.push("I love the beatles " + beatles[i])
  i++
}
console.log(beatles)
return beatles
}
