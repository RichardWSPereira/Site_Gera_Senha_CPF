import validaCPF from './validaCPF'


// Criação da classe que utilizará dos métodos de validaCPF importados
export default class geraCPF {
    // Este método gerará 9 numeros aleatórios para o CPF, de onde o método de validaCPF utilçizará para criar os outros dois dígitos de acordo com o cálculo de validação do governo
    rand(min = 10000000, max = 99999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    // O nono numero do CPF será obtido do valor atrelado a cada código do estado registrado no HTML
    nonoNumero() {
        const estado = document.querySelector('.estado');

        if(!estado.value) return "0";

        return String(estado.value);   
    }

    // Construindo o CPF com o 8 digitos gerados aleatóriamente + o digito do estado, concatenado com os dois digitos que foram obtido pela class validaCPF através de seu método static
    geraNovoCPF() {
        const cpfSemDigito = this.rand() + this.nonoNumero()
        const digito1 = validaCPF.geraDigito(cpfSemDigito);
        const digito2 = validaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2

        return novoCPF;
    }
}

