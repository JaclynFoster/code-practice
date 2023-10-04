// Write a function that takes in a number. It should return a “tower” of *.
// The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks,
// and so on.

// Each block is represented by a *.

const buildTower = number => {
    let starArray = []
    let space = 0
    for (let i = number; i > 0; i--) {
    starArray.push(
        ' '.repeat(space) + '*'.repeat(i) + '*'.repeat(i - 1) + ' '.repeat(space)
    )
    }
    return starArray.reverse()
}

console.log(buildTower(6))
