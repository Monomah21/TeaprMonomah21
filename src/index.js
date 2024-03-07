// Import the CodeQualityChecker class from the codeQualityChecker module
const CodeQualityChecker = require('./codeQualityChecker');

// Create an instance of the CodeQualityChecker class
const codeChecker = new CodeQualityChecker();

// Example usage: check all aspects of a piece of JavaScript code
const code = `
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
`;

const result = codeChecker.checkAll(code);
console.log(result);
