function changingCase(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var name = prompt("Hi, what is your name?");
var capitalFirst = changingCase(name);
var age = prompt("Hello, " + capitalFirst + ". How old are you?");
var dogAge = prompt("OK, thank you, and how old is your dog?");
var dogHumanAge = (dogAge - 2) * 4 + 21;

if (age > dogHumanAge) {
  alert("Your dog is only " + (age - dogHumanAge) + " years younger than you!");
} else if (age < dogHumanAge) {
  alert("Wow, your dog is " + (dogHumanAge - age) + " years older than you!");
} else if (age === dogHumanAge) {
  alert("Woah! Right now, you are the same age!");
} else {
  alert("Something's not right here!");
}

