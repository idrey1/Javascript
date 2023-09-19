/*
	📌 El Document Object Model nos da metodos que podemos utilizar
	para poder obtener elementos de la página web.
	- getElementById
	- children
	- parentElement
	- getElementsByTagName
	- getElementsByClassName
	- querySelectorAll
	- querySelector
	- closest
	- matches
*/

/*
	📌 getElementById
	Nos permite obtener un elemento en base a su atributo id
*/
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1); 

/* 
	📌 children
	Nos permite obtener los elementos hijo
*/
console.log(contenedor1.children);
console.log('--------------------------------------------');

/*
	📌 parentElement
	Nos permite obtener el elemento padre de un elemento
*/
console.log(contenedor1.parentElement);
console.log('--------------------------------------------');

/*
	📌 getElementsByTagName
	Nos permite obtener una colección de elementos en base a la etiqueta.
	Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/
// const divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(`Tenemos ${divs.length} divs en la pagina`);

/*
	📌 getElementsByClassName
	Nos permite obtener una colección de elementos en base a su clase CSS.
	Nota: Devuelve una colección HTML.
*/
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);
console.log('--------------------------------------------');

/*
	📌 querySelector
	Nos devuelve el primer elemento que coincida con un selector estilo CSS.
	Nota: Devuelve un nodelist.
*/
const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);
console.log('--------------------------------------------');

/*
	📌 querySelectorAll
	Nos permite obtener una colección de elementos en base a un selector estilo CSS.
	Nota: Devuelve un nodelist. 
*/
const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);
console.log('--------------------------------------------');

cajas.forEach((caja) =>{
	console.log(caja);
});
console.log('--------------------------------------------');

/* 
	📌 closest
	Nos permite buscar de adentro hacia afuera en busca de un elemento
*/
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));
console.log('--------------------------------------------');
/* 
	📌 Podemos encadenar todos los metodos para obtener elementos.
*/
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));
console.log(contenedor2.querySelectorAll('.caja'));


