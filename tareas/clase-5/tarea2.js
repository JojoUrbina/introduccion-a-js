// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

let $button = document.querySelector("button");
let $bienvenida = document.querySelector("#bienvenida");
let $datosUsuario = document.querySelector("#resultado");

$button.onclick = function () {
  let $primerNombreUsuario = document.querySelector("#primerNombre").value;
  let $segundoNombreUsuario = document.querySelector("#segundoNombre").value;
  let $apellidoUsuario = document.querySelector("#apellido").value;
  let $edadUsuario = document.querySelector("#edad").value;

  $bienvenida.innerText = "Bienvenid@ " + $primerNombreUsuario;
  $datosUsuario.innerText=`
  hola ${$primerNombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario} de ${$edadUsuario} años
  `
  return false
};
