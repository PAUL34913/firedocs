function fibonacciGenerator(n) {
    // Do NOT change any of the code above 👆

    // Write your code here:
    var output = [];
    var i = 0; // Initialize i

    while (i < n) {
        if (i === 0) {
            output.push(0);
        } else if (i === 1) {
            output.push(1);
        } else {
            output.push(output[i - 1] + output[i - 2]);
        }
        i++;
    }
    
    return output; // Return the output array
}

// Do NOT change any of the code below 👇

var result = fibonacciGenerator(100);
alert(result); // Display the result in an alert
