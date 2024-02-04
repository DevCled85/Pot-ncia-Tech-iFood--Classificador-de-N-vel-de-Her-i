//Escrevendo as Classes de Um Jogo
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque genérico';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi('Herói1', 25, 'mago');
heroi1.atacar();

const heroi2 = new Heroi('Herói2', 30, 'guerreiro');
heroi2.atacar();

const heroi3 = new Heroi('Herói3', 28, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Herói4', 22, 'ninja');
heroi4.atacar();

// Mensagem final
console.log("Mensagens de ataque exibidas no console.");
