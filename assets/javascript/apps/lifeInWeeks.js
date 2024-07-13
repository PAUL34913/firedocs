function lifeInWeeks(age) {

    var years = 90 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;


    alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}


var input = prompt("How old are you?");
var age = parseInt(input, 10);

if (!isNaN(age) && age >= 0 && age <= 90) {
    lifeInWeeks(age);
} else {
    alert("Please enter a valid age between 0 and 90.");
}
