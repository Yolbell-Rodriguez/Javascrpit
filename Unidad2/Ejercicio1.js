//Declara 6 variables a las que asignaremos los siguientes valores.
//1357, 135.7, 135e7, 0b1010, 0o1357 y 0x1A57. Una vez creadas muestra por consola
//los valores almacenados y el tipo de dato que nos indica el operador typeof.

let num1 = 1357;
let num2 = 135.5;
let num3 = 135e7;
let num4 = 0b1010;
let num5 = 0o1357;
let num6 = 0x1A57;

let numeros = `n1= ${num1}, nun2= ${num2}, num3=${num3}, num4=${num4}, num5= ${num5}, num6= ${num6}`;

console.log(typeof numeros);
document.write(`n1= ${num1}, nun2= ${num2}, num3=${num3}, num4=${num4}, num5= ${num5}, num6= ${num6}`);