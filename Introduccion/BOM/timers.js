/**
 * window.setTimeOut()
 * Nos permite ejecutar una función después de cierto tiempo.
 * Regresa un identificador para el timeout que podremos 
 * guardar en una variable
 */

const saludo =()=>{
    console.log('Hola!!!');
}

//Va a empezar a correr el tiempo hasta que se llame la función
//puede ser en un evento onclick de un botón HTML
let id;
const iniciar = () =>{
    console.log('Iniciando timer!');
    id = setTimeout(saludo,5000);
}

/**
 * Detener timeOut (clearTimeout)
 * Recibe un identificador del timeOut
 */
const parar = () =>{
    console.log('Parando timer!');
    clearTimeout(id);
}

/**
 * window.setInterval()
 * Nos permite ejecutar una función cada cierto tiempo.
 * Recibe un identificador del intervalo.
 */
let cuenta = 0;
let idInterval;
const inicio = ()=>{
    idInterval = setInterval(()=>{
        console.log(cuenta);
        cuenta++;
    },1000);
}

const detener= ()=>{
    console.log('Paramos la cuenta!');
    clearInterval(idInterval);
}
