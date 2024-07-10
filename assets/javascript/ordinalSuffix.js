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

var input = prompt("What is your first name?");
var name = input;  // input is already a string
var nameLength = input.length;

var characterPosition = prompt("Hi " + name + ", your first name is " + nameLength + " characters long. Please pick a number from 1 to " + nameLength);
characterPosition = parseInt(characterPosition);  // Convert the input to an integer

if (characterPosition >= 1 && characterPosition <= nameLength) {
    var ordinalSuffix = getOrdinalSuffix(characterPosition);
    var pickedCharacter = name.charAt(characterPosition - 1);  // Get the character at the picked position
    alert("You have picked the " + ordinalSuffix + " character which is '" + pickedCharacter + "'.");
} else {
    alert("Invalid number. Please pick a number from 1 to " + nameLength);
}