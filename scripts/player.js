class tocadorDeMúsica {
    constructor(){
        this.ativarInteração();
    }
    
    tocador = document.querySelector("audio");
    tocando = false;

    ativarInteração = () => {
        document.body.addEventListener("click", this.tocarMusica);
    }

    tocarMusica = () => {
        if (this.tocando) {
            return;
        }
        this.tocador.play();
        this.tocando = true;
    }
}

export default tocadorDeMúsica;