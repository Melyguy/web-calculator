import { describe, expect, test } from '@jest/globals';
import fibonacci from './tsBrains/fibonaccibrain';

describe('Fibonacci Calculator', () => {
    test('should return empty array for negative numbers', () => {
        expect(fibonacci(-5)).toEqual([]);
    });

    test('should return empty array for zero', () => {
        expect(fibonacci(0)).toEqual([]);
    });

    test('should return [0] for n = 1', () => {
        expect(fibonacci(1)).toEqual([0]);
    });

    test('should return [0, 1] for n = 2', () => {
        expect(fibonacci(2)).toEqual([0, 1]);
    });

    test('should return correct sequence for n = 5', () => {
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('should return correct sequence for n = 8', () => {
        expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('should handle large numbers correctly', () => {
        const result = fibonacci(10);
        expect(result).toHaveLength(10);
        expect(result[9]).toBe(34); // 10th Fibonacci number
    });

    test('should maintain correct sequence relationships', () => {
        const result = fibonacci(6);
        for (let i = 2; i < result.length; i++) {
            expect(result[i]).toBe(result[i-1] + result[i-2]);
        }
    });
});