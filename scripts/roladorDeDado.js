class roladorDeDado {
    constructor() {
        this.ativarInteração();
    }

    container = document.querySelector("#container-numero")
    displayNumero = document.querySelector("#display-numero");
    botãoRolador = document.querySelector("button");
    rolando = false;

    ativarInteração = () => {
        setTimeout(() => {
            this.container.style.opacity = 1;
        }, 1000);
        this.botãoRolador.addEventListener("click", () => {
            if (this.rolando) {
                return;
            }
            this.rolando = true;
            this.rolarDano();
        });
    }

    rolarDano = () => {
        let rolagens = 0;
        let dano;

        const intervaloRolador = setInterval(() => {
            dano = Math.ceil(Math.random() * 20);
            this.displayNumero.innerHTML = dano
            rolagens++
            if (rolagens >= 20) {
                clearInterval(intervaloRolador)
                this.rolando = false;
                this.rolarAlvo(dano)
            }
        }, 20);
    }

    causarDano = (hp, dano, player) => {
        const hpAtual = Number(hp.dataset.vida) - dano;
        hp.dataset.vida = hpAtual;
        hp.style.width = `${hpAtual}%`

        player.classList.add("machucado");
        
        setTimeout(() => {
            player.classList.remove("machucado")
        }, 200);

        if (hpAtual <= 0) {
            window.alert(`Infelizmente ${player.id} foi derrotado. Vamos para a próxima partida!`)
            location.reload()
        }
    }

    rolarAlvo = (dano) => {
        const aleatorio = Math.ceil(Math.random() * 20)
        if (aleatorio <= 10) {
            const p1 = document.querySelector("#p1")
            const hp1 = document.querySelector("#hp1");
            this.causarDano(hp1, dano, p1)
            new Audio("./audio/blue.mp3").play()
            return
        }
        const p2 = document.querySelector("#p2")
        const hp2 = document.querySelector("#hp2");
        this.causarDano(hp2, dano, p2)
        new Audio("./audio/red.mp3").play()
    }
}

export default roladorDeDado;