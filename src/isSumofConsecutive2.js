function solution(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        let sum = i;
        for (let j = i + 1; j < n; j++) {
            sum += j;
            if (sum === n) {
                count++;
                break;
            }
            if (sum > n) {
                break;
            }
        }
    }
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isSumofConsecutive2

// alternative solution
