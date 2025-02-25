function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function isEven(num) {
    return num % 2 === 0;
}

// Example usage:
console.log("Addition: " + add(5, 3));         // Output: 8
console.log("Subtraction: " + subtract(5, 3)); // Output: 2
console.log("Multiplication: " + multiply(5, 3)); // Output: 15
console.log("Division: " + divide(6, 3));      // Output: 2

// 