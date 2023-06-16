/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let $formulario = document.querySelector("form");
let $botonAgregarFamiliares = document.querySelector("#agregarFamiliares");
let $botonCalcular = document.querySelector("#calcular");
let $resultado = document.querySelector("#resultado");
let $botonEmpezarDeNuevo = document.createElement("button");
$botonEmpezarDeNuevo.textContent = "Empezar de nuevo";
$botonEmpezarDeNuevo.type="button"
let arrayEdadesFamiliares = [];
let familiarMenor;
let familiarMayor;
let promedioEdadFamiliares;

function crearInput(cantidadFamiliares) {
  for (let i = 1; i <= cantidadFamiliares; i++) {
    let $div = document.createElement("div");
    $div.className = "divInput";
    let $labelFamiliar = document.createElement("label");
    $labelFamiliar.innerText = `familiar ${i}: `;
    $labelFamiliar.htmlFor = `inputEdadFamiliar${i}`;
    let $inputEdadFamiliar = document.createElement("input");
    $inputEdadFamiliar.id = `inputEdadFamiliar${i}`;
    $inputEdadFamiliar.className = `inputEdadesFamiliares`;
    $inputEdadFamiliar.placeholder = "ingresar Edad";
    $div.appendChild($labelFamiliar);
    $div.appendChild($inputEdadFamiliar);
    $formulario.appendChild($div);
  }
 
  $formulario.appendChild($botonEmpezarDeNuevo);
}

function EmpezarDeNuevo(e) {
  $resultado.innerText = "";
  familiarMenor=0
  familiarMayor=0
  promedioEdadFamiliares=0
  $botonEmpezarDeNuevo.remove()
  let divsExistentes = document.querySelectorAll(".divInput");
  for (let i = 0; i < divsExistentes.length; i++) {
    divsExistentes[i].remove();
  }
}

function convertirElementosaA_Arrays(edadesFamiliares) {
  for (let i = 0; i < edadesFamiliares.length; i++) {
    arrayEdadesFamiliares.push(Number(edadesFamiliares[i].value));
  }
  return arrayEdadesFamiliares;
}
function calcularFamiliarMenor(arrayEdadesFamiliares) {
  familiarMenor = arrayEdadesFamiliares[0];
  for (let i = 1; i < arrayEdadesFamiliares.length; i++) {
    if (arrayEdadesFamiliares[i] < familiarMenor) {
      familiarMenor = arrayEdadesFamiliares[i];
    }
  }
  return familiarMenor;
}
function calcularFamiliarMayor(arrayEdadesFamiliares) {
  familiarMayor = arrayEdadesFamiliares[0];
  for (let i = 1; i < arrayEdadesFamiliares.length; i++) {
    if (arrayEdadesFamiliares[i] > familiarMayor) {
      familiarMayor = arrayEdadesFamiliares[i];
    }
  }
  return familiarMayor;
}
function calcularPromedioEdadFamiliares(arrayEdadesFamiliares) {
  promedioEdadFamiliares = Number(
    arrayEdadesFamiliares.reduce((acc, act) => acc + act, 0) /
      arrayEdadesFamiliares.length
  );
  return promedioEdadFamiliares;
}


$botonEmpezarDeNuevo.onclick=function (e) {
  e.preventDefault
  EmpezarDeNuevo()
  document.querySelector("#cantidadFamiliares").value=""
}

$botonAgregarFamiliares.onclick = function (e) {
  e.preventDefault;
  EmpezarDeNuevo();
  let $cantidadFamiliares = document.querySelector("#cantidadFamiliares").value;
  crearInput($cantidadFamiliares);
};

$botonCalcular.onclick = function (e) {
  e.preventDefault;
  let $edadesFamiliares = document.querySelectorAll(".inputEdadesFamiliares");
  convertirElementosaA_Arrays($edadesFamiliares); 
  familiarMayor=calcularFamiliarMayor(arrayEdadesFamiliares)
  familiarMenor=calcularFamiliarMenor(arrayEdadesFamiliares)
  promedioEdadFamiliares=calcularPromedioEdadFamiliares(arrayEdadesFamiliares);

  $resultado.innerText = `El familiar con mas edad tiene ${familiarMayor} años, el menor tiene ${familiarMenor} ${
    familiarMenor > 1 ? "años " : "año "
  }y  el promedio de edad en la familia es de ${promedioEdadFamiliares} años`;
};
