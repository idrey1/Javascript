class Usuario {
    constructor(usuario,password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPosts(){
        const posts = ['post1','post2'];
        return posts;
    }
}

class Moderador extends Usuario{
    constructor(usuario,password,permisos){
        super(usuario,password);
        this.permisos = permisos;
    }

    borrarPosts(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el id:${id} ha sido borrado`);
        }else{
            console.log('No tienes los permisos para borrar post');
        }
    }
}

const usuario = new Usuario('Carlos','123');
console.log(usuario.obtenerPosts());

const usuario2 = new Moderador('Daniel','345',['borrar','editar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPosts(7);