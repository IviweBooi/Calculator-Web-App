const display = document.getElementById('display');

function append(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(
            display.value
                .replace(/÷/g, '/')
                .replace(/×/g, '*')
                .replace(/−/g, '-')
                .replace(/√\(/g, 'Math.sqrt(')
                .replace(/log\(/g, 'Math.log10(')
                .replace(/sin\(/g, 'Math.sin(')
                .replace(/cos\(/g, 'Math.cos(')
                .replace(/tan\(/g, 'Math.tan(')
                .replace(/factorial\(/g, 'factorial(')
                .replace(/\^/g, '**')
        );
    } catch {
        display.value = 'Error';
    }
}

// Utility functions
function isNumber(val) {
    return !isNaN(val) && val.trim() !== '';
}

function factorial(n) {
    n = Number(n);
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}