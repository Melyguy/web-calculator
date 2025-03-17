export default function fibonacci(tall: number): number[] {
    if (tall <= 0) {
        return [];
    }
    if (tall === 1) {
        return [0];
    }
    if (tall === 2) {
        return [0, 1];
    }
    
    const sequence = [0, 1];
    for (let i = 2; i < tall; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
