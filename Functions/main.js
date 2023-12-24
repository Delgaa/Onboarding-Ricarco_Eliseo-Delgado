// Nivel Bajo
let number1 = 100
let number2 = 20

function add( param1, param2) {
    let result = param1 * param2
    return result
}
console.log(add(number1, number2))

// Punto 6
const anon = function (param1, param2) {
    let result = param1 * param2
    return result
}

console.log(anon(number1, number2))

// Nivel Medio
// Punto 1
const name = "Ricardo"
function greet(p_name) {
    console.log(`Hola soy ${p_name} y estoy estudiando.`)
}
greet(name)

// Punto 2
let num = 54
let num1 = 34
let restult = function(p_num, p_num1){
    let total = p_num * p_num1
    return total
}

console.log(restult(num, num1))

// Punto 3 
const base = 4
const height = 4
function area(p_base, p_height) {
    let result = (p_base * p_height) / 2
    return result
}
console.log(area(base, height))

// Punto 4
const side1 = 2
const side2 = 5
const side3 = 9
function perimeter(p_side1, p_side2, p_side3) {
    let result = p_side1 + p_side2 + p_side3
    return result
}
console.log(perimeter(side1, side2, side3))

// Punto 5
let priceTotal = function (p_price, p_quantity) {
    let total = p_price * p_quantity
    if (p_quantity >= 20) {
        total = total - 0.2 * total 
        return total
    } else if (p_quantity >= 10) {
        total = total - 0.1 * total 
        return total
    } else {
        return total
    }
}
console.log(priceTotal(100, 11))

// Punto 6
function isAnAdult(p_age) {
    if (p_age >= 18) {
        return "Eres mayor de edad"
    } else {
        return "No eres adulto"
    }
}
console.log(isAnAdult(15))

// Nivel Alto
// Punto 1
function payTax(income_anual) {
    let tax 
    if (income_anual <= 10000) {
        tax = income_anual * 0.1
        return `El impuesto a pagar es: ${tax}`
    } else if (income_anual > 10000 && income_anual <= 20000) {
            tax = income_anual * 0.15
            return `El impuesto a pagar es: ${tax}`
    } else {
        tax = income_anual * 0.20
        return `El impuesto a pagar es: ${tax}`
    }
}
console.log(payTax(23000))

// Punto 2
function dayOfWeek(day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un dia hábil."
        case 6:
        case 7:
            return "Es fin de semana."
        default:
            return "Dia ingresado invalido."
    }
}
console.log(dayOfWeek(4))

// Punto 3
function validatorInf(personalInformation) {

    personalInformation.name = prompt("Ingrese su nombre:")
    if (personalInformation.name == "") {
        console.log("El nombre no puede estar vacío")
        personalInformation.name = prompt("Ingrese su nombre:")

        personalInformation.lastName = prompt("Ingrese su apellido:")
        if (personalInformation.lastName == "") {
            console.log("El apellido no puede estar vacío")
            personalInformation.lastName = prompt("Ingrese su apellido:")

            personalInformation.age = Number(prompt("Ingrese su edad:"))
            if (personalInformation.age == "") {
                console.log("La edad no puede estar vacío")
                personalInformation.age = Number(prompt("Ingrese su edad:"))
            }
        } else {

            personalInformation.age = Number(prompt("Ingrese su edad:"))
            if (personalInformation.age == "") {
                console.log("La edad no puede estar vacío")
                personalInformation.age = Number(prompt("Ingrese su edad:"))
            }
        }
    } else {

        personalInformation.lastName = prompt("Ingrese su apellido:")
        if (personalInformation.lastName == "") {
            console.log("El apellido no puede estar vacío")
            personalInformation.lastName = prompt("Ingrese su apellido:")

            personalInformation.age = Number(prompt("Ingrese su edad:"))
            if (personalInformation.age == "") {
                console.log("La edad no puede estar vacío")
                personalInformation.age = Number(prompt("Ingrese su edad:"))
            }
        } else {

            personalInformation.age = Number(prompt("Ingrese su edad:"))
            if (personalInformation.age == "") {
                console.log("La edad no puede estar vacío")
                personalInformation.age = Number(prompt("Ingrese su edad:"))
            }
        }
    }

    console.log( personalInformation )
}
let miInfo ={
    name: "Ricardo",
    lastName: "Delgado",
    age: 25
}
// validatorInfo(miInfo)

// Punto 4
function greet(p_name) {
    return `Hola, mi nombre es ${p_name}`
}
function calculateAge(p_ageActual, p_ageBirth) {
    let total = p_ageActual - p_ageBirth
    return total
}
function present() {
    let name = prompt("Ingrese su nombre completo:")
    let ageActual = prompt("Ingrese el año actual:")
    let ageBirth = prompt("Ingrese su año de nacimiento:")
    alert(`${greet(name)} y tengo ${calculateAge(ageActual, ageBirth)} años`)
}
present()