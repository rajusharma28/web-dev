// Get DOM elements
const calculateBtn = document.getElementById("calculate-btn");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const age = document.getElementById("age");
const resultbox = document.getElementById("bmi-value");

// BMI Calculation Function
function calculateBMI() {
    const height1 = Number(height.value);
    const weight1 = Number(weight.value);
    const age1 = Number(age.value);

    // Validate input
    if (isNaN(height1) || isNaN(weight1) || isNaN(age1) || height1 <= 0 || weight1 <= 0 || age1 <= 0) {
        resultbox.textContent = "Please enter valid input values.";
        // Style
        resultbox.style.color = "red";
        return;
    }

    // Calculate BMI
    const heightMeter = height1 / 100;
    const bmi = (weight1 / (heightMeter ** 2)).toFixed(2);

    // Display BMI result
    resultbox.textContent = `Your BMI is ${bmi} `;
    resultbox.style.color = "black";

    // Add health message based on BMI
    if (bmi < 18.5) {
        resultbox.textContent += "(Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultbox.textContent += "(Normal weight)";
    } else if (bmi >= 25 && bmi < 30) {
        resultbox.textContent += "(Overweight)";
    } else {
        resultbox.textContent += "(Obese)";
    }
}

// Add event listener to the calculate button
calculateBtn.addEventListener("click", calculateBMI);
