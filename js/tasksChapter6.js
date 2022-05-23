// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,

    //Return the character description
    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`
    }
};

aurora.xp = 0

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;


// Execution result
console.log(aurora.describe());


console.log(" ")


// Modeling a dog
// Complete the following program to add the dog object definition.

const dog = {
    name: 'killer',
    breed: 'jack russell',
    size: 'small',

    bark() {
        return "woof, woof, I'm going to bite the shit out of you!"
    }
};



console.log(`${dog.name} is a ${dog.breed} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

console.log(" ")


// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

// const r = Number(prompt("Enter the circle radius:"));
const r = 22

const circle = {
    radius: r,

    circumference() {
        return (2 * r * Math.PI).toFixed(2)
    },

    area() {
        return (r * r * Math.PI).toFixed(2)
    }
}



// Execution result
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);



console.log(" ")

// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

const bankAccount = {
    name: "Alex",
    balance: 0,
    
    credit(c) {
        this.balance += c
        console.log(`Crediting ${c}`)
        console.log(bankAccount.describe())

    },

    debit(d) {
        this.balance -= d
        console.log(`Debiting ${d}`)
        console.log(bankAccount.describe())
    },

    describe() {
        return `"owner: ${this.name}, balance $${this.balance}"`
    }

}

// Execution result
console.log(bankAccount.describe())
bankAccount.credit(250)
bankAccount.debit(80)
