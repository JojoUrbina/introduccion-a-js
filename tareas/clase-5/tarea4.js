//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $listaDeNumeros = document.querySelectorAll("li");
let arrayDeNumeros = [];
let promedioArrays = 0;
let numeroMenor;
let numeroMayor;
let numeroRepetido;

function convertirElementosaA_Arrays(listaDeNumeros) {
  for (let i = 0; i < listaDeNumeros.length; i++) {
    arrayDeNumeros.push(Number(listaDeNumeros[i].innerText));
  }
  return arrayDeNumeros
}
function calcularPromedioArray(arrayDeNumeros) {
  promedioArrays =
    arrayDeNumeros.reduce((acc, act) => acc + act, 0) / arrayDeNumeros.length;
    return promedioArrays
}
function calcularNumeroMenor(arrayDeNumeros) {
  numeroMenor = arrayDeNumeros[0];
  for (let i = 1; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] < numeroMenor) {
      numeroMenor = arrayDeNumeros[i];
    }
  }
  return numeroMenor
}
function calcularNumeroMayor(arrayDeNumeros) {
  numeroMayor = arrayDeNumeros[0];
  for (let i = 1; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] > numeroMayor) {
      numeroMayor = arrayDeNumeros[i];
    }
  }
  return numeroMayor
}

function calcularNumeroMasRepetido(arrayDeNumeros) {
  let contadorMaximo = 0;
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    let contador = 0;
    for (let j = 0; j < arrayDeNumeros.length; j++) {
      if (arrayDeNumeros[i] == arrayDeNumeros[j]) {
        contador++;
      }
    }
    if (contador > contadorMaximo) {
      contadorMaximo = contador;
      numeroRepetido = arrayDeNumeros[i];
    }
  }
}

convertirElementosaA_Arrays($listaDeNumeros);
calcularNumeroMenor(arrayDeNumeros);
calcularNumeroMayor(arrayDeNumeros);
calcularPromedioArray(arrayDeNumeros);
calcularNumeroMasRepetido(arrayDeNumeros)


console.log(promedioArrays);
console.log(numeroMenor);
console.log(numeroMayor);
console.log(numeroRepetido);
