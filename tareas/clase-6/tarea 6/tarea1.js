/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let $formulario = document.querySelector("form");
let $botonAgregarFamiliares = document.querySelector("#agregar-familiares");
let $botonCalcular = document.querySelector("#calcular");
let $botonEmpezarDeNuevo = document.querySelector("#empezar-de-nuevo");

$botonAgregarFamiliares.onclick = function (e) {
  let cantidadFamiliares = document.querySelector("#cantidad-familiares").value;

  crearFamiliares(cantidadFamiliares);
  e.preventDefault();
};

function crearFamiliares(cantidadFamiliares) {
  EmpezarDeNuevo();

  let $divFamiliar = document.querySelector("#familiares");
  for (let i = 1; i <= cantidadFamiliares; i++) {
    let $div = document.createElement("div");
    $div.className = "div-familiar";

    let $label = document.createElement("label");
    $label.innerText = `Familiar #${i}: `;

    let $input = document.createElement("input");
    $input.placeholder = "ingresar Edad";
    $input.className = "edad-familiar";

    $div.appendChild($label);
    $div.appendChild($input);
    $divFamiliar.appendChild($div);
  }
}
function EmpezarDeNuevo() {
  document.querySelector("#cantidad-familiares").value = "";
  document.querySelector("#resultado").innerText = "";
  let divsExistentes = document.querySelectorAll(".div-familiar");
  for (let i = 0; i < divsExistentes.length; i++) {
    divsExistentes[i].remove();
  }
}

function extraerEdades() {
  let $edadesFamiliares = document.querySelectorAll(".edad-familiar");
  let edadesExtraidas = [];
  for (let i = 0; i < $edadesFamiliares.length; i++) {
    edadesExtraidas.push(Number($edadesFamiliares[i].value));
  }
  return edadesExtraidas;
}

function calcularFamiliarMenor(edadesFamiliares) {
  let familiarMenor = edadesFamiliares[0];
  for (let i = 1; i < edadesFamiliares.length; i++) {
    if (edadesFamiliares[i] < familiarMenor) {
      familiarMenor = edadesFamiliares[i];
    }
  }
  return familiarMenor;
}

function calcularFamiliarMayor(edadesFamiliares) {
  let familiarMayor = edadesFamiliares[0];
  for (let i = 1; i < edadesFamiliares.length; i++) {
    if (edadesFamiliares[i] > familiarMayor) {
      familiarMayor = edadesFamiliares[i];
    }
  }
  return familiarMayor;
}
function calcularPromedioEdadFamiliares(edadesFamiliares) {
  let total = 0;
  for (let i = 0; i < edadesFamiliares.length; i++) {
    total += edadesFamiliares[i];
  }
  return total / edadesFamiliares.length;
}

$botonCalcular.onclick = function (e) {
  let edadesFamiliares = extraerEdades();

  let familiarMayor = calcularFamiliarMayor(edadesFamiliares);
  let familiarMenor = calcularFamiliarMenor(edadesFamiliares);
  let promedioEdadFamilia = calcularPromedioEdadFamiliares(edadesFamiliares);
  console.log(familiarMayor);
  console.log(familiarMenor);
  console.log(promedioEdadFamilia);

  let $divResultado = document.querySelector("#resultado");

  let resultado = `El familiar con mas edad tiene ${familiarMayor} años,
   el menor tiene ${familiarMenor} ${familiarMenor > 1 ? "años " : "año "}
   y  el promedio de edad en la familia es de ${promedioEdadFamilia} años`;

  $divResultado.innerText = resultado;

  e.preventDefault();
};

$botonEmpezarDeNuevo.onclick = function (e) {
  EmpezarDeNuevo();
  e.preventDefault();
};
