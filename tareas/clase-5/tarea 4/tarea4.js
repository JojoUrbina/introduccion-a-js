//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $listaDeNumeros = document.querySelectorAll("li");

function extraerNumeros(listaDeNumeros) {
  let numerosExtraidos = [];

  for (let i = 0; i < listaDeNumeros.length; i++) {
    numerosExtraidos.push(Number(listaDeNumeros[i].innerText));
  }

  return numerosExtraidos;
}

function calcularPromedioNumeros(listaDeNumeros) {
  let totalListaDeNumeros = 0;

  for (let i = 0; i < listaDeNumeros.length; i++) {
    totalListaDeNumeros += listaDeNumeros[i];
  }
  return totalListaDeNumeros / listaDeNumeros.length;
}
function calcularNumeroMenor(listaDeNumeros) {
  let numeroMenorDeLista = listaDeNumeros[0];

  for (let i = 1; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] < numeroMenorDeLista) {
      numeroMenorDeLista = listaDeNumeros[i];
    }
  }
  return numeroMenorDeLista;
}
function calcularNumeroMayor(listaDeNumeros) {
  let numeroMayorDeLista = listaDeNumeros[0];

  for (let i = 1; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] > numeroMayorDeLista) {
      numeroMayorDeLista = listaDeNumeros[i];
    }
  }
  return numeroMayorDeLista;
}

function encontrarNumeroMasRepetido(listaDeNumeros) {
  let contadorMaximo = 0;
  let numeroMasRepetido;

  for (let i = 0; i < listaDeNumeros.length; i++) {
    let contador = 0;
    for (let j = 0; j < listaDeNumeros.length; j++) {
      if (listaDeNumeros[i] == listaDeNumeros[j]) {
        contador++;
      }
    }
    if (contador > contadorMaximo) {
      contadorMaximo = contador;
      numeroMasRepetido = listaDeNumeros[i];
    }
  }

  return numeroMasRepetido;
}

let listaDeNumeros = extraerNumeros($listaDeNumeros);
let promedioNumeros = calcularPromedioNumeros(listaDeNumeros);
let numeroMenor = calcularNumeroMenor(listaDeNumeros);
let numeroMayor = calcularNumeroMayor(listaDeNumeros);
let numeroMasRepetido = encontrarNumeroMasRepetido(listaDeNumeros);

console.log(listaDeNumeros);
console.log(promedioNumeros);
console.log(numeroMenor);
console.log(numeroMayor);
console.log(numeroMasRepetido);
