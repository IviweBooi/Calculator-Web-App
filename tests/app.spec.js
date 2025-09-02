
describe("Calculator", function() {

    // Mocking the display element
    let display;

    beforeEach(function() {
        display = document.createElement('input');
        display.id = 'display';
        display.type = 'text';
        document.body.appendChild(display);
        init(); // Initialize the display variable in app.js
    });

    afterEach(function() {
        document.body.removeChild(display);
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
            display.value = "√(9)";
            calculate();
            expect(display.value).toBe('3');
        });

        it("should handle logarithm", function() {
            display.value = "log(100)";
            calculate();
            expect(display.value).toBe('2');
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

    describe("isNumber", function() {
        it("should return true for a valid number", function() {
            expect(isNumber("123")).toBe(true);
        });

        it("should return false for a non-numeric string", function() {
            expect(isNumber("abc")).toBe(false);
        });


        it("should return false for an empty string", function() {
            expect(isNumber("")).toBe(false);
        });
    });

    describe("factorial", function() {
        it("should return the factorial of a positive number", function() {
            expect(factorial(5)).toBe(120);
        });

        it("should return 1 for factorial of 0", function() {
            expect(factorial(0)).toBe(1);
        });

        it("should return 1 for factorial of 1", function() {
            expect(factorial(1)).toBe(1);
        });

        it("should return NaN for factorial of a negative number", function() {
            expect(isNaN(factorial(-5))).toBe(true);
        });
    });

    describe("toRadians", function() {
        it("should convert degrees to radians", function() {
            expect(toRadians(180)).toBe(Math.PI);
        });
    });

    describe("toDegrees", function() {
        it("should convert radians to degrees", function() {
            expect(toDegrees(Math.PI)).toBe(180);
        });
    });
});
