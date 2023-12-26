// Nivel Bajo
// Punto 1
let myName = "Ricardo"
console.log( myName )

// Punto 2
let myLastName = "Delgado"

// Punto 3
let myAge = 25

// Punto 4
let myPet = "Gea"

// Punto 5
let petAge = 5

// Punto 6
let fullName = myName + " " + myLastName

// Punto 7
let presentationText = fullName + " " + myAge + " " + myPet + " " + petAge
console.log( presentationText )

// Nivel Medio
// Punto 1
let sumAges = myAge + petAge

let restAges = myAge - petAge

let productAges = myAge * petAge

let divisionAges = myAge / petAge

// Punto 2
let student = {
    name: "Ricardo",
    lastName: "Delgado",
    age: 25,
    course: "Programming",
    height: 180 + " cm"
}

console.table(student)

console.log(student.name)
console.log(student.lastName)
console.log(student.age)
console.log(student.course)
console.log(student.height)

// Punto 3
let pet = {
    name: "Gea",
    animal: "gato",
    age: 5,
    race: "Siamés",
    hobby: "Sleep",
}

console.table(pet)

console.log(pet.name)
console.log(pet.animal)
console.log(pet.age)
console.log(pet.race)
console.log(pet.hobby)

// Punto 4
let fruit = [ "Apple", "Mango", "Watermelon", "Banana", "Pear" ]

console.log(fruit)

console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])
console.log(fruit[4])

// Nivel Alto
// Punto 1
let iamAdult = Number(prompt("Enter your age:")) >= 18
console.log(`I am adult: ${iamAdult}`)

// Punto 2
let numbers = [62, 84, 16, 49, 38]

console.log(numbers)

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])

// Punto 3

let family = [
    {
        name: "Ramona",
        age: 50
    },
    {
        name: "Angel",
        age: 21
    },
    {
        name: "Felix",
        age: 27
    }, 
    {
        name: "walter",
        age: 29
    }, 
    {
        name:"Ruth",
        age: 31
    }
]
console.log(family)

console.log(family[0])
console.log(family[1])
console.log(family[2])
console.log(family[3])
console.log(family[4])

// Punto 4
let randomText = `${fruit[1]} ${numbers[3]} ${family[4].name}`
console.log(randomText)