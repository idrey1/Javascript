/*
	Métodos más importantes para trabajar con numeros
*/

/*
	📌 .toString()
*/
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/
const numero2 = 3.1415;
console.log(numero2.toFixed(10));

/*
	📌 .parseInt()
	Intenta transformar un valor a un entero.
*/
// Muy útil para transformar de una cadena de texto a numero.
// Por ejemplo al trabajar con formularios.
const numero3 = parseInt(prompt('Escribe un numero'));
const numero4 = parseInt(prompt('Escribe un numero'));
console.log(numero3 + numero4);

/*
	📌 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/
const numero5 = parseFloat(prompt('Escribe un numero'));
const numero6 = parseFloat(prompt('Escribe un numero'));
console.log(numero5 + numero6);

/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/
const numero7=  Math.random();
console.log(numero7);

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/
console.log(Math.floor(10.1)); // 10
console.log(Math.floor(10.99)); // 10

/*
	📌 Math.ceil()
	Redondea hacia arriba un numero.
*/
console.log(Math.ceil(10.1)); 
console.log(Math.ceil(10.99));

/*
	📌 Math.round()
	Redondea hacia el entero mas cercano
*/
console.log(Math.round(10.1)); // 10
console.log(Math.round(10.99)); // 11

/*
	📌 Ejemplo de numero al azar de 0 a 100
*/
// Obtenemos un numero de 0 a 1 y lo multiplicamos por 101
const num =  Math.random();
console.log(Math.floor(num * 101));