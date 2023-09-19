/*
	📌 Podemos modificar los estilos CSS de un elemento de dos formas:
	- Agregando y quitando clases CSS
	- Modificando los estilos "inline" de cada elemento.
*/

/*
	📌 Modificar estilos CSS mediante "inline styles".
*/
/*
	Los estilos inline se aplican arriba de los estilos que podamos tener en archivos CSS.
	Estos estilos se agregan en el atributo style del elemento.
*/
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = ()=>{
    cajas.forEach((caja)=>{
        tamaño++;
        caja.style.fontSize = `${tamaño}px`;
    });
};

const disminuirFuente = ()=>{
    cajas.forEach((caja)=>{
        tamaño--;
        caja.style.fontSize = `${tamaño}px`;
    });
};
