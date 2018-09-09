function groupAnimals(animals) {
  var arrayOutput = [];
  var charTmp = '';
  var tmpLen = animals.length
  while(tmpLen > 0){
    var arrTemp = [];
    var min = 'z'
    for (var i = 0; i < animals.length; i++) {
      if(animals[i].charAt(0) <= min && animals[i].charAt(0) > charTmp){
        min = animals[i].charAt(0);
      }
    }
    charTmp = min;
    for (var i = 0; i < animals.length; i++) {
      if(animals[i].charAt(0) === charTmp){
        arrTemp.push(animals[i]);
        tmpLen--;
      }
    }
    arrayOutput.push(arrTemp);
  }
  return arrayOutput;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
