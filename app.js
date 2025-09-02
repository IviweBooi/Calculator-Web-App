let display;

function init() {
    display = document.getElementById('display');
}

window.addEventListener('DOMContentLoaded', init);

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
        let expression = display.value
            .replace(/÷/g, '/')
            .replace(/×/g, '*')
            .replace(/−/g, '-')
            .replace(/√/g, 'sqrt');

        display.value = math.evaluate(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
