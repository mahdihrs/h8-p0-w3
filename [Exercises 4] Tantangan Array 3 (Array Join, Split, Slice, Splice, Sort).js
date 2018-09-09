var arrays = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

//SPLICE
arrays.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
arrays.splice(4, 1, "Pria", "SMA International Metro");
console.log(arrays);

//SPLIT
var splitArrays = arrays[3]
var namaBulan = splitArrays.substr(3, 2)

switch(namaBulan) {
  case 01: {
  console.log('Januari');
  break;
  }
  case 02: {
  console.log('Februari');
  break;
  }
  case 03: {
  console.log('Maret');
  break;
  }
  case 04: {
  console.log('April');
  break;
  }
  case '05': {
  console.log('Mei');
  break;
  }
  case 06: {
  console.log('hari');
  break;
  }
  case 07: {
  console.log('Juli');
  break;
  }
  case 08: {
  console.log('Agustus');
  break;
  }
  case 09: {
  console.log('September');
  break;
  }
  case 10: {
  console.log('Oktober');
  break;
  }
  case 11: {
  console.log('November');
  break;
  }
  case 12: {
  console.log('Desember');
  break;
  }
  default: {
  console.log('Masukkan bulan dengan tepat!');
  break;
  }
}

//UBAH TANGGAL KE ARRAY DAN SPLIT SECARA DESCENDING
var hari = splitArrays.substr(0, 2);
var tahun = splitArrays.substr(6, 4);

var tanggalLengkap = hari + ' ' + namaBulan + ' ' + tahun;
var splitTanggal = tanggalLengkap.split(' ');
splitTanggal.sort(function(value1, value2) {return value2 - value1});
console.log(splitTanggal);


// JOIN tanggal dengan "-"
var splitTanggalToJoin = tanggalLengkap.split(' ')
console.log(splitTanggalToJoin.join("-"));


//SLICE elemen nama
var namaSiswa = arrays[1]
console.log(namaSiswa.slice(0,14));
