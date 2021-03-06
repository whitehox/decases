const functions = require('./functions');

describe('Should check for addition of integers', () => {
    test('Add 6 to 4 should return 10', () => {
        expect(functions.add(6,4)).toBe(10);
    });
    test('Empty argument should return error', () => {
        expect(functions.add()).toBe('Arguments must not be empty');
    });
    test('Should return error if either is string', () => {
        expect(functions.add("Hello", "2")).toBe("Both arguments must be an Integer");
    });
});
describe('Should add indefinte amount of numbers', () => {
    test('Add 6, 4, 5 and 10 should return 25', () => {
        expect(functions.indefiniteAdd(6,4,5,10)).toBe(25);
    });
    test('Empty argument should return error', () => {
        expect(functions.indefiniteAdd()).toBe(0);
    });
});
describe('Shoul show the difference between two numbers', () => {
    test('Difference of 5 and 2 should be 3', () => {
        expect(functions.difference(5,2)).toBe(3);
    });
    test('If either arguments are empty', () => {
        expect(functions.difference()).toBe('Arguments must not be empty');
    });
    test('If either arguments are string', () => {
        expect(functions.difference("Hello", "World")).toBe("Both arguments must be an Integer");
    });
    test('If first argument is less than the second', () => {
       expect(functions.difference(5, 10)).toBe(-5);
    });
});
describe('Should multiply indefinite amount of integers', () => {
    test('Multiply 6, 4, 5 and 10 should return 1200', () => {
        expect(functions.multiply(1,2,2)).toBe(4);
    });
    test('Should return error if either of the arguments are strings', () => {
        expect(functions.multiply(1,2,3, 'String')).toBe('All arguments must be integers');
    });
});
test('Divide 10 by 5 should return 2', () => {
    expect(functions.divide(10,5)).toBe(2);
});
describe('test for concatenating two string', () => {
    test('Strings concatenate', () => {
        expect(functions.concatStrings('Hello', 'World')).toBe('Hello World');
    });
    test('Empty arguments should return an error', () => {
        expect(functions.concatStrings()).toBe('Parameters must not be empty');
    });
    test('Arguments must not be integers', () => {
        expect(functions.concatStrings(1,1)).toBe('Arguments must be strings');
    });
});
describe('Check repos from git api', () => {
    test('Should return user repos', async () => {
        await functions.getUserRepo('whitehox')
            .then(response => {
                expect(response).toContain(('57'));
            })
    });
});

