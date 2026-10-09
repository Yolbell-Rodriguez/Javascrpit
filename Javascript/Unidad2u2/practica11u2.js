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

/*
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
*/

/*
Dado el siguiente código, muestra por consola el resultado de cantidad || 10 y de cantidad ?? 10 para cada una de las variables.
¿En qué casos dan resultados distintos? Si el valor 0 fuera una cantidad válida, ¿qué operador usarías? Razona la respuesta.
 
let cantidad1;
let cantidad2 = null;
let cantidad3 = 0;
let cantidad4 = "";
let cantidad5 = 5;

console.log("cantidad1 || 10:", cantidad1 ||10, " cantidad1 ?? 10: ", cantidad1?? 10);
console.log("cantidad2 || 10:", cantidad2 ||10, " cantidad2 ?? 10: ", cantidad2?? 10);
console.log("cantidad3 || 10:", cantidad3 ||10, " cantidad3 ?? 10: ", cantidad3?? 10);
console.log("cantidad4 || 10:", cantidad4 ||10, " cantidad4 ?? 10: ", cantidad4?? 10);
console.log("cantidad5 || 10:", cantidad5 ||10, " cantidad5 ?? 10: ", cantidad5?? 10);
*/

/*17-Crea un programa que pida al usuario un número entero de minutos y muestre cuántas horas y minutos son.
 Por ejemplo, para 135 debe mostrar "2 horas y 15 minutos". Solo puedes usar los operadores aritméticos.
Antes de programarlo, comprueba por consola cuánto vale 135 / 60. ¿Qué diferencia hay con Java?

let totalMins  = 135
let minsRest = totalMins %60;
let horas = (totalMins -minsRest) /60;
console.log(horas+ " horas y " + minsRest + " minutos ")
*/

/*
18-Escribe en un comentario qué crees que mostrará cada console.log. Después ejecútalo. Si alguna línea produce un error,
explica por qué y coméntala para que el resto del código pueda ejecutarse.
 
//sale undefined aunque a se eleve vale 0
	console.log(a);
var a = 5;
 
if (true) {
  		var x = 1;
  		let y = 2;
}
console.log(x); //muestra 1
console.log(y); //error porque y no existe fuera del bloque if 
 
for (var i = 0; i < 3; i++) {}
console.log(i);
 // i persiste 


for (let j = 0; j < 3; j++) {}// solo existe dentri del bloque for
console.log(j);
*/

/*
19-Crea un programa que pida un texto al usuario y muestre "Has escrito algo" o "No has escrito nada". En la condición del if solo puedes poner la variable, sin ningún operador de comparación. Prueba con estas entradas y explica qué ocurre en cada caso:
Un texto cualquiera
Dejar el campo vacío
Pulsar Cancelar
Escribir 0
Escribir un espacio

let texto= prompt("Introduce algo");
if(texto){
    console.log("Has dicho algo");
}else{
    console.log("No has introducido nada"); 
}
*/

/*20-Usa el operador ternario (? :) para escribir un código que nos pida un número y nos muestre un mensaje
si es mayor o igual que cero y otro mensaje si es menor estricto que cero.

let numero = Number(prompt("Introduce un numero"));
let mensaje = numero >0? "El numero es mayor o igual que 0": "el numero es menor que 0";
console.log(mensaje); 
*/

/*
21-Crea un programa utilizando la sentencia if else que pida al usuario que introduzca una edad (número entero)
y muestre el siguiente mensaje en función del número introducido:
0-12: Niño
13-26: Joven
27-65: Adulto
>65: Jubilado
Escribe las condiciones con el operador < (por ejemplo, edad < 13) para que ningún valor se quede sin categoría.

let edad = Number(prompt("Introduce tu edad"));
if(edad<0){
	console.log("Edad no validad");	
    }else if(edad<13){
	console.log("eres un niño");
	}else if(edad<27){
		console.log("eres joven");
	}else if(edad<66){
		console.log("Eres un adulto");
	}else{
		console.log("Estas jubilado");
	}

	*/
