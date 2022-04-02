// 321... code!

// console.log()

// "this is how you write a string"
// 'and like this'

// and numbers look like this 2 4 5 and also like this 25.4

// you can also use string numbers like "2334.55" with operations

// arithmetic operations like + - * /

//comment out stuff with the the double forward slash
// /* or like this
// if you want
// to do
// multi line */

// // lets make our first PerformanceNavigationTiming
// console.log("Hello World!")

// // //lets try a multiline Text
// console.log("Hello big beautiful \nWorld")

// // // you can add two strings together with the + operator 
// // // "first half" + " second half" = "first half second half"
// // // this is called concatenation... its a new strange word for sure.
// console.log("Hel" + "lo" + " World")

// // //each line inside a program is called statement
// // //there's usually a ; at the end of each statement, but its not strictly mandatory.
// // //Programs are executed from top to bottom with each statement being read from left to right.
// console.log("Lets do some math")
// console.log( 15 + 23 ) //this will return 38
// console.log("Peace")


// //Variables

// // A computer program stores data using variables.
// // A variable is an information storage area.
// // Strings numbers arrays functions can be stored in variables
// // there's a couple ways to declare a variable

// const constantVariableName = "3214"
// let a = 1
// console.log(a)

// //const means 'constant' or unchanging.  use this when you never want this value to change or be modified.
// // let is the command you use to declare a variable you can change.
// // the older ways are to use 'var' and also using the '$' prefix.
// // you also can't use a number at the start of a variable
// // and you don't have to explicitly define a variable when you declare it,
// // but you must declare the variable before you use it.

// // Variable scope
// // the scope of a variable is the idea that the variable once declared is only visible and available for use within its own code block {opening and closing braces} and also all of its sub-blocks.

// // Expressions
// // An expression is a piece of code that produces a value.

// const c = 3
// let d = c
// d = d + 1
// console.log(d)

// //math expression operators follow BEDMAS

// let e = 3 + 2 * 4 
// let e2 = (3 + 2) * 4

// // you can delimit strings by using a backticks ``
 
// const country = "Canada"
// console.log(`I live in ${country}`)
// const x = 3
// const y = 7
// console.log(`${x} + ${y} = ${x + y}`)

// //you can perform typ conversions, which are called implicit conversions as they happen automatically without hte programmers intervention.

// const f = 100
// console.log("Varible f contains the value " + f)

// // The + operator between a string and a number causes the concatenation of the two values into a string result.

// //  JavaScript is extremely tolerant of type conversion, but when it doesn't convert, you'll get the result 'NaN', which means 'Not a Number'

// const g = "five" * 2
// console.log(g)

// // When you want to convert a string or a number, this is called an explicit conversion and can be done like this:

// const h = "5"
// console.log(h + 1) //results in concatentation of "5" and "1" to make "51"

// const i = Number("5")
// console.log(i + 1) //rresults in the number 6

// // You can exchange information with the user

// const yourName = prompt("Enter your first name:")
// alert(`Hello, ${yourName}`)

// 1 2 3 

// 4 4 4
// 0 4 12

// 4 3 2
// 4 3 2

// 2 4 0
// 3 4 0


// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);



// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// let monthNumber = Number(prompt("Enter a month number (Example: 2 = Feburary):"))

// if ((monthNumber === 1) || (monthNumber === 3) || (monthNumber === 5) || (monthNumber === 7) || (monthNumber === 8) || (monthNumber === 10) || (monthNumber === 12)) {
//     console.log("This Month has 31 Days")
// } else if (monthNumber === 2) {
//     console.log("This Month has 28 Days and 29 on Leap Years")
// } else if ((monthNumber === 4) || (monthNumber === 6) || (monthNumber === 9) || (monthNumber === 11)) {
//     console.log("This Month has 30 Days")
// } else {
//     console.log("You did not type a number between 1 and 12")
// }


// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (midnight)

// let timeHour = Number(prompt("What hour is it? (0-24)"))
// let timeMinute = Number(prompt("What minute is it? (0-59)"))
// let timeSecond = Number(prompt("What second is it? (0-59)"))

// //check inputs
// if ((timeHour <= 23) && (timeMinute <=59) && (timeSecond <= 59)) {

// add one second

// timeSecond++

// if (timeSecond == 60) {
//     timeSecond = 0
//     timeMinute++
//     if (timeMinute == 60) {
//         timeMinute = 0
//         timeHour++
//         if (timeHour == 24) {
//             timeHour = 0
//         }
//     }
// }

// console.log (`The time with 1 second added is ${timeHour}h${timeMinute}m${timeSecond}s`)

// } else (
//     console.log("You did not enter the correct parameters")
// )



// const arithmetic = (a, b, operator) => ({
//     'add'     : a + b,
//     'subtract': a - b,
//     'multiply': a * b,
//     'divide'  : a / b
//   }[operator]);


//   function add(a,b) {
//       return a + b
//   }


// let objects = {
//     seven: "eleven",
//     elephant: "pink"
// }

// console.log(objects[0])


function wrapValue(n) {
    // let local = n;
    // return () => local;
    return local => local = n * 2;
  }
  
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2

  function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2);

  let asdf = twice
  console.log(twice(5));
  // → 10