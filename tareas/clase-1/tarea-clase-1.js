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
let salarioClienteAnual = Number(prompt("indica salario anual"));
let salarioClienteMensual = Number(prompt("indica salario mensual"));
const DIAS_POR_MES=30;
const DIAS_POR_SEMANA=7;
const mesesTrabajoPorAnio = 12;//Se prodria preguntar al cliente
const diasTrabajoPorSemana = 5;//pero para no hacerlo tan largo
const diasTrabajoPorMes = Math.round(diasTrabajoPorSemana * (DIAS_POR_MES / DIAS_POR_SEMANA));
const horasTrabajoPorDia = 8;

function calcularSalarioAnual(salarioClienteMensual) {
    return salarioClienteMensual * mesesTrabajoPorAnio;
}

function calcularSalarioMensual(salarioClienteAnual) {
  return salarioClienteAnual / mesesTrabajoPorAnio;
}

function calcularSalarioSemana(salarioClienteMensual) {
  return salarioClienteMensual / diasTrabajoPorSemana;
}
function calcularSalarioDiario(salarioClienteMensual) {
  return salarioClienteMensual / diasTrabajoPorMes;
}
function calcularSalarioHoras(salarioClienteMensual) {
  return calcularSalarioDiario(salarioClienteMensual) / horasTrabajoPorDia;
}


console.log(`
el salario mensual es : 
${calcularSalarioMensual(salarioClienteAnual)}
el anual es :
${calcularSalarioAnual(salarioClienteMensual)}
el semanal es :
${calcularSalarioSemana(salarioClienteMensual)}
el diario es :
${calcularSalarioDiario(salarioClienteMensual)}
por hora es:
${calcularSalarioHoras(salarioClienteMensual)}
`
);
