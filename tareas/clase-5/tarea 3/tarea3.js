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
function crearVideo(cantidadClases) {
  for (let i = 0; i < cantidadClases; i++) {
    let $div = document.createElement("div");
    $div.className = "divInput";
    let $inputHora = document.createElement("input");
    $inputHora.className = "input-horas";
    $inputHora.placeholder = "ingresar horas";
    let $inputMinutos = document.createElement("input");
    $inputMinutos.className = "input-minutos";
    $inputMinutos.placeholder = "ingresar minutos";
    let $inputSegundos = document.createElement("input");
    $inputSegundos.className = "input-segundos";
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

function sumarTiempo(tiempo) {
  let tiempoTotal = 0;
  let arrayTiempo = document.querySelectorAll(`.input-${tiempo}`);
  for (let i = 0; i < arrayTiempo.length; i++) {
    tiempoTotal += Number(arrayTiempo[i].value);
  }
  return tiempoTotal;
}

$botonAgregarInput.onclick = function (e) {
  
  let $cantidadClases = document.querySelector("#clases").value;
  eliminarDiv();
  crearVideo($cantidadClases);
  e.preventDefault();

};
$botonCalcular.onclick = function (e) {
  
  let segundos = sumarTiempo("segundos");
  let minutos = sumarTiempo("minutos");
  let horas = sumarTiempo("horas");
  minutos += Math.floor(segundos / 60);
  let totalHoras = horas + Math.floor(minutos / 60);
  let minutosRestantes= minutos%60
  let segundosRestantes= segundos%60
  $resultado.innerText=`El tiempo total de las clases es de ${totalHoras} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`
  e.preventDefault();
};
