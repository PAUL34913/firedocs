function bmiCalculator (weight, height) {
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);
    
    let bmi = weightFloat / (heightFloat * heightFloat);
    let interpretation;
    
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."; 
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
}

alert(bmiCalculator(93, 1.93));
