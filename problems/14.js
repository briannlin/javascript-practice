/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    majority_bound = Math.floor(numbers.length / 2);
    freq = {};
    for (i = 0; i < numbers.length; i++)
    {
        num = numbers[i];
        if (freq[num])
        {
            freq[num] += 1;
        }
        else
        {
            freq[num] = 1;
        }
        
        if (freq[num] == majority_bound)
        {
            return num;
        }
    } 
    return majority_bound;
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};