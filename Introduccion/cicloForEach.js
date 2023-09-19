/*
	📌 Ciclo forEach
	Es un metodo de los arreglos que podemos usar para recorrer los elementos.
*/
// const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// amigos.forEach((amigo, index)=>console.log(`El amigo ${index} es: ${amigo}`));

/*
	📌 Ciclo for in
	Nos permite recorrer las propiedades de un objeto.
*/
// const persona = {
// 	nombre: 'Carlos',
// 	edad: 27,
// 	correo: 'correo@correo.com',
// };

// for(propiedad in persona){
//     persona[propiedad] = '';
// }
// console.log(persona);

/*
	📌 Ciclo for of
	Nos permite recorrer los valores de un objeto iterable.
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/

// Obtenemos una colección HTML de las etiquetas.
const etiquetas = document.head.children;
console.log(etiquetas);

for(elemento of etiquetas){
    console.log(elemento);
}

[...etiquetas].forEach((elemento)=>console.log(elemento));
