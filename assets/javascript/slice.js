function showAlert(number) {
  if (number === 1) {
    return "character";
  } else {
    return "characters";
  }
}

var input;
var number;
var isValidInput1 = false;
var isValidInput2 = false;
var counter = 0;

while (!isValidInput1) {
  input = prompt("Please enter some text.");

  if (!input) {
    alert("Please enter something!");
    counter +=1;
  } else {
    if (isNaN(input)) {
      var word = input;
      var length = input.length;
      alert("Your text is " + length + " characters long.");
      isValidInput1 = true;
    } else {
      alert("Please enter a character other than a number.");
      counter +=1;
    }
  }
} 

while (!isValidInput2) {
  number = prompt("Please choose a number between 1 and " + length + ".");
  if (!number) {
    alert("Please enter something!");
    counter +=1;
  } else if (number < 1 || number > length) {
    alert("Sighs");
    counter +=1;
  } else if (isNaN(number)) {
    alert("God give me strength, a number between 1 and " + length + "!");
    counter +=1;
  } else {
    isValidInput2 = true;
  }
}  


var slice = input.slice(0, number);
var answer = showAlert(number);

if (number == 1) {
  alert("The first " + answer + " is ''" + slice + "''.");
} else {
  alert("The first " + number + " " + answer + " are ''" + slice + "''.");
} 

if (counter === 0) {
  alert("Your a clever little so and so aren't you?");
} else if (counter === 1) {
  alert("Not bad, I suppose we can't all be perfect.");
} else if (counter > 1 && counter < 5) {
  alert("Pffft, could have made an effort.");
} else {
  alert("Your not very bright are you?");
}
alert("In total you made ''" + counter + "'' errors." )


