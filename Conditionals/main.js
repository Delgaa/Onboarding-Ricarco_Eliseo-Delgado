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
    console.log("Los numeros son iguales")
}

// Punto 3
if( num1 == num2 ){
    console.log("Los numeros son iguales")
}else{
    console.log("Los números son diferentes")
}

// Punto 4
let date1 = "2018-9-2"
let date2 = "2023-7-5"

if ( date1 > date2 ) {
    console.log(`La fecha ${date1} es mayor que ${date2}`)
}else if (date1 == date2) {
    console.log("Las fechas son iguales")
}else{
    console.log(`La fecha ${date2} es mayor que ${date1}`)
}

// Punto 5
date1 = "2010-5-17"
date2 = "2006-12-30"

if ( date1 > date2 ) {
    console.log(`La fecha ${date1} es mayor que ${date2}`)
}else if (date1 == date2) {
    console.log("Las fechas son iguales")
}else{
    console.log(`La fecha ${date2} es mayor que ${date1}`)
}

// Punto 6
let number1 = 5
let number2 = 7
let number3 = 9

if ( number1 > number2 && number1 > number3) {
    console.log(`El número ${number1} es el más grande`)
}else if (number2 > number1 && number2 > number3) {
    console.log(`El número ${number2} es el más grande`)
} else {
    console.log(`El número ${number3} es el más grande`)
}

// Nivel Medio
// Punto 1
let color = prompt("Elige un color entre rojo verde o azul")
switch (color) {
    case "azul":
        console.log("El color del mar")
        break;
    case "rojo":
        console.log("El color de la pasion")
        break;
    case "verde":
        console.log("El color de la naturaleza")
        break;
    default:
        console.log("Color ingresado incorrecto")
        break;
}

// Punto 2
