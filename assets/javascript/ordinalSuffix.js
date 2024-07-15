var isValidInput1 = false;
var isValidInput2 = false;
var input;
var characterPosition;
var nameLength;

function getOrdinalSuffix(number) {
    if (number % 100 >= 11 && number % 100 <= 13) {
        return number + "th";
    }
    switch (number % 10) {
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
        default:
            return number + "th";
    }
}

while (!isValidInput1) {
    input = prompt("What is your first name?");
  
    if (!input) {
        alert("Please enter something.");
    } else if (!isNaN(input)) {
        alert("Numbers are not allowed.");
    } else {
        nameLength = input.length;
        alert(input.length);
        input = input.toLowerCase();
        input = input.charAt(0).toUpperCase() + input.slice(1);
        isValidInput1 = true;
        alert(input);
    }
}

while (!isValidInput2) {
    characterPosition = prompt("Hi " + input + ", your first name is " + nameLength + " characters long. \n \nPlease pick a number from 1 to " + nameLength + ".");
  
    if (!characterPosition) {
        alert("Please enter something.");
    } else if (isNaN(characterPosition)) {
        alert("Letters are not allowed.");
    } else if (characterPosition < 1 || characterPosition > nameLength) {
      	alert("Invalid number. Please pick a number from 1 to " + nameLength);
    } else {
        isValidInput2 = true;
        characterPosition = parseInt(characterPosition);
        alert(characterPosition);
        alert(nameLength);
    }
}

if (characterPosition >= 1 && characterPosition <= nameLength) {
    var ordinalSuffix = getOrdinalSuffix(characterPosition);
    var pickedCharacter = input.charAt(characterPosition - 1);  // Get the character at the picked position
    alert("You have picked the " + ordinalSuffix + " character which is " + pickedCharacter + ".");
} else {
    alert("Invalid number. Please pick a number from 1 to " + nameLength);
}
