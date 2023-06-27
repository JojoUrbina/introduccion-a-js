function sumarHoras() {
    let total = 0;
    let arrayHoras = document.querySelectorAll(".inputHora");
    for (let i = 0; i < arrayHoras.length; i++) {
      total += Number(arrayHoras[i].value);
    }
    return total;
  }
  function sumarMinutos() {
    let total = 0;
    let arrayMinutos = document.querySelectorAll(".inputMinutos");
    for (let i = 0; i < arrayMinutos.length; i++) {
      total += Number(arrayMinutos[i].value);
    }
    return total;
  }
  function sumarSegundos() {
    let total = 0;
    let arraySegundos = document.querySelectorAll(".inputSegundos");
    for (let i = 0; i < arraySegundos.length; i++) {
      total += Number(arraySegundos[i].value);
    }
    return total;
  }

  function sumarTiempo(tiempo) {
    let tiempoTotal = 0;
    let arrayTiempo = document.querySelectorAll(`.input-${tiempo}`);
    for (let i = 0; i < arrayTiempo.length; i++) {
      tiempoTotal += Number(arrayTiempo[i].value);
    }
    return tiempoTotal;
  }
