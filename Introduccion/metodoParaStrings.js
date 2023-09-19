/*
	📌 Métodos y propiedades para cadenas de texto
*/

/*
	📌 .length - Devuelve el numero de caracteres de una cadena de texto 
*/
const texto = 'Hola yo soy Daniel';
console.log(texto.length);

/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
    Si regresa -1 es porque no encontro la posición a buscar
*/
const texto2 = 'Hola yo soy Daniel';
const posicion = texto2.indexOf('h');
const posicion2 = texto2.lastIndexOf('o');
console.log(posicion2);

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/
const texto3 = 'Hola yo soy Daniel';
// const index = texto3.indexOf('s');
// const lastIndex = texto3.lastIndexOf('s');
// console.log(texto3.slice(index, lastIndex+1));
console.log(texto3.slice(-7,-1));
console.log(texto3)

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
const texto4 = 'Hola yo soy Daniel';
console.log(texto4.replace('Daniel','Arturo'));

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.
	1er parametro - el caracter que funcionara como separador.
*/
const texto5 = 'Hola yo soy Daniel';
console.log(texto5.split('o'));

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
console.log(texto5.toUpperCase());
console.log(texto5.toLowerCase());

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.
	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const texto6 = '   Hola yo soy Carlos!   ';
console.log(texto6);

console.log(texto6.trim());
console.log(texto6.trimStart());
console.log(texto6.trimEnd());