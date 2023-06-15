//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let $formulario = document.querySelector("form");
let $botonAgregarInput = document.querySelector("#agregarInput");
let $botonCalcular = document.querySelector("#calcular");
let $resultado=document.querySelector("#resultado")
function crearInput(cantidadClases) {
  for (let i = 0; i < cantidadClases; i++) {
    let $div = document.createElement("div");
    $div.className = "divInput";
    let $inputHora = document.createElement("input");
    $inputHora.className = "inputHora";
    $inputHora.placeholder = "ingresar horas";
    let $inputMinutos = document.createElement("input");
    $inputMinutos.className = "inputMinutos";
    $inputMinutos.placeholder = "ingresar minutos";
    let $inputSegundos = document.createElement("input");
    $inputSegundos.className = "inputSegundos";
    $inputSegundos.placeholder = "ingresar segundos";
    $div.appendChild($inputHora);
    $div.appendChild($inputMinutos);
    $div.appendChild($inputSegundos);
    $formulario.appendChild($div);
  }
}
function eliminarDiv() {
  let divsExistentes = document.querySelectorAll(".divInput");
  for (let i = 0; i < divsExistentes.length; i++) {
    divsExistentes[i].remove();
  }
}
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

$botonAgregarInput.onclick = function (e) {
  e.preventDefault;
  let $cantidadClases = document.querySelector("#clases").value;
  eliminarDiv();
  crearInput($cantidadClases);
  console.log(document.querySelectorAll(".inputHora"));
};
$botonCalcular.onclick = function (e) {
  e.preventDefault;
  let segundos = sumarSegundos();
  let minutos = sumarMinutos();
  let horas = sumarHoras();
  minutos += Math.floor(segundos / 60);
  let totalHoras = horas + Math.floor(minutos / 60);
  let minutosRestantes= minutos%60
  let segundosRestantes= segundos%60
  $resultado.innerText=`El tiempo total de las clases es de ${totalHoras} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`
};
