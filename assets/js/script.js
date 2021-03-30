/* Retornar los 20 primeros titulos de las canciones*/
const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
  
    try {
      const dataRaw = await fetch(url);
      const dataJson = await dataRaw.json();
      const dataslice=dataJson.slice(0,20);
     dataslice.forEach(valor => {
        console.log(valor.title, valor.id); 
     });
    } catch (error) {
      console.log(error);
    }
  };
getData();

/*Crear una función que retorne una promesa después de tres (3) segundos 
utilizando setTimeout. El mensaje a retornar debe ser un string que indique: 
“Información Enviada”.*/
const mensaje=() => {
    setTimeout(()=>{
        console.log("Información Enviada");
    },3000);
}

/*Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el 
requerimiento cinco (5), de forma 
await, para ser mostrado en la consola del navegador, agregando 
el llamado a las dos funciones principales.*/
const verMensaje= async () => {
    try{
    await mensaje ();
    }catch(error){
        console.log(error);
    }
}
verMensaje();



