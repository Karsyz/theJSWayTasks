// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

function musketeers() {
    let musketeers = ["Athos", "Porthos", "Aramis"]

    for(i=0;i<musketeers.length;i++) {
        console.log(musketeers[i])
    }

    musketeers.push("D'Artagnan")
    console.log(musketeers)

    musketeers.forEach(person => {console.log(person)} )

    musketeers.splice(2,1)
    console.log(musketeers)

    for (let peeps of musketeers) {
        console.log(peeps)
    }

}

musketeers()


// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];

function sumOfValues(a,b,c,d,e,f) {
const nums = [a,b,c,d,e,f]
let sum = 0
for(i=0;i<nums.length;i++) {
    sum += nums[i]
}
    return sum
}

console.log(sumOfValues(3, 11, 7, 2, 9, 10))

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
// const values = [3, 11, 7, 2, 9, 10];

function maximum(a,b,c,d,e,f) {
    const nums = [a,b,c,d,e,f]
        return Math.max(...nums)
    }
    
console.log(maximum(3, 11, 7, 2, 9, 10))




// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".


function listOfWords() {
    let wordsList = []
    let word = ""
    while ( word !== 'stop' ) {
        word = prompt('enter a word')
        if (word == 'stop') {
            break
        }else {
            wordsList.push(word)
        }
        console.log(wordsList)
    }
}

listOfWords()
