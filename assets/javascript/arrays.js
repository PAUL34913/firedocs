function whosPaying(names) {
    
    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex] + " is going to buy lunch today!";
    return randomName;
       
  }
  
  whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);