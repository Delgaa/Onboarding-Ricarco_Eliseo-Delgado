// Nivel Bajo
// Punto 1
let num = Number(prompt("Un numero del 1 al 100:"))
if (num > 0 && num <= 100) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
} else {
    alert("El numero ingresado es mayor a 100 o menor a 1.")
}

// Punto 2
let number = Number(prompt("Un numero del 1 al 10:"))
if (number > 0 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        const table = i * number
        console.log(`${i} x ${number} = ${table}`)
    }
} else {
    alert("El numero ingresado es mayor a 10 o menor a 1.")
}

// Punto 3
let num1 = Number(prompt("Ingrese un numero, ingrese 0 para terminar"))
let acum = num1
while (num1 != 0) {
    num1 = Number(prompt("otro numero, ingrese 0 para terminar"))
    acum += num1
}
console.log(`El resultado de los numeros ingresados es: ${acum}`)

// Punto 4
let num2 
let acumu = 0
do {
    console.log("Ingrese 0 para terminar")
    num2 = Number(prompt("Ingrese un numero"))
    acumu += num2
    console.log(`El resultado de los numeros ingresados hasta ahora es: ${acumu}`)
} while ( num2 != 0) ;

console.log(acumu)

// Punto 5
const student ={
    name: "Ricardo",
    lastName: "Delgado",
    age: 25,
    pets: ["gea, blinki"],
    heigth: 180
}
console.log("Claves del objeto: ")
for (let key in student) {
    console.log(key)
}

// Punto 6
console.log("Claves del objeto student: ")
for (let key in student) {
    console.log(student[key])
}

// Nivel Medio 
// Punto 1
acum = 1
do {
    num1 = Number(prompt("Ingrese un numero, para adivinar el numero secreto."))
    if (num1 == 3) {
        alert(`¡Has acertado! El número secreto era ${num1} y has hecho ${acum} intentos`)
    } else if (num1 > 3) {
        console.log("El número ingresado es mayor que el secreto")
        acum++
    } else {
        console.log("El número ingresado es menor que el secreto")
        acum++
    }
} while (num1 != 3);

// Punto 2
let numDivi = Number(prompt("Ingrese un numero, para calcular sus divisiores."))
let divis = ""
console.log(`Los divisores del numero ${numDivi} son: `)
for (let i = numDivi; i > 0; i--) {
    if (numDivi % i == 0) {
        divis += `${String(i)}, `
    }
}
console.log(divis)

// Punto 3
let cantiad = 5
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
    console.log(`El numero es ${number} y su doble es ${number * 2}`)
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
    console.log(`Hola, soy ${family.name} ${family.lastName} (${family.member}) tengo ${family.age} años.`)
}

// Nivel Alto
// Punto 1
let numEntry
let numEven = 0
let numOdd = 0
do {
    numEntry = Number(prompt("Ingrese numeros aleatorios 'ingrese 0 para finalizar'."))
    if (numEntry % 2 == 0) {
        numEven++
    } else {
        numOdd++
    }
} while (numEntry != 0);
console.log(`Cantidad de numeros pares ${numEven}`)
console.log(`Cantidad de numeros impares ${numOdd}`)

// Punto 2
let numberHegther = 0
const number3 = [53, 40, 94, 14, 41, 86, 35, 29, 39, 11]
for (let i = 0; i < number.length; i++) {
    if (number[i] > numberHegther) {
        numberHegther = number[i]
    }
}
alert(`El numero mas grande del array es ${numberHegther}`)