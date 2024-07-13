 // Validate inputs
 if (isNaN(weightFloat) || isNaN(heightFloat) || weightFloat <= 0 || heightFloat <= 0) {
    return "Please enter valid positive numbers for weight and height.";
}

const name = prompt("What is your name?");

if (!isNaN(name)) {
    alert("Numbers are not allowed.");
}