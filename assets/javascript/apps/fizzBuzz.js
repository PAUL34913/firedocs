var output = [];
var i = 1;

function fizzBuzz () {
  
  if (i % 3 === 0 && i % 5 === 0) {
    output.push("FizzBuzz");
  } else if (i % 5 === 0) {
    output.push("Buzz");
  } else if (i % 3 === 0) {
    output.push("Fizz");
  } else {
    output.push(i); 
  }
  
  console.log(output);
  i++;
  
}

fizzBuzz();

/* pushing numbers to an array in sequence, if number is divisible by 3 push Fizz, divisible by 5 push Buzz, divisible by both push FizzBuzz */