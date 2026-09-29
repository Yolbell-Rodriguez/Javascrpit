//Pide al usuario su nombre, una afición y si le gusta programar usando confirm().
// Muestra en un párrafo del documento un texto que combine los tres datos usando un único template literal.


let nombre = prompt("Introduce tu nombre:");
let aficion = prompt("Introduce tu afición:");
let programar = confirm("¿Te gusta programar?");

document.write(`El nombre es ${nombre}, la afición es ${aficion} y me gusta programar es: ${programar}`);