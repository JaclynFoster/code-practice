// Write a function, findLongestWord, that takes an array of words and returns the length of the longest one.

// For example:
// >>> findLongestWord(["hi", "hello"])
// // 5
// >>> findLongestWord(["Devmountain", "Hackbright"])
// // 11

const findLongestWord = array => {
    let longestWordLength = 0
    for (let i = 0; i < array.length; i++) {
    let word = array[i]
    if (word.length > longestWordLength) {
        longestWordLength = word.length
    }
    }
    return longestWordLength
}

console.log(
    findLongestWord([
    'hello',
    'hi',
    'this',
    'is',
    'my',
    'awesome',
    'array',
    'of',
    'words'
    ])
)
