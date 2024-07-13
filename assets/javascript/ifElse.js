prompt("What is your name?");
prompt("What is their name?");

var n = Math.random() * 100;
n = Math.round(n) + 1;

if (n === 100) {
  alert("Your love score is " + n + "%. You love each other like Kanye loves Kanye, Yeezy!");
} else if (n > 70) {
  alert("Your love score is " + n + "%. That's a lot!");
} else {
  alert("Your love score is " + n + "%.");
}