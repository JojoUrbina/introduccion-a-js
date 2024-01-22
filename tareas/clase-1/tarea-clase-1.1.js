// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

// solucion sencilla 
/*const anioActual=Number(prompt("Indicar año actual"));
const anioNacimiento=Number(prompt("indicar año nacimiento"));
function calcularEdad(anioActual,anioNacimiento) {
    return anioActual-anioNacimiento
 }
 let edadActual=calcularEdad(anioActual,anioNacimiento)
 console.log(`tu edad actual es ${edadActual}`)
*/


//solucion mas detallada para practicar 

const anioActual = Number(prompt("Indique año actual"));
const anioNacimiento = Number(prompt("indique año de nacimiento"));

function calcularEdad(anioActual, anioNacimiento) {
  let edadUsuario = anioActual - anioNacimiento;

  if (verificarSiCumplio()) {
    return edadUsuario;
  } else {
    return edadUsuario - 1;
  }
}

function verificarSiCumplio() {
  const mesActual = Number(prompt("Escriba el mes actual"));
  const mesNacimiento = Number(prompt("Escriba el mes de su nacimiento"));
  if (mesActual > mesNacimiento) {
    return true;
  } else if (mesActual === mesNacimiento) {
    const diaActual = Number(prompt("Escribe el dia Actual"));
    const diaDeNacimiento = Number(prompt("Indique el dia de su nacimiento"));

    if (diaActual >= diaDeNacimiento) {
      return true;
    } else {
      const diasParaCumlir = diaDeNacimiento - diaActual;

      alert("te faltan " + diasParaCumlir + " dias para cumplir años");
      return false;
    }
  } else {
    return false;
  }
}

function indicarEdad(edadUsuario) {
  return "Tu edad actual es " + edadUsuario;
}

let edadUsuario = calcularEdad(anioActual, anioNacimiento);

alert(indicarEdad(edadUsuario));

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const mesesPorAño = 12;
const diasTrabajoPorMes = 24;
const semanasTrabajoPorMes = 4;
const horasTrabajoPorDia = 8;

function dividir(dividendo, divisior) {
  const cociente = dividendo / divisior;

  return cociente;
}

function multiplicar(multiplicando, multiplicador) {
  const producto = multiplicando * multiplicador;
  return producto;
}

function calcularSalarioMensual(salarioAnual) {
  const salarioMensual = dividir(salarioAnual, mesesPorAño);

  return salarioMensual;
}

function calcularSalarioAnual(salarioMensual) {
  const salarioAnual = multiplicar(salarioMensual, mesesPorAño);

  return salarioAnual;
}
function calcularSalarioSemanal(salarioMensual) {
  const salarioPorSemana = dividir(salarioMensual, semanasTrabajoPorMes);

  return salarioPorSemana;
}

function calcularSalarioDia(salarioMensual) {
  const salarioPorDia = dividir(salarioMensual, diasTrabajoPorMes);

  return salarioPorDia;
}

function calcularSalarioPorHora(salarioMensual) {
  const salarioPorDia = calcularSalarioDia(salarioMensual);
  const salarioPorHora = dividir(salarioPorDia, horasTrabajoPorDia);

  return salarioPorHora;
}
function elegirOpcion() {
  let eleccionUsuario = prompt("Quiere conocer su salario anual o mensual");

  return eleccionUsuario;
}
function saludarUsuario(nombreUsuario) {
  alert("hola " + nombreUsuario);
}

function mostrarResultado(opcion, resultado) {
  let mensajeResultado = "tu salario " + opcion + " es de " + resultado;
  alert(mensajeResultado);
}

saludarUsuario(nombreUsuario);

function iniciarPrograma() {
  const eleccionUsuario = elegirOpcion();

  if (eleccionUsuario == "mensual") {
    let salarioAnual = Number(prompt("Indique su salario anual"));
    mostrarResultado("mensual", calcularSalarioMensual(salarioAnual));
  } else if (eleccionUsuario == "anual") {
    let salarioMensual = Number(prompt("Indique su salario mensual"));
    mostrarResultado("anual", calcularSalarioAnual(salarioMensual));
    mostrarResultado("semanal", calcularSalarioSemanal(salarioMensual));
    mostrarResultado("diario", calcularSalarioDia(salarioMensual));
    mostrarResultado("por hora", calcularSalarioPorHora(salarioMensual));
  } else {
    alert("Elegir una de las opciones");
    iniciarPrograma();
  }
}

let nombreUsuario = prompt("Hola, indica tu nombre de usuario");

iniciarPrograma();
