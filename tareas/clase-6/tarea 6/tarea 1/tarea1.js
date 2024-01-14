
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

function extraerNumeros() {
  let $edadesFamiliares = document.querySelectorAll(".edad-familiar");
  let numerosExtraidos = [];
  for (let i = 0; i < $edadesFamiliares.length; i++) {
    numerosExtraidos.push(Number($edadesFamiliares[i].value));
  }
  return numerosExtraidos;
}

function extraerNumeroMenor(edadesFamiliares) {
  let numeroMenor = edadesFamiliares[0];
  for (let i = 1; i < edadesFamiliares.length; i++) {
    if (edadesFamiliares[i] < numeroMenor) {
      numeroMenor = edadesFamiliares[i];
    }
  }
  return numeroMenor;
}

function extraerNumeroMayor(edadesFamiliares) {
  let numeroMayor = edadesFamiliares[0];
  for (let i = 1; i < edadesFamiliares.length; i++) {
    if (edadesFamiliares[i] > numeroMayor) {
      numeroMayor = edadesFamiliares[i];
    }
  }
  return numeroMayor;
}
function calcularPromedio(edadesFamiliares) {
  let total = 0;
  for (let i = 0; i < edadesFamiliares.length; i++) {
    total += edadesFamiliares[i];
  }
  return total / edadesFamiliares.length;
}

$botonCalcular.onclick = function (e) {
  let edadesFamiliares = extraerNumeros();

  let familiarMayor = extraerNumeroMayor(edadesFamiliares);
  let familiarMenor = extraerNumeroMenor(edadesFamiliares);
  let promedioEdadFamilia = calcularPromedio(edadesFamiliares).toFixed(2);
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
