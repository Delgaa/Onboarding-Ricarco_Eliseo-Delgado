// Nivel Bajo
// Punto 1
let num1 = 4
let num2 = 5

if ( num1 > num2 ) {
    console.log(num1)
}else{
    console.log(num2)
}

// Punto 2
if ( num1 > num2 ) {
    console.log(num1)
}else if( num1 < num2 ){
    console.log(num2)
}else{
    console.log("The numbers are equal")
}

// Punto 3
if( num1 == num2 ){
    console.log("The numbers are equal")
}else{
    console.log("The numbers are different")
}

// Punto 4
let date1 = "2018-9-2"
let date2 = "2023-7-5"

if ( date1 > date2 ) {
    console.log(`The date ${date1} is greater than ${date2}`)
}else if (date1 == date2) {
    console.log("The dates are the same")
}else{
    console.log(`The date ${date2} is greater than ${date1}`)
}

// Punto 5
date1 = "2010-5-17"
date2 = "2006-12-30"

if ( date1 > date2 ) {
    console.log(`The date ${date1} is greater than ${date2}`)
}else if (date1 == date2) {
    console.log("The dates are the same")
}else{
    console.log(`The date ${date2} is greater than ${date1}`)
}

// Punto 6
let number1 = 5
let number2 = 7
let number3 = 9

if ( number1 > number2 && number1 > number3) {
    console.log(`The number ${number1} is the largest`)
}else if (number2 > number1 && number2 > number3) {
    console.log(`The number ${number2} is the largest`)
} else {
    console.log(`The number ${number3} is the largest`)
}

// Nivel Medio
// Punto 1
let color = prompt("Choose a color between red, green or blue:")
switch (color) {
    case "blue":
        console.log("The color of the sea.")
        break;
    case "red":
        console.log("The color of passion")
        break;
    case "greed":
        console.log("The color of nature")
        break;
    default:
        console.log("Incorrect color entered")
        break;
}

// Punto 2
const numb1 = Number(prompt("Enter the first number from '1 to 100'."))
const numb2 = Number(prompt("Enter the second number from '1 to 100'."))
const operation = prompt( "Write an operation to perform (without capital letters): addition, subtraction, division, multiplication:" )


if (( numb1 >= 1 && numb2 >= 1 )&&( numb1 <= 100 && numb2 <= 100 )){
    switch (operation) {
        case "addition":
            console.log(`The result of the sum of ${numb1} and ${numb2} is: ${numb1 + numb2}`)
            break;
        case "subtraction":
            console.log(`The result of the subtraction of ${numb1} and ${numb2} is: ${numb1 - numb2}`)
            break
        case "multiplication":
            console.log(`The result of the multiplying of ${numb1} and ${numb2} is: ${numb1 * numb2}`)
            break
        case "division":
            console.log(`The result of the division of ${numb1} and ${numb2} is: ${numb1 / numb2}`)
            break
        default:
            console.log("Invalid opertation try again")
            break;
    }
}else{
    console.log("The values ​​entered exceed or are less than the proposed one")
}

// Punto 3
let person1 ={
    name: "Juan",
    age: 39,
    height: 1.89
}
let person2 ={
    name:"Andres",
    age: 40,
    height: 1.80
}
if (person1.height > person2.height && person1.age > person2.age) {
    console.log( `${person1.name} is taller and older than ${person2.name}` )
}else if (person1.height < person2.height && person1.age < person2.age) {
    console.log( `${person2.name} is taller and older than ${person1.name}` )
} else if ((person1.height > person2.height && person1.age < person2.age)) {
    console.log( `${person1.name} it is higher than ${person2.name} but ${person2.name} it is bigger` )
} else {
    console.log( `${person2.name} it is higher than ${person1.name} but ${person1.name} it is bigger` )
}

// Punto 4
let name = prompt("Enter your full name")
let age = Number(prompt("Enter your age"))
let height = Number(prompt("Enter your height in centimeters"))
let vision = prompt("Enter your vision quality")

if (age >= 18 && height > 110 && vision >= 8) {
    console.log("Are you qualified to drive")
} else {
    console.log("You are not qualified to drive")
}

// Punto 5
const age_tip = Number(prompt("Enter your age")) 

if (age_tip >= 0 && age_tip <= 12) {
    alert("Infant")
} else if (age_tip >= 13 && age_tip <= 18){
    alert("Adolescent")
}else if (age_tip >= 19 && age_tip <= 45) {
    alert("Olden Young")
} else if (age_tip >= 45 && age_tip <= 100) {
    alert("Elderly")
} else {
    alert("Is he really that old?")
}

// Punto 6
const number_tip = Number(prompt("Enter a number from '1 to 3'."))

switch (number_tip) {
    case 1:
        alert(`The number entered is ${number_tip}`)
        alert(`Twice the number entered is ${2 * number_tip}`)
        alert(`Three times the number entered is ${3 * number_tip}`)
        break;
    case 2:
        alert(`The number entered is ${number_tip}`)
        alert(`Twice the number entered is ${2 * number_tip}`)
        alert(`Three times the number entered is ${3 * number_tip}`)
        break;
    case 3:
        alert(`The number entered is ${number_tip}`)
        alert(`Twice the number entered is ${2 * number_tip}`)
        alert(`Three times the number entered is ${3 * number_tip}`)
        break;
    default:
        alert("That value is not allowed")
        break;
}

// Dificultad Alta
// Punto 1
let ticket
let pass
let money 
const name_customer = prompt("Enter your full name")

if (name_customer == "nombre") {
    alert(`Welcome ${name_customer}`)
} else {
    pass = confirm("Do you have a 'vip' or 'normal' pass?")
    if (pass) {
        alert("Welcome, you have a 'vip' pass. ")
    } else {
        ticket = confirm("Do you have ticket?")
        if (ticket) {
        ticket = confirm("You want to use your ticket?")
            if(ticket){
                alert("Welcome, you have used your ticket.")
            }else{
                alert("Goodbye, come back soon.")
            }
        } else {
            ticket = confirm("Do you want to buy?")
            if (ticket) {
                money = Number(prompt("How much is your available money?"))
                if (money > 1000) {
                    alert("Welcome, he purchase was completed successfully.")
                } else {
                    alert("The purchase could not be made")
                }
            } else {
                alert("Goodbye, come back soon.")
            }
        }
    }
}
