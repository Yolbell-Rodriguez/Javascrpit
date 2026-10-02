/*11¿Cuáles son los resultados de estas expresiones?. Anotalo en un comentario antes de ejecutarlo
y luego compruébalo mostrándolo por consola.

// 1. Como empieza con texto vacio "" lo junta todo como texto -> "10"
console.log("" + 1 + 0);

// 2. Al haber un menos - convierte el texto a numero: 0 - 1 + 0 = -1
console.log("" - 1 + 0);

// 3. true vale 1 y false vale 0 asi que 1 + 0 = 1
console.log(true + false);

// 4. El "3" pasa a numero para poder dividir: 6 / 3 = 2
console.log(6 / "3");

// 5. Los dos textos pasan a numeros para multiplicar: 2 * 3 = 6
console.log("2" * "3");

// 6. Suma 4 + 5 = 9 y luego le pega el texto "px"  "9px"
console.log(4 + 5 + "px");

// 7. Como empieza por "$", lo pega todo como texto  "$45"
console.log("$" + 4 + 5);

// 8. El menos convierte "4" a numero  4 - 2 = 2
console.log("4" - 2);

// 9. "4px" no se puede pasar a numero, asi que da error: NaN
console.log("4px" - 2);

// 10. Al haber un +, pega el 5 al final del texto  " -9 5"
console.log(" -9 " + 5);

// 11. El menos pasa los textos a numeros  -9 - 5 = -14
console.log(" -9 " - 5);

// 12. null cuenta como 0 en las sumas  0 + 1 = 1
console.log(null + 1);

// 13. undefined no se puede sumar con numeros  NaN
console.log(undefined + 1);

// 14. Los espacios y saltos de linea cuentan como 0 -> 0 - 2 = -2
console.log(" \t \n" - 2);
*/


/*12Arregla el código del ejemplo para que el resultado sea 3.
let a= prompt("introduce el primer numero", 1);
let b = prompt("introduce el segundo numero", 2);
let suma= (Number(a)+Number(b));
alert(suma);*/


/*13¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
let a = 1, b = 1;
let c = ++a; // c=2
let d = b++; // b=1*/


/*
console.log(5 > 4); // true
console.log("apple" > "pineapple");// false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false
*/


// Expresión 1: "5" + 3
// Resultado esperado: "53"
// Tipo esperado: string
console.log("5" + 3);
console.log(typeof("5" + 3));

// Expresión 2: "5" - 3
// Resultado esperado: 2
// Tipo esperado: number
console.log("5" - 3);
console.log(typeof("5" - 3));

// Expresión 3: "5" * "2"
// Resultado esperado: 10
// Tipo esperado: number
console.log("5" * "2");
console.log(typeof("5" * "2"));

// Expresión 4: true + 1
// Resultado esperado: 2
// Tipo esperado: number
console.log(true + 1);
console.log(typeof(true + 1));

// Expresión 5: "3" + 4 + 5
// Resultado esperado: "345"
// Tipo esperado: string
console.log("3" + 4 + 5);
console.log(typeof("3" + 4 + 5));

// Expresión 6: 3 + 4 + "5"
// Resultado esperado: "75"
// Tipo esperado: string
console.log(3 + 4 + "5");
console.log(typeof(3 + 4 + "5"));
