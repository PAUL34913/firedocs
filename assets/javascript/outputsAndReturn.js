function addNumbers (a, b) {
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var ftotal = num1 + num2;
    return ftotal;
  }
  
  var n1 = prompt("Pick a number:");
  var n2 = prompt("Pick another number");
  var total = addNumbers(n1, n2);
  alert( n1 + " + " + n2 + " = " + total);