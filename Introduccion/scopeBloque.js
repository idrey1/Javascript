/* 📌 Block Scope o Alcance de tipo bloque
	- Son las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

// const edad = 19;
// if(edad >=18){
//     const accesoPermitido = true;

//     console.log(accesoPermitido);

//     if(true){
//         console.log(accesoPermitido);
//     }

//     const miFuncion = () =>{
//         console.log(accesoPermitido)
//     }
//     miFuncion();
// }

// const accesoPermitido = 'SI'
// console.log(accesoPermitido);

if(true){
    var nombre = 'Daniel';
    console.log(nombre);
}