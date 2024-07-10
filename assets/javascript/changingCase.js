function changingCase(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var name = prompt("What is your name?");
let capitalFirst = changingCase(name);
alert("Hello, " + capitalFirst + ".");


/*
var name = prompt("What is your name?");
var char1 = name.slice(0,1);
var cap1 = char1.toUpperCase();
var string = name.slice(1);
alert("Hello, " + cap1 + string + ".");
*/
