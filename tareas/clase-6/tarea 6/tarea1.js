/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let $formulario = document.querySelector("form");
let $botonAgregarFamiliares = document.querySelector("#agregarFamiliares");
let $botonCalcular=document.querySelector("#calcular");
let arrayEdadesFamiliares=[];
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
    $inputEdadFamiliar.id= `inputEdadFamiliar${i}`
    $inputEdadFamiliar.className=`inputEdadesFamiliares`
    $inputEdadFamiliar.placeholder = "ingresar Edad";
    $div.appendChild($labelFamiliar);
    $div.appendChild($inputEdadFamiliar);
    $formulario.appendChild($div);
  }
}
function convertirElementosaA_Arrays(edadesFamiliares) {
  for (let i = 0; i < edadesFamiliares.length; i++) {
    arrayEdadesFamiliares.push(Number(edadesFamiliares[i].value));
  }
  return arrayEdadesFamiliares
}
function calcularFamiliarMenor(arrayEdadesFamiliares) {
  familiarMenor = arrayEdadesFamiliares[0];
  for (let i = 1; i < arrayEdadesFamiliares.length; i++) {
    if (arrayEdadesFamiliares[i] < familiarMenor) {
      familiarMenor = arrayEdadesFamiliares[i];
    }
  }
  return familiarMenor
}
function calcularFamiliarMayor(arrayEdadesFamiliares) {
  familiarMayor = arrayEdadesFamiliares[0];
  for (let i = 1; i < arrayEdadesFamiliares.length; i++) {
    if (arrayEdadesFamiliares[i] > familiarMayor) {
      familiarMayor = arrayEdadesFamiliares[i];
    }
  }
  return familiarMayor
}
function calcularPromedioEdadFamiliares(arrayEdadesFamiliares) {
  promedioEdadFamiliares =
    arrayEdadesFamiliares.reduce((acc, act) => acc + act, 0) / arrayEdadesFamiliares.length;
    return promedioEdadFamiliares
}



$botonAgregarFamiliares.onclick = function (e) {
    e.preventDefault;
    let $cantidadFamiliares = document.querySelector("#cantidadFamiliares").value;
    //eliminarDiv();
    crearInput($cantidadFamiliares);
  };

  $botonCalcular.onclick= function(e){
   e.preventDefault
    let $edadesFamiliares=document.querySelectorAll(".inputEdadesFamiliares");
    convertirElementosaA_Arrays($edadesFamiliares);
    calcularFamiliarMenor(arrayEdadesFamiliares);
    calcularFamiliarMayor(arrayEdadesFamiliares);
    calcularPromedioEdadFamiliares(arrayEdadesFamiliares)

    console.log();
  }