/*
	📌 Eventos
	Los eventos en Javascript nos permiten reaccionar a cosas que ocurren en la página web
	Como por ejemplo reaccionar cuando:
	- la página termina de cargar
	- el usuario da click a un boton
	- pasa el mouse arriba de un elemento
	- escribe en un campo de texto
	- envia un formulario
	- etc.
	Hay cientos de eventos a los que podemos reaccionar:
	https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
*/

/*
	📌 Eventos como atributo de elementos HTML
	Podemos agregar algunos eventos como atributo de un elemento HTML
	Ejemplo:
	
	<button onClick="toggleClase()">Toggle Clase</button>
*/
// const toggleClase = () => {
// 	const caja = document.querySelector('.caja');
// 	caja.classList.toggle('activa');
// };

/*
	📌 Event Listener
	Una mejor forma de trabajar con eventos es agregando un listener.
	Un listener nos permitira vigilar cuando se ejecute un evento sin tener que ensuciar el código HTML.
*/

const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click',(event)=>{
    primeraCaja.classList.toggle('activa');
});

/*
	📌 Agregando el evento a multiples elementos
	Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
	Nota: Esta no es la forma mas optima, en la proxima clase veremos una mejor forma.
*/
const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja)=>{
    caja.addEventListener('click',(e)=>{
        console.log(e);
        console.log(`Haz hecho click en la caja: ${e.target.innerHTML}`);
    });
});

