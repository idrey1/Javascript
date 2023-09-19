class Usuario{
    constructor(nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrarUsuario(id_usuario){
        console.log(`El usuario con id:${id_usuario} ha sido borrado de la DB`)
    }

    static registrados = 1000;
}

// const usuario = new Usuario('Daniel','correo@correo.com');
// usuario.borrarUsuario(1);
Usuario.borrarUsuario(1);
console.log(Usuario.registrados);