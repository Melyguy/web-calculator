import { describe, expect, test } from '@jest/globals';
import fizzBuzz from './tsBrains/fuzzbuzzBrain';

describe('FizzBuzz calculations', () => {
    test('should return empty array for n = 0', () => {
        expect(fizzBuzz(0)).toEqual([]);
    });

    test('should handle numbers from 1 to 15', () => {
        const expected = [
            "1", "2", "Fizz", "4", "Buzz",
            "Fizz", "7", "8", "Fizz", "Buzz",
            "11", "Fizz", "13", "14", "FizzBuzz"
        ];
        expect(fizzBuzz(15)).toEqual(expected);
    });

    test('should return Fizz for multiples of 3', () => {
        const result = fizzBuzz(6);
        expect(result[2]).toBe("Fizz"); // 3
        expect(result[5]).toBe("Fizz"); // 6
    });

    test('should return Buzz for multiples of 5', () => {
        const result = fizzBuzz(10);
        expect(result[4]).toBe("Buzz"); // 5
        expect(result[9]).toBe("Buzz"); // 10
    });

    test('should return FizzBuzz for multiples of both 3 and 5', () => {
        const result = fizzBuzz(30);
        expect(result[14]).toBe("FizzBuzz"); // 15
        expect(result[29]).toBe("FizzBuzz"); // 30
    });

    test('should return number as string for non-multiples', () => {
        const result = fizzBuzz(4);
        expect(result[0]).toBe("1");
        expect(result[1]).toBe("2");
        expect(result[3]).toBe("4");
    });

    test('should handle negative numbers', () => {
        expect(fizzBuzz(-5)).toEqual([]);
    });
});
