
/* 
	📌 Ciclos
	Los ciclos son estructuras que nos van a permitir repetir 
	un bloque de código cuantas veces necesitemos.
*/
const nombres = ['Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel'];
nombres.forEach((nombre)=>{
    console.log(nombre);
});

/* 
	📌 Ciclo For
	Repite un bloque de código mientras se cumpla una condición.
	Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
	Expresión 2: Una condicion, mientras se cumpla se ejecutara el bloque de código.
	Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de código.
*/
for(let numero = 1; numero<11; numero++){
    console.log(numero);
}

for(let numero =50;numero>0;numero --){
    console.log(numero);
}

for(let index=0; index < nombres.length;index ++){
    console.log(nombres[index]);
}