function beer() {
  
    var i = 100;
     
    while (i > 0) {
      if (i > 2) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        i--;
        console.log("Take one down, pass it around. " + i + " bottles of beer on the wall.");
      } else if (i === 2) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        i--;
        console.log("Take one down, pass it around. " + i + " bottle of beer on the wall.");
      } else {
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
        i--;
        console.log("Take one down, pass it around. No more bottles of beer on the wall.");
      }
    }
  }
  
  beer();