/*Crea un programa que sea un "pequeño traductor" de nombres de frutas.
A partir de una lista de 5 frutas en español ("Pera", "Manzana", "Piña", "Fresa", "Naranja")
el programa pedirá al usuario el nombre de una fruta y, en el caso de que corresponda al listado,
le mostrará en un cuadro de diálogo la traducción al inglés. En el caso de otro texto mostrará "Fruta desconocida".
 Para este ejercicio debes usar una estructura switch.

let frutas =prompt("Introduce el nombre de una de estas fruta: Pera", "Manzana", "Piña", "Fresa", "Naranja")
switch(frutas){
case 1:
	 frutas = "pera";
	console.log("Tu fruta en ingles es ");
break;

case 2: 
     frutas = "manzana";
console.log(" tu fruta en ingles es apple"); 
break;

case 3: 
      frutas = "piña";
console.log(" tu fruta en ingles es pineapple");
break;

case 4:
	frutas = "fresa";
	console.log("Tu fruta en ingles es  "); 
	break;
case 5:
	frutas = "naranja";
	console.log("tu fruta en ingles es  ");
	break;


}
	*/

/*Ejercicio 28:
Escribe una función que acepte un número indeterminado de argumentos numéricos y devuelva su suma.
Si no recibe ningún argumento, debe devolver 0 (compruébalo con una llamada sin argumentos).
Escribe la función de las tres formas vistas en clase:
1. suma1: declaración tradicional.
2. suma2: función como expresión.
3. suma3: función flecha.


// 1 Declaración tradicional
function suma1(...numeros) {
let total = 0;
for (const num of numeros) {
total += num;
}
return total;
}

// 2 Función como expresión
const suma2 = function(...numeros) {
let total = 0;
for (const num of numeros) {
total += num;
}
return total;
};

// 3 Función flecha
const suma3 = (...numeros) => {
let total = 0;
for (const num of numeros) {
total += num;
}
return total;
};


//empieza en 0 y da 0
console.log(suma1()); // 0
console.log(suma2()); // 0
console.log(suma3()); // 0

//varios argumentos
console.log(suma1(5, 10, 15)); // 30
console.log(suma2(1, 2, 3, 4, 5)); // 15
console.log(suma3(100, 200)); // 300
*/

/*Ejercicio 29 :
Escribe una función operacionesEncadenadas(a, b, op1, op2, mostrar) donde:
a y b son dos números.
op1 y op2 son funciones callback que defines aparte, con la sintaxis que prefieras: sumar(x, y)
devuelve la suma de sus dos argumentos y multiplicar(x, y) devuelve su producto.
mostrar es un callback que recibe los dos resultados y los muestra con console.log.
No se define aparte: se escribe directamente en la llamada como función flecha anónima.
La función operacionesEncadenadas debe:
Aplicar op1 a a y b.
Aplicar op2 al resultado anterior y a b.
Llamar a mostrar pasándole los dos resultados.
Ejemplo: operacionesEncadenadas(3, 4, sumar, multiplicar, (r1, r2) => ...) debe mostrar por consola
que el primer resultado es 7 y que el segundo es 28 (7 × 4).
Después, sin modificar operacionesEncadenadas, llámala de nuevo pasando como op2 una
función flecha anónima que calcule otra operación, por ejemplo la división.
*/ 
function suma(x,y){
	return x+y;
}

function multiplicar(x,y){
	return x*y;
}

function operacionesEncadenadas(a,b, op1, op2, mostrar){
	 const r1 = op1(a, b);
	 const r2 = op2(r1,b);
	 mostrar(r1,r2);
}

operacionesEncadenadas(3, 4,suma,multiplicar, (r1,r2)=>{
	console.log(`El primer resultado es ${r1} y el segundo es ${r2}`);});

operacionesEncadenadas(3,4,suma,(x, y) => x/y, (r1,r2) => {
	console.log(`el primer resultado es ${r1} y el segundo es ${r2}`);});

