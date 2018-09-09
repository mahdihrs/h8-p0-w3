function mengelompokkanAngka(arr) {
  var genap = [];
  var ganjil = [];
  var kelipatanTiga = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      kelipatanTiga.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      genap.push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
      ganjil.push(arr[i]);
    }
  }
  var arrFinal = [];
  arrFinal.push(genap);
  arrFinal.push(ganjil);
  arrFinal.push(kelipatanTiga);
  return arrFinal;
}

// kelompok pertama (baris pertama) merupakan angka-angka genap
// kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
// kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
