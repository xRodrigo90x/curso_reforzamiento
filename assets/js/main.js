//number = 1, 2, 3
//string = "esto es un string"
//boolean = true - false
//undefined = 
//null = null

// var let const function if
// var nombre = "Rodrigo";
// var nombre = "Pamela";
// console.log(nombre);

// let edad = 20;


// const usuario = {
//     nombre: "ana",
//     edad: 42,
// }

// console.log(usuario);


// let mensaje = "Hola" //scope global, si es global no cambia su valor

// function saludar() {
//     console.log(mensaje);
// }

// saludar()


// function ejemplo() {  // scope funcion, la variable vive dentro de esa funcion 
//     let number = 10
// }

// console.log(number);



// if (true) {  // scope bloque
//     let edad = 25
// }

// console.log(edad);

//nombreUsuario camelCase
//nombre_usuario snake
//NombreUsuario PascalCase

// let nombreUsuario = prompt("Ingrese su nombre")
// let edadUsuario = parseInt(prompt("Ingrese su edad"))

// console.log("El nombre del usuario es " + nombreUsuario + " y su edad es " + edadUsuario)
// console.log(` El nombre del usuario es ${nombreUsuario} y su edad es ${edadUsuario}`);

// let numero1 = parseInt(prompt("Ingrese un numero"));
// let numero2 = parseInt(prompt("Ingrese otro numero"));
// let numero3 = parseInt(prompt("Ingrese un tercer numero"))

// if (numero1 > numero2 &&  numero3 > 100) {
//     console.log(`El numero 1 ${numero1} es mayor que el numero 2 ${numero2}`);
// } else {
//     console.log(`El numer 2 es mayor que el numero 1`);
// }

// function suma(numero1, numero2) {    //Sintaxis convencional
//     let resultado = numero1 + numero2
//     // console.log(resultado);
//     return resultado
// };

// let suma = (numero1, numero2) => {  //funcion flecha ecmaScript 6
//     let resultado = numero1 + numero2
//     console.log(resultado);
//     return resultado
// }

// const operacion = suma(numero1, numero2)

// console.log(operacion);


// let array = ["Hola", "adios", 2, 3, true]
// console.log(array)

// array.push(false)
// console.log(array)

// console.log(array.pop())
// console.log(array)



// for (let index = 0; index < array.length; index++) {
//     const arreglo = array[index]
//     console.log(arreglo)

// }

// let selectorClase = document.getElementsByClassName(row)

let bloque = document.getElementById("bloqueEnBlanco")

bloque.innerHTML = "esto esta escrito con JavaScript"

let bloqueAmarillo = document.getElementById("divAmarillo")

bloqueAmarillo.style.backgroundColor = "red"

bloqueAmarillo.addEventListener("mouseenter", () => {
    bloqueAmarillo.style.width = "150%"
})

bloqueAmarillo.addEventListener("mouseleave", () => {
    bloqueAmarillo.style.width = "50%"
    bloqueAmarillo.style.backgroundColor = "green"
})