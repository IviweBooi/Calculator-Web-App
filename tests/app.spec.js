describe("Calculator", function() {

    let display;

    beforeEach(function() {
        display = document.createElement('input');
        display.id = 'display';
        display.type = 'text';
        document.body.appendChild(display);
        init(); // Initialize the display variable in app.js

        // Mock math.js on the window object
        window.math = {
            evaluate: function(expr) {
                try {
                    // A simple eval for testing purposes, not for production
                    return eval(expr
                        .replace(/sqrt/g, 'Math.sqrt')
                        .replace(/log/g, 'Math.log10')
                        .replace(/\^/g, '**')
                    );
                } catch (e) {
                    throw new Error('Invalid expression');
                }
            }
        };
    });

    afterEach(function() {
        document.body.removeChild(display);
        delete window.math;
    });

    describe("append", function() {
        it("should append a value to the display", function() {
            append('5');
            expect(display.value).toBe('5');
            append('+');
            expect(display.value).toBe('5+');
        });
    });

    describe("clearDisplay", function() {
        it("should clear the display", function() {
            display.value = "123";
            clearDisplay();
            expect(display.value).toBe('');
        });
    });

    describe("backspace", function() {
        it("should remove the last character from the display", function() {
            display.value = "123";
            backspace();
            expect(display.value).toBe('12');
        });
    });

    describe("calculate", function() {
        it("should calculate the result of the expression in the display", function() {
            display.value = "2+2";
            calculate();
            expect(display.value).toBe('4');
        });

        it("should handle division", function() {
            display.value = "10÷2";
            calculate();
            expect(display.value).toBe('5');
        });

        it("should handle multiplication", function() {
            display.value = "5×2";
            calculate();
            expect(display.value).toBe('10');
        });

        it("should handle subtraction", function() {
            display.value = "10−2";
            calculate();
            expect(display.value).toBe('8');
        });

        it("should handle square root", function() {
            display.value = "sqrt(9)";
            calculate();
            expect(display.value).toBe('3');
        });

        it("should handle logarithm", function() {
            display.value = "log(10)";
            calculate();
            expect(display.value).toBe('1');
        });

        it("should handle power", function() {
            display.value = "2^3";
            calculate();
            expect(display.value).toBe('8');
        });

        it("should show 'Error' for invalid expressions", function() {
            display.value = "2+";
            calculate();
            expect(display.value).toBe('Error');
        });
    });
});