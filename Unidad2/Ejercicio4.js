//Pide al usuario que te indique su nombre, apellidos ,  edad y un número del 1 al 10. Almacena
//cada dato en una variable diferente.  A continuación muestra la siguiente información.
//Por consola una frase que incluya su nombre , apellidos y la edad.
//En el documento html incluye con formato h3 la misma información.
//En un alert muestra la siguiente información “Dentro de número años tendras x años”.
//Ayuda: usa los backticks para crear un template literal que te permita hacer este ejercicio

let nombre = prompt("Introduce tu nombre:");
let apellidos = prompt("Introduce tus apellidos:");
let edad = Number(prompt("Introduce tu edad:"));
let numero = Number(prompt("Introduce un número del 1 al 10:"));


console.log(`${nombre} ${apellidos} tiene ${edad} años`);
document.write(`${nombre} ${apellidos} tiene ${edad} años`);
alert(`Dentro de ${numero} años tendrás ${edad + numero} años`);