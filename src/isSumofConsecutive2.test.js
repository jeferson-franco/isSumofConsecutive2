const solution = require('./isSumofConsecutive2.js');

test('test 1', () => {
    expect(solution(9)).toBe(2);
});

test('test 2', () => {
    expect(solution(8)).toBe(0);
});

test('test 3', () => {
    expect(solution(15)).toBe(3);
});

test('test 4', () => {
    expect(solution(24)).toBe(1);
});

test('test 5', () => {
    expect(solution(13)).toBe(1);
});

test('test 6', () => {
    expect(solution(25)).toBe(2);
});

test('test 7', () => {
    expect(solution(99)).toBe(5);
});
