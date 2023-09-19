// Estructura de una condicional
//if(true){
    // Codigo a ejecutar
//}

// Ejemplo #1:
// const usuario = {
//     edad: 17,
//     pais: 'Mexico',
//     ticket: true,
// };

//if(usuario.edad > 17){
//    console.log('El usuario es mayor de edad, puede entrar al concierto.');
//}else{
//    console.log('El usuario es menor de edad, no puede entrar al concierto.');
//}

// Ejemplo #2 - Combinando operadores
// const usuario = {
//     edad: 17,
//     pais: 'Mexico',
//     ticket: true,
// };

// if(usuario.edad >= 18 && usuario.ticket){
//     console.log('El usuario es mayor de edad y tiene un ticket.');
// }else{
//     console.log('El usuario es menor de edad o no tiene un ticket.');
// }

// Ejemplo #3 - Anidando condicionales
// const usuario = {
//     edad: 18,
//     pais: 'Mexico',
//     ticket: false,
// };

// if(usuario.edad >=18){
//     if(usuario.ticket){
//         console.log('El usuario es mayor de edad y tiene un ticket.');
//     }else{
//         console.log('El usuario es mayor de edad pero no tiene un ticket.');
//     }
// }else{
//     console.log('El usuario es menor de edad.');
// }

// Ejemplo #4 -  elseif
const usuario = {
    edad: 18,
    pais: 'Argentina',
    ticket: false,
};

if(usuario.pais === 'Mexico'){
    console.log('El usuario es mexicano');
}else if(usuario.pais === 'Colombia'){
    console.log('El usuario es colombiano');
}else if(usuario.pais === 'España'){
    console.log('El usuario es español');
}else{
    console.log('El usuario es de otro pais');
}


const validaEdad = function(usuario){
    if(usuario.edad >=18){
        console.log('Es mayor de edad');
    }
};

if(validaEdad){
    console.log('Mayor');
}