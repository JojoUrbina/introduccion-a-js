// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
// let nombreUsuario=prompt("cual es tu nombre").toUpperCase()
/*const miNombre="jorman"
const nombreFamiliar="beycker"
let nombreUsuario=prompt("ingrese su nombre de usuario").toLowerCase;
function saludarUsuario(nombreUsuario){
   return console.log(`Hola ${nombreUsuario} `)
}
function saludarTocayo(nombreUsuario) {
    return console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}" `)
}
function SaludarTocayoFamlia(nombreUsuario){
    return console.log(`"Hola  ${nombreUsuario} te llamás igual que mi familiar ${nombreFamiliar} `)
}

if (miNombre==nombreUsuario) {
    saludarTocayo(nombreUsuario)

} else if(nombreFamiliar==nombreUsuario) {
    SaludarTocayoFamlia(nombreUsuario)
    
}else{
    saludarUsuario(nombreUsuario)
}
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
const miEdad=29;
let edadUsuario=Number(prompt("indica tu edad"));
if(edadUsuario==miEdad){
console.log("hola tienes mi edad")
}else{
    console.log(
        miEdad>edadUsuario?"soy mayor que vos":"eres menor que yo"
        )
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
