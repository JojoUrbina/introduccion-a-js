// // TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

// for(let i =3;i<22;i=i+3){
//     console.log(i)
// }


// // TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
// //       diez a uno.
// let numeros=[]
// let diez=10
// let uno=1
// while(diez>=uno){
//     numeros.push(diez)
//     diez--
// }
// console.log(numeros)


// // TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// // Cuenta del 1 al 50 e imprime los números:
// // * Si un número es múltiplo de tres, imprime 'Fizz'.
// // * Si es un múltiplo de 5, imprime 'Buzz'.
// // * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// // * Para todo lo demás, imprime el número mismo.
// // NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// // Calcula el resto al dividir.
// // 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// // 16% 4 = 0 - en 16 tenemos 4 * 4
// // 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.
// for (let index = 1; index < 50; index++) {
//     if ((!(index%5))&&(!(index%3))){
//      console.log("fizzbuzz")
//      }
//     else if (!(index%3)) {
//      console.log("fizz")
//     } else if(!(index%5)) {
//         console.log("buzz")
//     }
//     else{console.log(index)}
//     }


// // Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// // ej.: calcularPromedio([10,5,4,2,8])
// const numeros =[10,5,4,2,8]
// function calcularPromedio(array){

//    let totalNumeros=array.reduce((acc,act)=>acc+act,0)
// return totalNumeros/array.length
// }
// console.log(calcularPromedio(numeros))