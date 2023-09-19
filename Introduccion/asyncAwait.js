const fetchPosts = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts =['post1','post2','post3'];
            const error = true;

            if(error){
                reject('Hubo un error la intentar obtener los posts.');
            }else{
                resolve(posts);
            }
        },2000);
    }) ;
}

const mostrarPosts = async()=>{
    try{
        const posts = await fetchPosts();
        console.log(posts);
    }catch(error){
        console.log(error);
    }
}
mostrarPosts();