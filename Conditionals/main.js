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
const numb1 = Number(prompt("Ingrese el primer numero del '1 al 100'."))
const numb2 = Number(prompt("Ingrese el segundo numero del '1 al 100'."))
const operation = prompt( "Escriba una operación a realizar(sin mayúsculas): suma, resta, división, multiplicación" )


if (( numb1 >= 1 && numb2 >= 1 )&&( numb1 <= 100 && numb2 <= 100 )){
    switch (operation) {
        case "suma":
            console.log(`El resultado de la suma de ${numb1} y ${numb2} es: ${numb1 + numb2}`)
            break;
        case "resta":
            console.log(`El resultado de la resta de ${numb1} y ${numb2} es: ${numb1 - numb2}`)
            break
        case "multiplicacion":
            console.log(`El resultado de la multiplicación de ${numb1} y ${numb2} es: ${numb1 * numb2}`)
            break
        case "division":
            console.log(`El resultado de la división de ${numb1} y ${numb2} es: ${numb1 / numb2}`)
            break
        default:
            console.log("Operación invalida intente de nuevo")
            break;
    }
}else{
    console.log("Los valores ingresados superan o son menores al propuesto")
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
    console.log( `${person1.name} es mas alto y mayor que ${person2.name}` )
}else if (person1.height < person2.height && person1.age < person2.age) {
    console.log( `${person2.name} es mas alto y mayor que ${person1.name}` )
} else if ((person1.height > person2.height && person1.age < person2.age)) {
    console.log( `${person1.name} es mas alto que ${person2.name} pero ${person2.name} es mas grande` )
} else {
    console.log( `${person2.name} es mas alto que ${person1.name} pero ${person1.name} es mas grande` )
}

// Punto 4
let name = prompt("Ingrese su nombre completo")
let age = Number(prompt("Ingrese su edad"))
let height = Number(prompt("Ingrese su altura en centimetros"))
let vision = prompt("Ingrese su vision")

if (age >= 18 && height > 110 && vision >= 8) {
    console.log("Estás calificado para conducir ")
} else {
    console.log("No estás calificado para conducir ")
}

// Punto 5
const age_tip = Number(prompt("Ingrese su edad")) 

if (age_tip >= 0 && age_tip <= 12) {
    alert("Infantil")
} else if (age_tip >= 13 && age_tip <= 18){
    alert("Adolescente")
}else if (age_tip >= 19 && age_tip <= 45) {
    alert("Joven Mayor")
} else if (age_tip >= 45 && age_tip <= 100) {
    alert("Personas Mayores")
} else {
    alert("¿Es realmente tan viejo?")
}

// Punto 6
const number_tip = Number(prompt("Ingrese un numero del 1 al 3."))

switch (number_tip) {
    case 1:
        alert(`El numero ingresado es ${number_tip}`)
        alert(`El doble del numero ingresado es ${2 * number_tip}`)
        alert(`Tres veces el numero ingresado es ${3 * number_tip}`)
        break;
    case 2:
        alert(`El numero ingresado es ${number_tip}`)
        alert(`El doble del numero ingresado es ${2 * number_tip}`)
        alert(`Tres veces el numero ingresado es ${3 * number_tip}`)
        break;
    case 3:
        alert(`El numero ingresado es ${number_tip}`)
        alert(`El doble del numero ingresado es ${2 * number_tip}`)
        alert(`Tres veces el numero ingresado es ${3 * number_tip}`)
        break;
    default:
        alert("Ese valor no está permitido")
        break;
}

// Dificultad Alta
// Punto 1
let ticket
let pass
let money 
const name_customer = prompt("Ingrese su nombre completo")

if (name_customer == "nombre") {
    alert(`Bienvenido ${name_customer}`)
} else {
    pass = confirm("Posee usted un pase 'vip' o 'normal'?")
    if (pass) {
        alert("Bienvenido, usted tiene el pase 'vip'. ")
    } else {
        ticket = confirm("Tiene usted entrada?")
        if (ticket) {
        ticket = confirm("Desea usar su Entrada?")
            if(ticket){
                alert("Bienvenido, usted a usado su entrada.")
            }else{
                alert("Hasta luego, vuelva pronto.")
            }
        } else {
            ticket = confirm("¿Quiere comprar?")
            if (ticket) {
                money = Number(prompt("Cuanto es su dinero disponible"))
                if (money > 1000) {
                    alert("Bienvenido, la compra se ha realizado exitosamente")
                } else {
                    alert("La compra no se ha podido realizar")
                }
            } else {
                alert("Hasta luego, vuelva pronto.")
            }
        }
    }
}
