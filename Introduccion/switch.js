const usuario = {
    nombre: 'Carlos',
    pais: 'Mexico'
};

switch(usuario.pais){
    case 'Mexico':
        console.log('El usuario es mexicano');
        break;
    case 'España':
        console.log('El usuario es español');
        break;
    case 'Argentina':
        console.log('El usuario es argentino');
        break;
    default:
        console.log('El usuario es de otro pais');
}