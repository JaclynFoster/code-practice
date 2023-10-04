// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the “instructions” for the development
//  and functioning of living organisms.

// In DNA strings, symbols “A” and “T” are complements of each other, as are “C” and “G”.

// Write a function that takes in a string (one side of the DNA); it should return the other complementary side.

// For example:
// dnaStrand("ATTGC") --> "TAACG"
// dnaStrand("GTAT") --> "CATA"

const dnaStrand = string => {
    let newArr = []
    for (let i = 0; i < string.length; i++) {
    let index = string[i]
    if (index === 'A') {
        newArr.push('T')
    } else if (index === 'T') {
        newArr.push('A')
    } else if (index === 'G') {
        newArr.push('C')
    } else if (index === 'C') {
        newArr.push('G')
    }
    }
    return newArr.join('')
}

console.log(dnaStrand('GTAT'))
