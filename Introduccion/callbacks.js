obtenerPostsDeUsuario = (usuario,callback)=>{
    console.log(`Obteniendo los post de: ${usuario} ...`);

    setTimeout(()=>{
        let posts = ['post1','post2','post3'];
        callback(posts);
    },2000);
}
const posts = obtenerPostsDeUsuario('Carlos',(posts)=>{
    console.log(posts);
});