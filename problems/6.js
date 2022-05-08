/**
 * Problem 6: For of Loop - Sum
 * 
 * Given a list of numbers, compute the sum of the list.
 * Use a For of Loop for this.
 * 
 * @example [1, 2, 3] -> 6
*/
function problem(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}

const tests = [
    [[1, 2, 3], 6],
    [[2, 31, 4, 5, 2, 67], 111],
    [[], 0],
]

module.exports = {problem, tests};