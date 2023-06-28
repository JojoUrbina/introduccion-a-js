/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let $formulario = document.querySelector("form");
let $botonAgregarFamiliares = document.querySelector("#agregar-familiares");
let $botonCalcular = document.querySelector("#calcular");

let $resultado = document.querySelector("#resultado");
//let $botonEmpezarDeNuevo = document.createElement("button");
//$botonEmpezarDeNuevo.textContent = "Empezar de nuevo";
//$botonEmpezarDeNuevo.type = "button";
//let arrayEdadesFamiliares = [];

$botonAgregarFamiliares.onclick = function (e) {
  //EmpezarDeNuevo();
  
  let cantidadFamiliares = document.querySelector("#cantidad-familiares").value;

  crearFamiliares(cantidadFamiliares);
  e.preventDefault();
};


function crearFamiliares(cantidadFamiliares) {
let $divFamiliar=document.querySelector("#familiares")
  for (let i = 1; i <= cantidadFamiliares; i++) {
    
    let $div = document.createElement("div");
    $div.className = "divFamiliar";

    let $label= document.createElement("label");
    $label.innerText = `Familiar #${i}: `;
    
    let $input= document.createElement("input");
    $input.placeholder = "ingresar Edad";
    $input.className="edad-familiar"
   
    $div.appendChild($label);
    $div.appendChild($input);
    $divFamiliar.appendChild($div);
  }

 // $formulario.appendChild($botonEmpezarDeNuevo);
}
function extraerEdades() {
let $edadesFamiliares=document.querySelectorAll(".edad-familiar")
let edadesExtraidas=[];
  for (let i = 0; i < $edadesFamiliares.length; i++) {
    edadesExtraidas.push(Number($edadesFamiliares[i].value));
  }
  return edadesExtraidas;
}












// function calcularFamiliarMenor(arrayEdadesFamiliares) {
//   familiarMenor = arrayEdadesFamiliares[0];
//   for (let i = 1; i < arrayEdadesFamiliares.length; i++) {
//     if (arrayEdadesFamiliares[i] < familiarMenor) {
//       familiarMenor = arrayEdadesFamiliares[i];
//     }
//   }
//   return familiarMenor;
// }
// function calcularFamiliarMayor(arrayEdadesFamiliares) {
//   familiarMayor = arrayEdadesFamiliares[0];
//   for (let i = 1; i < arrayEdadesFamiliares.length; i++) {
//     if (arrayEdadesFamiliares[i] > familiarMayor) {
//       familiarMayor = arrayEdadesFamiliares[i];
//     }
//   }
//   return familiarMayor;
// }
// function calcularPromedioEdadFamiliares(arrayEdadesFamiliares) {
//   promedioEdadFamiliares = Number(
//     arrayEdadesFamiliares.reduce((acc, act) => acc + act, 0) /
//       arrayEdadesFamiliares.length
//   );
//   return promedioEdadFamiliares;
// }





// $botonCalcular.onclick = function (e) {
 
//   let $edadesFamiliares = document.querySelectorAll(".inputEdadesFamiliares");
//   arrayEdadesFamiliares = extraerEdades($edadesFamiliares);
//   calcularFamiliarMayor(arrayEdadesFamiliares);
//   calcularFamiliarMenor(arrayEdadesFamiliares);
//   calcularPromedioEdadFamiliares(arrayEdadesFamiliares);

//   $resultado.innerText = `El familiar con mas edad tiene ${familiarMayor} años, el menor tiene ${familiarMenor} ${
//     familiarMenor > 1 ? "años " : "año "
//   }y  el promedio de edad en la familia es de ${promedioEdadFamiliares} años`;
//   e.preventDefault();

// };


// $botonEmpezarDeNuevo.onclick = function (e) {
//   e.preventDefault;
//   EmpezarDeNuevo();
//   document.querySelector("#cantidadFamiliares").value = "";
//   arrayEdadesFamiliares = [];
// };

// function EmpezarDeNuevo(e) {
//   $resultado.innerText = "";
//   familiarMenor = 0;
//   familiarMayor = 0;
//   promedioEdadFamiliares = 0;
//   $botonEmpezarDeNuevo.remove();
//   let divsExistentes = document.querySelectorAll(".divInput");
//   for (let i = 0; i < divsExistentes.length; i++) {
//     divsExistentes[i].remove();
//   }
// }