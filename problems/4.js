/**
 * Problem 4: Sort and Reverse
 * 
 * Given a list of words, sort the list in reverse alphabetical order.
 * Use the .sort and .reverse functions.
 * 
 * @example ["chase", "uci", "apple", "zebra"] -> ["zebra", "uci", "chase", "apple"]
*/
function problem(words) {
    words.sort();
    words.reverse();
    return words;
}

const tests = [
    [["chase", "uci", "apple", "zebra"], ["zebra", "uci", "chase", "apple"]],
    [["a", "b", "aa", "x"], ["x", "b", "aa", "a"]],
    [[], []]
]

module.exports = {problem, tests};