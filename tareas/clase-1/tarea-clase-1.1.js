// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

// const anioActual=Number(prompt("Indicar año actual"));
// const anioNacimiento=Number(prompt("indicar año nacimiento"));
// function calcularEdad(anioActual,anioNacimiento) {
//     return anioActual-anioNacimiento
// }
// let edadActual=calcularEdad(anioActual,anioNacimiento)
// console.log(`tu edad actual es ${edadActual}`)

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularEdad(anioActual,mesActual,anioNacimiento) {
    const edadUsuario= anioActual-anioNacimiento

    return edadUsuario
}
const anioActual=Number(prompt("indique año actual"))
const mesActual=Number(prompt("Escriba el mes actual"))
const anioNacimiento=Number(prompt("indique año de nacimiento"))
const mesNacimiento=Number(prompt("Escriba el mes de su nacimiento"))

let edadUsuario=calcularEdad(anioActual,mesActual,anioNacimiento)
alert(edadUsuario)

