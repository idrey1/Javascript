/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/
var numero = 1;

var obtenerNumerLetras = (nombre) =>{
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () =>{
        console.log(numero);
    }
    funcionAnidada();
};

obtenerNumerLetras('Daniel');
//console.log(numero);