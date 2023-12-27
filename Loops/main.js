// Nivel Bajo
// Punto 1
let num = Number(prompt("Enter a number from 1 to 100:"))
if (num > 0 && num <= 100) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
} else {
    alert("The number entered is greater than 100 or less than 1.")
}

// Punto 2
let number = Number(prompt("Enter a number from 1 to 10:"))
if (number > 0 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        const table = i * number
        console.log(`${i} x ${number} = ${table}`)
    }
} else {
    alert("The number entered is greater than 10 or less than 1.")
}

// Punto 3
let num1 = Number(prompt("Enter a number (enter 0 to finish):"))
let acum = num1
while (num1 != 0) {
    num1 = Number(prompt("Enter another number (enter 0 to finish):"))
    acum += num1
}
console.log(`The result of the numbers entered is: ${acum}`)

// Punto 4
let num2 
let acumu = 0
do {
    num2 = Number(prompt("Enter a number (enter 0 to finish):"))
    acumu += num2
    console.log(`The result of the numbers entered so far is: ${acumu}`)
} while ( num2 != 0) ;

// Punto 5
const student ={
    name: "Ricardo",
    lastName: "Delgado",
    age: 25,
    pets: ["Gea, Blinki"],
    heigth: 180
}
console.log("Keys of its properties: ")
for (let key in student) {
    console.log(key)
}

// Punto 6
console.log("Properties of student: ")
for (let key in student) {
    console.log(student[key])
}

// Nivel Medio 
// Punto 1
const numberSecret = 9
acum = 1
do {
    num1 = Number(prompt("Enter a number, to guess the secret number."))
    if (num1 == numberSecret) {
        alert(`You're right! The secret number was ${num1} and you have made ${acum} attempts`)
    } else if (num1 > numberSecret) {
        console.log("The number entered is greater than the secret")
        acum++
    } else {
        console.log("The number entered is less than the secret")
        acum++
    }
} while (num1 != numberSecret);

// Punto 2
let numDivi = Number(prompt("Enter a number, to calculate its divisors."))
let divis = ""
console.log(`The divisors of the number ${numDivi} are: `)
for (let i = numDivi; i > 0; i--) {
    if (numDivi % i == 0) {
        divis += `${String(i)}, `
    }
}
console.log(divis)

// Punto 3
let cantiad = parseInt(prompt("Enter a number for ring the bell"))
let ring = ""
function ringBell() {
    console.log("Ding Dong");
    return "Ding Dong,"
}
for (let i = 0; i < cantiad; i++) {
    ring += ringBell()
}
console.log(ring)


// Punto 4
const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
for (let i = 0; i < dates.length; i++) {
    if (dateLimit < dates[i]) {
        console.log(dates[i])
    }
}

// Punto 5
const colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"]
for (const color of colors) {
    console.log(color)
}

// Punto 6
function colorsFor(arayColors) {
    for (const color of arayColors) {
        console.log(color)
    }
}
console.log(colorsFor(colors))

// Punto 7
const numbers = [7, 3, 8, 4, 9]
for (const number of numbers) {
    console.log(`The number is ${number} and its double is ${number * 2}`)
}

// Punto 8
const groupFamily = [
    {
        name: "Antonio",
        lastName: "Benavides",
        age: 51,
        member: "Padre"
    },
    {
        name: "Maria",
        lastName: "Valera",
        age: 45,
        member: "Madre"
    },
    {
        name: "Julio",
        lastName: "Benavides",
        age: 16,
        member: "Hijo"
    },
    {
        name: "Naiara",
        lastName: "Benavides",
        age: 13,
        member: "Hija"
    }
]
for (const family of groupFamily) {
    console.log(`Hello, I am ${family.name} ${family.lastName} (${family.member}) and I am ${family.age} years old.`)
}

// Nivel Alto
// Punto 1
let numEntry
let numEven = 0
let numOdd = 0
do {
    numEntry = Number(prompt("Enter random numbers 'enter 0 to end'."))
    if (numEntry % 2 == 0) {
        numEven++
    } else {
        numOdd++
    }
} while (numEntry != 0);
console.log(`Tolal of even numbers ${numEven}`)
console.log(`Tolal of odd numbers ${numOdd}`)

// Punto 2
let numberHegther = 0
const number3 = [53, 40, 94, 14, 41, 86, 35, 29, 39, 11]
for (let i = 0; i < number.length; i++) {
    if (number[i] > numberHegther) {
        numberHegther = number[i]
    }
}
alert(`The largest number in the array is ${numberHegther}`)