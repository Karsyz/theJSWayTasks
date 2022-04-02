
function tasksChapter3 () {

// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

let monthNumber = Number(prompt("Enter a month number (Example: 2 = Feburary):"))

if ((monthNumber === 1) || (monthNumber === 3) || (monthNumber === 5) || (monthNumber === 7) || (monthNumber === 8) || (monthNumber === 10) || (monthNumber === 12)) {
    console.log("This Month has 31 Days")
} else if (monthNumber === 2) {
    console.log("This Month has 28 Days and 29 on Leap Years")
} else if ((monthNumber === 4) || (monthNumber === 6) || (monthNumber === 9) || (monthNumber === 11)) {
    console.log("This Month has 30 Days")
} else {
    console.log("You did not type a number between 1 and 12")
}






}


