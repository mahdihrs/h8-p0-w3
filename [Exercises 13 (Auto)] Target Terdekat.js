function targetTerdekat(arr) {
  var lokasiO = 0;
  var lokasiX = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      lokasiO += i
    }
    else if (arr[i] === 'x') {
      lokasiX.push(i)
    }
  }

  var sortLokasiX = lokasiX.sort();
  var temp = [];
  for (var k = 0; k < sortLokasiX.length; k++) {
    var jarakODanX = lokasiO - sortLokasiX[k];
    temp.push(Math.abs(jarakODanX));
  }
  var sortTemp = temp.sort();
  if (sortTemp.length === 0) {
    return 0;
  } else {
  return sortTemp[0];
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
