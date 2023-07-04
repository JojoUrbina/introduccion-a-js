function obtenerMayorNumero(numeros) {
  let mayorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorNumero) {
      mayorNumero = numeros[i];
    }
  }

  return mayorNumero;
}

function obtenerMenorNumero(numeros) {
  let menorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }

  return menorNumero;
}

function obtenerPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }

  return (acumulador / numeros.length).toFixed(2);
}
function extraerNumeros(listaDeNumeros) {
  let numerosExtraidos=[]
  for (let i = 0; i < listaDeNumeros.length; i++) {
      if (listaDeNumeros[i].value) {
          numerosExtraidos.push(Number(listaDeNumeros[i].value));
      }
  }
  return numerosExtraidos
}