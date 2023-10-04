// Given a string, return true or false depending on whether
// that string has balanced parentheses.
const balancedParenthesis = string => {
    let closedParen = ''
    let openParen = ''
    let newString = string.replace(/[^()]/gi, '')
    console.log(newString)
    for (i = 0; i < newString.length; i++) {
    let parenthesis = newString[i]
    if (parenthesis === '(') {
        openParen += parenthesis
        console.log('open:', openParen)
    } else if (parenthesis === ')') {
        closedParen += parenthesis
        console.log('close:', closedParen)
    }
    }
    if (openParen.length !== closedParen.length) {
    return false
    } else {
    return true
    }
}

console.log(balancedParenthesis('(This has (too many closes).))'))
