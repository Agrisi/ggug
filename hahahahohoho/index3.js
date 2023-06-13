function inverterString(str) {
    var novaString = "";
  
    for (var i = str.length - 1; i >= 0; i--) {
      novaString += str.charAt(i);
    }
  
    return novaString;
  }