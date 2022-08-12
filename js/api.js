import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarApi(){

        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        
        fetch(url)
            .then(respuesta => { console.log(respuesta) } )
            .then(datos => {
                
                if(respuesta.lyrics){
                    const {lyrics} = datos;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion : ${this.cancion} de ${this.artista}`;
                }else{
                    UI.divMensajes.textContent = 'La cancion no existe';
                }
            })
            .catch(error => console.log(error));
    }
}

export default API;