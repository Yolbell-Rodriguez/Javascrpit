//Pide al usuario dos números con prompt() sin convertirlos. Muestra por consola 
//el resultado de sumarlos con el operador +. A continuación, convierte ambos valores a Number
// y vuelve a sumarlos, mostrando ahora el resultado correcto.


let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");


console.log("Suma sin convertir: " + (num1 + num2));


num1 = Number(num1);
num2 = Number(num2);


console.log("Suma correcta: " + (num1 + num2));