import test from 'node:test';
import * as assert from 'node:assert';
import fizzBuzz from './tsBrains/fuzzbuzzBrain';

test('FizzBuzz calculations', async (t) => {
    await t.test('should return empty array for n = 0', () => {
        assert.deepStrictEqual(fizzBuzz(0), []);
    });

    await t.test('should handle numbers from 1 to 15', () => {
        const expected = [
            "1", "2", "Fizz", "4", "Buzz",
            "Fizz", "7", "8", "Fizz", "Buzz",
            "11", "Fizz", "13", "14", "FizzBuzz"
        ];
        assert.deepStrictEqual(fizzBuzz(15), expected);
    });

    await t.test('should return Fizz for multiples of 3', () => {
        const result = fizzBuzz(6);
        assert.strictEqual(result[2], "Fizz"); // 3
        assert.strictEqual(result[5], "Fizz"); // 6
    });

    await t.test('should return Buzz for multiples of 5', () => {
        const result = fizzBuzz(10);
        assert.strictEqual(result[4], "Buzz"); // 5
        assert.strictEqual(result[9], "Buzz"); // 10
    });

    await t.test('should return FizzBuzz for multiples of both 3 and 5', () => {
        const result = fizzBuzz(30);
        assert.strictEqual(result[14], "FizzBuzz"); // 15
        assert.strictEqual(result[29], "FizzBuzz"); // 30
    });

    await t.test('should return number as string for non-multiples', () => {
        const result = fizzBuzz(4);
        assert.strictEqual(result[0], "1");
        assert.strictEqual(result[1], "2");
        assert.strictEqual(result[3], "4");
    });

    await t.test('should handle negative numbers', () => {
        assert.deepStrictEqual(fizzBuzz(-5), []);
    });
});
