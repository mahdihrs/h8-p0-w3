function balikString(str) {
    var temp = ''
    for (var i = str.length - 1; i >= 0; i--) {
      temp = temp + str[i]
    }
    console.log(temp)
}

balikString("Saya Main Bola Tangan")
